import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans,b_plans } from '../../../card';
import {users} from '../../../user';



@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  updated!:users;
  userProfile!:users;
  plans: i_plans[] | any = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';

  constructor(private basicPlanService: BasicPlanService,private http : HttpClient) {}

  ngOnInit(): void {
    this.fetchData();

    const id:number=1;  
   this.basicPlanService.getUserProfile(id).subscribe(data=>{
   
    this.userProfile=data;

    console.log(this.userProfile.plan_id);
    
   
   });
  }

  selectType(type: string): void {
    if (type === 'individual') {
      this.basicPlanService.getIndividualPlans().subscribe((plans) => {
        this.plans = plans;
      });
    } else if (type === 'business') {
      this.basicPlanService.getBusinessPlans().subscribe((bplans) => {
        this.bplans = bplans;
      });
    }
  }

  getFilteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.plans : this.bplans;
  }

  fetchData(): void {
    this.selectType('individual'); // Default to individual plans
  }


 recharge(id:number,type:string)
 {
  console.log(type);
  
  
    this.basicPlanService.rereq(id,type,this.userProfile).subscribe(
      updatedUser => {
        this.updated = updatedUser;
        console.log('User profile updated:', updatedUser);
      },
      error=>console.error("updated",error)
    );
 }
      
 }
  


  




