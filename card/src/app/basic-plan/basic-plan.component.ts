import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans } from '../../../card';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  plans: i_plans[] | any = [];

  uplan: any[] = [];

  selectedType: string = 'individual'; // Default to 'individual'
  individualPlans: any[] = [];
  businessPlans: any[] = [];

  constructor(private basicPlanService: BasicPlanService, private http: HttpClient) {}

  // ngOnInit(): void {
  //   this.basicPlanService.getPlans().subscribe((plans) => {
  //     this.plans = plans;
  //   });

  //   this.fetchData();
  // }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    // Fetch individual plans from the individual JSON server
    this.basicPlanService.getIndividualPlans().subscribe((data) => {
      this.individualPlans = data;
    });

    // Fetch business plans from the business JSON server
    this.basicPlanService.getBusinessPlans().subscribe((data) => {
      this.businessPlans = data;
    });
  }

  selectType(type: string): void {
    this.selectedType = type;
  }

  filteredPlans(): any[] {
    return this.selectedType === 'individual' ? this.individualPlans : this.businessPlans;
  }
 
  }


  




