import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() ligue='';
  @Input() team1='';
  @Input() team2='';
  @Input() date='';
  @Input() time='';

}
