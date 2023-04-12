import { Component,Input } from '@angular/core';
import { Table } from 'src/app/interfaces/standing';
@Component({
  selector: 'app-standing-one-table',
  templateUrl: './standing-one-table.component.html',
  styleUrls: ['./standing-one-table.component.css']
})
export class StandingOneTableComponent {
  @Input() table!: Table;       
  clubLogo: any;
  constructor() {};
  public getClubLogo(id:number): any{
    switch (id) {
     case 59628:
       return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608828783_media.png";
       break;
     case 35188: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608829554_media.png";
     break;
     case 59638: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1609169169_media.png";
     break;
     case 39618: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1582386973_team.jpg";
     break;
     case 59636: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608827731_media.png";
     break;
     case 44463: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608828236_media.png";
     break;
     case 378002: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1566659580_team.jpg";
     break;
     case 283347: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608881356_media.jpg";
     break;
     case 148874: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444404507_team.png";
     break;
     case 59634: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1473430753_team.png";
     break;
     case 59618: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1608880304_media.png";
     break;
     case 112647: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444404830_team.png";
     break;
     case 223600: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1444378318_team.png";
     break;
     case 59626: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1635946236_media.jpg";
     break;
      case 239028: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1635949528_media.jpg";
      break;
      case 402353: return "https://content.mosaiquefm.net/uploads/sportTeam/thumbnails/1607213895_media.png";

     default:return "https://pbs.twimg.com/profile_images/578844000267816960/6cj6d4oZ_400x400.png";
       break;
    }
   }
  
  }

      

