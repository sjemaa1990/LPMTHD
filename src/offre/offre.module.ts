import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffreComponent } from './components/offre/offre.component';
import { RouterModule } from '@angular/router';

export const offreRoutes = [
  {
    path: 'offre',
    pathMatch: 'full',
    component: OffreComponent
  }
];
 // offre module
@NgModule({
  declarations: [OffreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(offreRoutes)
  ]
})
export class OffreModule { }
