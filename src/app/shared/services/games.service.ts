import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs, query, where } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(
    private db: Firestore
  ) { }

  games = collection(this.db, 'Games');

  async getDocumentIdByName(name: string) {
    const queryByName = query(this.games, where('name', '==', name));

    const querySnapshot = await getDocs(queryByName);

    return !querySnapshot.empty ? querySnapshot.docs[0].id : null;
  }

}
