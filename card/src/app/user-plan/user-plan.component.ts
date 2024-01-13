import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';
import { users } from '../../../user';
import { UserPlanService } from '../../user-plan.service';

@Component({
  selector: 'app-user-plan',
  templateUrl: './user-plan.component.html',
  styleUrl: './user-plan.component.css'
})
export class UserPlanComponent implements OnInit{
   customer_data: users | any= [];
   
  // constructor(private userService : UserService){}
  
  // ngOnInit():void{
  //   this.userService.getUsers().subscribe(customer_data=>{
  //     this.customer_data=customer_data;
  //   })
  // }

  //userplan 

  customerData: users[] = [];
  selectedCustomerId: number | null = null;
  selectedPlanId: number | null = null;
  selectedPlanType: string | null = null;
  constructor(private userPlanService: UserPlanService) {}

  ngOnInit(): void {
    this.userPlanService.getCustomerData().subscribe((data) => {
      this.customerData = data;
    });
  }

  onAddButtonClick(): void {
    if (this.selectedCustomerId !== null && this.selectedPlanId !== null && this.selectedPlanType !== null) {
      this.userPlanService.updateCustomerPlan(
        this.selectedCustomerId,
        this.selectedPlanId,
        this.selectedPlanType
      ).subscribe(() => {
        this.userPlanService.getCustomerData().subscribe((data) => {
          this.customerData = data;
        });
      });
    }
  }

  onSelectCustomer(customerId: number): void {
    this.selectedCustomerId = customerId;
  }

  onSelectPlan(planId: number, planType: string): void {
    this.selectedPlanId = planId;
    this.selectedPlanType = planType;
  }

}

