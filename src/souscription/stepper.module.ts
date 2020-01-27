import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';
import { OptionsModule } from 'src/options/options.module';
import { CoordonneesModule } from 'src/coordonnees/coordonnees.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { C1Component } from './components/c1/c1.component';
import { C2Component } from './components/c2/c2.component';

export const souscriptionRoutes = [
  {
    path: 'souscription',
    pathMatch: 'full',
    component: StepperComponent ,
   // outlet:'principal',
    
    children : [
      {
        path: 'options', loadChildren: '../options/options.module#OptionsModule'//, outlet: 'parcoursContent'
      },
      {
        path: 'coordonnees', loadChildren: '../coordonnees/coordonnees.module#CoordonneesModule'//, outlet: 'parcoursContent'
      },{
        path: 'c1', component:C1Component,outlet:'test'
      },{
        path: 'c2', component:C2Component,outlet:'test'
      }
        ]
    
    
  }
 

  // ,
  // {
  //   path: 'options',component: OptionsComponent
  // },
  // {
  //   path: 'coordonnees', component: CoordonneesComponent
  // }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(souscriptionRoutes),
    SharedModule,
    OptionsModule,
    CoordonneesModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    StepperComponent,
    C1Component,
    C2Component
    
  ],
  providers: [],
})
export class NgxStepperModule { }
