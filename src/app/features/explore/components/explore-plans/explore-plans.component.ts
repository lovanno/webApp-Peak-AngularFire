import { Component } from '@angular/core';
import { PlansService } from '../../services/plans.service';

@Component({
  selector: 'app-explore-plans',
  templateUrl: './explore-plans.component.html',
  styleUrls: ['./explore-plans.component.scss']
})
export class ExplorePlansComponent {
  public allArticles: any;
  public toggleValue = "events";

  constructor(public plansServ: PlansService) {
    this.allArticles = plansServ.getAllPlans().valueChanges();
  }

}
