import { NgModule } from '@angular/core';
import { OffreComponent } from './components/offre/offre.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

export const offreRoutes = [
  {
    path: 'offre',
    pathMatch: 'full',
    component: OffreComponent//,
    //outlet:'principal'
  }
];
 // offre module
@NgModule({
  declarations: [OffreComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(offreRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OffreModule { }
