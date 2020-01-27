import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordonneesComponent } from './components/coordonnees/coordonnees.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';

export const coordonneesRoutes = [
  {
    path: 'coordonnees',
    pathMatch: 'full',
    component: CoordonneesComponent  //,
   // outlet: 'parcoursContent'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(coordonneesRoutes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    CoordonneesComponent
  ],
  providers: [],
})
export class CoordonneesModule { }
