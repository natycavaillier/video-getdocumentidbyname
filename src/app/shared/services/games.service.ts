import { Injectable } from '@angular/core';
import { collectionData, Firestore, query, where } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private db: Firestore
  ) { }

  games = collection(this.db, 'Games');

  getDocumentsByName(name: string) {
    const queryByName = query(this.games, where('name', '==', name));

    return collectionData(queryByName, {idField: 'id'});
  }

}
