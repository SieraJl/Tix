import { Component } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketArray, Ticket } from '../../interfaces/ticket';

@Component({
  selector: 'app-ticket-group',
  templateUrl: './ticket-group.component.html',
  styleUrls: ['./ticket-group.component.css']
})
export class TicketGroupComponent {
  matchesData !: Ticket;
  //array of all the matches 
  matchesArray: TicketArray[] = [];
  //array of matches that didn't start yet 
  nextMatch: TicketArray[] = [];
  ligue:string='';
  constructor(private getMatchsService: TicketService) {
    //get data from service 
    this.getMatchsService.getTicket().subscribe((matches: Ticket) => {
      this.matchesData = matches; 
      this.ligue="Ligue 1 22/23";
      this.matchesArray = this.matchesData.ticket;
      // const now = new Date();
    //  for (let match of this.matchesArray) {
    //   //reform the date come from api
    //   const [matchDay, matchMonth, matchYear] = match.time.date.split("/");
    //   const [matchHour, matchMinute] = match.time.time.split(":");
    //   // create a new Date object for the match time and date
    //   const matchDate = new Date(2000+parseInt(matchYear), parseInt(matchMonth) - 1, parseInt(matchDay), parseInt(matchHour), parseInt(matchMinute));
    //   //check if the date of the match > now date and add it to new array 
      
    //   if (matchDate>now) {
        
    //     this.nextMatch.push(match);
    //   }
    //  }
  })


}}

