import { Component } from '@angular/core';
import { GetMatchsService } from '../../services/get-matchs.service';
import { LigueNextMatches, Match } from '../../interfaces/ligue-next-matches';

@Component({
  selector: 'app-ticket-group',
  templateUrl: './ticket-group.component.html',
  styleUrls: ['./ticket-group.component.css']
})
export class TicketGroupComponent {
  matchesData !: LigueNextMatches;
  //array of all the matches 
  matchesArray: Match[] = [];
  //array of matches that didn't start yet 
  nextMatch: Match[] = [];
  ligue:string='';
  constructor(private getMatchsService: GetMatchsService) {
    //get data from service
    this.getMatchsService.getLigue1Matchs().subscribe((matches: LigueNextMatches) => {
      this.matchesData = matches; 
      this.ligue=this.matchesData.doc[0].data.name;
      this.matchesArray = this.matchesData.doc[0].data.matches;
      const now = new Date();
     for (let match of this.matchesArray) {
      //reform the date come from api
      const [matchDay, matchMonth, matchYear] = match.time.date.split("/");
      const [matchHour, matchMinute] = match.time.time.split(":");
      // create a new Date object for the match time and date
      const matchDate = new Date(2000+parseInt(matchYear), parseInt(matchMonth) - 1, parseInt(matchDay), parseInt(matchHour), parseInt(matchMinute));
      //check if the date of the match > now date and add it to new array 
      
      if (matchDate>now) {
        
        this.nextMatch.push(match);
      }
     }
  })


}}

