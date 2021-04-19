import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  private venuesUrl: string = 'http://localhost:3000/venues'; 
  constructor(private _http: HttpClient) { }

  createMatches(data): Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this._http.post(this.venuesUrl,data,httpOptions);
  }

  getMatches(){
    return this._http.get('https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&oauth_token=NPKYZ3WZ1VYMNAZ2FLX1WLECAWSMUVOQZOIDBN53F3LVZBPQ&v=20180616');
  }
  updateMatches(){}
  deleteMatches(){}

}
