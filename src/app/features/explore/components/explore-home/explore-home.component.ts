import { Component } from '@angular/core';
import { PlansService } from '../../services/plans.service';
@Component({
  selector: 'app-explore-home',
  templateUrl: './explore-home.component.html',
  styleUrls: ['./explore-home.component.scss']
})
export class ExploreHomeComponent {
  public allArticles: any;
  public toggleValue = "events";

  constructor(public plansServ: PlansService) {
    this.allArticles = plansServ.getAllPlans().valueChanges();
  }

}
