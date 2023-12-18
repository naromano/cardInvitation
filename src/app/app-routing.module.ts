import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BirthdayComponent } from './components/birthday/birthday.component';
import { WeddingComponent } from './components/wedding/wedding.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  
  {path: 'xvcumpleaños', component:BirthdayComponent},
  {path: 'boda', component:WeddingComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
