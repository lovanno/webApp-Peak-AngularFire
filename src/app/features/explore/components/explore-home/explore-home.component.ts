import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlansService } from '../../services/plans.service';
@Component({
  selector: 'app-explore-home',
  templateUrl: './explore-home.component.html',
  styleUrls: ['./explore-home.component.scss']
})
export class ExploreHomeComponent implements OnInit {
  public allArticles: any;
  public toggleValue = "events";

  constructor(public plansServ: PlansService) {
    this.allArticles = plansServ.getAllPlans().valueChanges();
  }


  ngOnInit(): void {
  }

}
