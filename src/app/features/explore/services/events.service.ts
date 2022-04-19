import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private path = 'events/'
  public allEvents: AngularFirestoreCollection<any>;

  constructor(public afs: AngularFirestore) {
    this.allEvents = afs.collection<any>(this.path)
  }


  getAllEvents() {
    return this.allEvents.doc("chicago");
  }
}
