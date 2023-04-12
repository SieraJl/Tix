import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-standing-line',
  templateUrl: './standing-line.component.html',
  styleUrls: ['./standing-line.component.css']
})
export class StandingLineComponent {
  @Input() team :string=''
  @Input() played :string= ''
  @Input() position :string= ''
  @Input() won :string= ''
  @Input() draw :string= ''
  @Input() lost :string= ''
  @Input() goalDifference :string= ''
  @Input() points :string= ''
  @Input() lastFive :string= ''
  @Input() next :string= ''
}
