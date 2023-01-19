import { Component, OnInit } from '@angular/core';
import { collectionGroup, getDocs, getFirestore, where } from '@angular/fire/firestore';
import { query } from '@firebase/firestore';
import { GamesService } from '../shared/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  constructor(
    private gamesService: GamesService
  ) { }


  nameInput!: string;

  async getDocumentIdByName(name: string) {
    const id = await this.gamesService.getDocumentIdByName(name);

    console.log(id);
  }



  ngOnInit() {
  }

}
