import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UgyfelComponent } from './ugyfel/ugyfel.component';
import { KeszletComponent } from './keszlet/keszlet.component';
import { KolcsonzesComponent } from './kolcsonzes/kolcsonzes.component';
import { VisszavitelComponent } from './visszavitel/visszavitel.component';

const routes: Routes = [
  { path: 'ugyfel', component: UgyfelComponent },
  { path: 'keszlet', component: KeszletComponent },
  { path: 'kolcsonzes', component: KolcsonzesComponent },
  { path: 'visszavitel', component: VisszavitelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
