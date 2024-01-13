import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans,b_plans } from '../../../card';



@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  plans: i_plans[] | any = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';

  constructor(private basicPlanService: BasicPlanService,private http : HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
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

  // recharge(planItem: any): void {
  //   const confirmRecharge = window.confirm(`Confirm recharge for ${planItem.plan_name} plan?`);

  //   if (confirmRecharge) {
  //     // Perform the recharge logic here
  //     this.performRecharge(planItem);
  //   } else {
  //     // User clicked No, do something else or nothing
  //   }
  // }

  // performRecharge(planItem: any): void {
  //   // Your recharge logic here
  //   console.log('Recharge performed for', planItem);
  //   // Call your payment logic here, e.g., makePayment(planItem)
  //   this.makePayment(planItem);
  // }

  // makePayment(planItem: any): void {
  //   // Your payment logic here
  //   console.log('Payment made for', planItem);
  // }

 
  }


  




