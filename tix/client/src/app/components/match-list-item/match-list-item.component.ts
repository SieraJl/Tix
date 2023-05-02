import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-match-list-item',
  templateUrl: './match-list-item.component.html',
  styleUrls: ['./match-list-item.component.css']
})
export class MatchListItemComponent {
  @Input() chempionship='';
  @Input() team1='';
  @Input() logoTeam1='';
  @Input() team2='';
  @Input() logoTeam2='';
  @Input() score1='';
  @Input() score2='';
  
}
//function to add two numbers
function addTwoNumber(param1:number,param2:number) {
  return param1 + param2;
}