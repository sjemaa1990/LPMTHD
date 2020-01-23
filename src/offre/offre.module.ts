import { NgModule } from '@angular/core';
import { OffreComponent } from './components/offre/offre.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

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
