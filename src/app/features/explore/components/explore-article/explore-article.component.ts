import { Component, OnInit } from '@angular/core';
import { PlansService } from '../../services/plans.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-article',
  templateUrl: './explore-article.component.html',
  styleUrls: ['./explore-article.component.scss']
})
export class ExploreArticleComponent implements OnInit {
  public specificArticle: any;
  public currentRoute: string;

  constructor(public plansServ: PlansService, private router: Router) {
    this.currentRoute = (router.url).slice(14);
    this.currentRoute = this.prettyUrl(this.currentRoute);          /*converts %20 url into an ID we can use to Retrieve firestore.  I feel there is a better way but will research later*/
    this.currentRoute = this.currentRoute.toLocaleLowerCase();
    this.specificArticle = plansServ.getAllPlans().doc(this.currentRoute).collection("specifics").valueChanges()
  }

  prettyUrl(childRoute: string) {
    childRoute = childRoute.replace(/%20/g, '')
    return childRoute
  }





  ngOnInit(): void {
  }

}
