import { Component, Input } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket, TicketArray } from 'src/app/interfaces/ticket';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from 'src/app/services/payment.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent {
  paymentForm: FormGroup;
  @Input() idt = '';
  tickets: TicketArray[] = [];
  ourTicket: any;
  constructor(private fb: FormBuilder, private ticketService: TicketService,private paymentService: PaymentService, private router: Router) {
    this.ticketService.getTicket().subscribe((res: Ticket) => {
      this.tickets = res.ticket;
      for (let ticket of this.tickets) {
        if (ticket.id_ticket == this.idt) {
          console.log(ticket);
          this.ourTicket = ticket;
          console.log('our_T:'+ JSON.stringify(this.ourTicket));
        }
      }
    })
    this.paymentForm = this.fb.group({
      name: ['', [Validators.required]],
      cardnumber: ['', [Validators.required]],
      mm: ['', [Validators.required]],
      yy: ['', [Validators.required]],
      ccv: ['', [Validators.required]]
    });

  }
  onSubmit() {

    const ls = localStorage.getItem('user');

    if (ls !== null) {
      const paymentData = {
        ticket_id: this.ourTicket.id_ticket,
        client_id: JSON.parse(ls).id_client,
        name: this.paymentForm.value.name,
        mm: this.paymentForm.value.mm,
        yy: this.paymentForm.value.yy,
        ccv: this.paymentForm.value.ccv,
        card_number: this.paymentForm.value.cardnumber
      };
      this.paymentService.createPayment(paymentData).subscribe(
        response => {
          console.log(response.message);
          this.router.navigate(['/calender']);
        },
        error => {
          console.log(error);
          // handle error
        }
      );
    }
  }
}
