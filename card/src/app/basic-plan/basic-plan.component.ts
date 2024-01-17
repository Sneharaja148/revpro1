import { Component, OnInit } from '@angular/core';
import { BasicPlanService } from './basic-plan.service';
import { i_plans, b_plans } from '../../../card';
import { users } from '../../../user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-basic-plan',
  templateUrl: './basic-plan.component.html',
  styleUrls: ['./basic-plan.component.css']
})
export class BasicPlanComponent implements OnInit {
  updatedUser: users | undefined;
  userProfile: users | undefined;
  plans: i_plans[] = [];
  bplans: b_plans[] = [];
  selectedType: string = 'individual';

  constructor(private basicPlanService: BasicPlanService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.fetchData();
    const id: number = 1;
    this.basicPlanService.getUserProfile(id).subscribe(data => {
      this.userProfile = data;
      console.log(this.userProfile?.plan_id);
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

  recharge(id: number, type: string): void {
    console.log(type);

    if (this.userProfile) {
      this.basicPlanService.rereq(id, type, this.userProfile).subscribe(
        updatedUserData => {
          this.updatedUser = updatedUserData;
          console.log('User profile updated:', updatedUserData);

          // Show success message
          this.snackBar.open('Recharge successful', 'Close', {
            duration: 3000,  // Duration in milliseconds
          });
        },
        error => {
          console.error('updated', error);

          // Show error message
          this.snackBar.open('Recharge failed', 'Close', {
            duration: 3000,
          });
        }
      );
    }
  }
}
