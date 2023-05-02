import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent {
  @Input() idt='';
  @Input() ligue='';
  @Input() team1='';
  @Input() team2='';
  @Input() date='';
  @Input() time='';
  @Input() team1ID='';
  @Input() team2ID='';
  @Input() logo1='';
  @Input() logo2='';

  
}
