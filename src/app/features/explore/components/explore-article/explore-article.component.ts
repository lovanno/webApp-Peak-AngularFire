import { Component } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-explore-article',
  templateUrl: './explore-article.component.html',
  styleUrls: ['./explore-article.component.scss']
})
export class ExploreArticleComponent {
  public $specificArticle: Observable<any>;
  public currentRoute: string;

  constructor(public plansServ: PlansService, private router: Router) {
    this.currentRoute = (router.url).slice(14);
    this.currentRoute = this.prettyUrl(this.currentRoute);
    this.currentRoute = this.currentRoute.toLocaleLowerCase();
    this.$specificArticle = plansServ.getAllPlans().doc(this.currentRoute).collection("specifics").valueChanges();
  }

  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/-/g, '')
    return childRoute
  }

}
