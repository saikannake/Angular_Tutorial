import { Component, OnInit } from '@angular/core';
import { VenuesService } from '../venues.service';

@Component({
  selector: 'app-all-matches',
  templateUrl: './all-matches.component.html',
  styleUrls: ['./all-matches.component.css']
})
export class AllMatchesComponent implements OnInit {
  allMatches = [];
  constructor(private commonService: VenuesService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.commonService.getMatches().subscribe((res: any) => {
      this.allMatches = res.response.venues.map(venue => {
        return {
          ...venue,
          isActive: false
        }
      });
      console.log(this.allMatches);
    })
  }

  public venueList = [];

  saveVenue(venue) {

    venue.isActive = !venue.isActive;
    if(venue.isActive) {
      this.venueList.push(venue)
      localStorage.setItem('venue', JSON.stringify(this.venueList))
    }else {
      const venueData = JSON.parse(localStorage.getItem('venue'));
      this.venueList = venueData.filter(data => data.id !== venue.id);
      localStorage.setItem('venue', JSON.stringify(this.venueList))
    }
    console.log(venue);
  }


}
