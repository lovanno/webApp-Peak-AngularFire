import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable, Subscription } from 'rxjs';
import { ChoosenCity } from '../interfaces/choosen-city';

@Injectable({
  providedIn: 'root'      /*Will have to research how singletons affect overall memory*/
})
export class CitiesService {
  private locationPath = '/locations';
  private locationCollection: AngularFirestoreCollection<any>
  public cityItems$: Observable<ChoosenCity[]>;
  public currentOpp: Subscription | undefined;

  public cityImg: string | undefined;        /*We'll use a variable instead of a subject. We'll change if it's needed in the explore page*/
  public cityCord: maplibregl.LngLatLike | undefined;


  constructor(private readonly afs: AngularFirestore) {
    this.locationCollection = afs.collection<any>(this.locationPath);
    this.cityItems$ = this.locationCollection.valueChanges();
  }


  getOrder(id: string) {
    return this.locationCollection.doc(id).valueChanges();
  }

  getImg(id: string) {
    this.cityImg = ""  /*If no city is chosen, this will be the default*/

    if (id) {
      this.currentOpp = this.locationCollection.doc(id.toLowerCase()).get().subscribe(f => {
        this.cityImg = f.data().imgUrl
      })
    }
    return this.cityImg
  }

  getCityCord(id: string) {
    this.cityCord = [0, 0]  /*If no city is chosen, this will be the default*/

    if (id) {
      this.currentOpp = this.locationCollection.doc(id.toLowerCase()).get().subscribe(f => {
        this.cityCord = [f.data().center._long, f.data().center._lat]
      })
    }
    return this.cityCord
  }



  ngOnDestroy() {
    if (this.currentOpp) {
      this.currentOpp.unsubscribe()
    }
  }

}
