import { Component, OnInit } from '@angular/core';
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

  getDocumentIdByName(name: string) {

    this.gamesService.getDocumentsByName(name)
      .subscribe((games) => {
        console.log(games[0]['id']);
      });

  }



  ngOnInit() {
  }

}
