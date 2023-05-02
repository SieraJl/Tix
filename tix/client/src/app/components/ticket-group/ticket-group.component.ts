import { Component, Input } from '@angular/core';
import { TicketService } from '../../services/ticket.service';
import { TicketArray, Ticket } from '../../interfaces/ticket';

@Component({
  selector: 'app-ticket-group',
  templateUrl: './ticket-group.component.html',
  styleUrls: ['./ticket-group.component.css']
})
export class TicketGroupComponent {
  searchText: any;
  matchesData !: Ticket;
  //array of all the matches 
  matchesArray: TicketArray[] = [];
  //array of matches that didn't start yet 
  nextMatch: TicketArray[] = [];
  ligue: string = '';
  constructor(private getMatchsService: TicketService) {
    //get data from service 
    this.getMatchsService.getTicket().subscribe((matches: Ticket) => {
      this.matchesData = matches;
      this.ligue = "Ligue 1 22/23";
      this.matchesArray = this.matchesData.ticket;
      if (this.nbrOfLines!=='all') {
        this.matchesArray = this.matchesArray.slice(0, +this.nbrOfLines);
      }
    })
 }
 @Input() nbrOfLines='';
}

