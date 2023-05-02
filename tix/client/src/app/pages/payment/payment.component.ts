import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent {
  id:number=0;
  constructor(private route: ActivatedRoute,private ticket:TicketService) {
    this.route.params.subscribe(params => this.id=params['id']);
  
  }  
}
