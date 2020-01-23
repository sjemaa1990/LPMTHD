import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { StepperComponent } from './components/stepper/stepper.component';

export const souscriptionRoutes = [
  {
    path: 'souscription',
    pathMatch: 'full',
    component: StepperComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(souscriptionRoutes),
    SharedModule
  ],
  exports: [
  ],
  declarations: [
    StepperComponent
  ],
  providers: [],
})
export class NgxStepperModule { }
