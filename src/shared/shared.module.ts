import { EligibiliteComponent } from './../eligibilite/components/eligibilite/eligibilite.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './components/error/error.component';

export const sharedRoutes = [
  {
    path: 'error',
    pathMatch: 'full',
    component: ErrorComponent
  }//,
  // {
  //   path: 'eligibilite',
  //   pathMatch: 'full',
  //   component: EligibiliteComponent
  // }
];

@NgModule({
  declarations: [ErrorComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedModule { }
