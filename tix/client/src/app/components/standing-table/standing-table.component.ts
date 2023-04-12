import { Component, Input } from '@angular/core';
import { StandingService } from 'src/app/services/standing.service';
import { Standing ,Table} from '../../interfaces/standing'
@Component({
  selector: 'app-standing-table',
  templateUrl: './standing-table.component.html',
  styleUrls: ['./standing-table.component.css']
})
export class StandingTableComponent {
  satandingData !: Standing;
  numberOftables = 0;
  tables !: Table[] ;
  constructor(private getStandings: StandingService) {
    //get data from service
    
    this.getStandings.getStandings().subscribe((res: Standing) => {
      this.satandingData = res;
      this.numberOftables = this.satandingData.doc[0].data.tables.length;
      this.tables = this.satandingData.doc[0].data.tables;
    })
  }
}
