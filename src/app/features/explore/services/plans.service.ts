import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { PlanLocations } from '../interfaces/plan-locations';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  private plansPath = '/plans';
  private allPlansCOL: AngularFirestoreCollection

  constructor(private afs: AngularFirestore) {
    this.allPlansCOL = afs.collection<PlanLocations>(this.plansPath);
  }

  getAllPlans() {
    return this.allPlansCOL.doc("chicago").collection("cityPlans");
  }










}
