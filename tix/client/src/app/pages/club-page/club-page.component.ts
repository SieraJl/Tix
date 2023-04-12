import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { ClubService } from 'src/app/services/club.service';
import { Club } from 'src/app/interfaces/club';
@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  styleUrls: ['./club-page.component.css']
})

export class ClubPageComponent {
  id:number=0;
  res!:Club;
  constructor(private route: ActivatedRoute,private getClub: ClubService) {

    this.route.params.subscribe(params => this.id=params['id']);
    this.getClub.getClubById(this.id).subscribe((res: Club) => {
      this.res = res;
      console.log(this.res);
    })
    
  }
}



