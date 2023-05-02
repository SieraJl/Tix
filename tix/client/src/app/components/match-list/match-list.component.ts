import { Component } from '@angular/core';
import {GetMatchsService} from '../../services/get-matchs.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent {
  matchesData: any;
  now=Date.parse("29/03/2023");
  ligue = "Ligue 1 22/23";
  constructor(private getMatchsService: GetMatchsService) {
    this.getMatchsService.getLigue1Matchs().subscribe((matches: any) => {
      this.matchesData=matches.doc[0].data.matches;
    })
  }
  

}
