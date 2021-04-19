import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-matches',
  templateUrl: './saved-matches.component.html',
  styleUrls: ['./saved-matches.component.css']
})
export class SavedMatchesComponent implements OnInit {

  public savedData = [];
  constructor() { }

  ngOnInit(): void {
    this.savedData = JSON.parse(localStorage.getItem('venue'));
  }
 
  saveVenue(venue) {

    venue.isActive = !venue.isActive;
    if(venue.isActive) {
      this.savedData.push(venue)
      localStorage.setItem('venue', JSON.stringify(this.savedData))
    }else {
      const venueData = JSON.parse(localStorage.getItem('venue'));
      this.savedData = venueData.filter(data => data.id !== venue.id);
      localStorage.setItem('venue', JSON.stringify(this.savedData))
    }
    console.log(venue);
  }

}
