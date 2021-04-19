import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllMatchesComponent } from './all-matches/all-matches.component';
import { AppComponent } from './app.component';
import { SavedMatchesComponent } from './saved-matches/saved-matches.component';


const routes: Routes = [
  { path: 'all-matches', component: AllMatchesComponent },
  { path: 'saved-matches', component: SavedMatchesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
