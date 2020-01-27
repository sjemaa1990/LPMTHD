import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionsComponent } from './components/options/options.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


export const optionsRoutes = [
  {
    path: 'options',
    pathMatch: 'full',
    component: OptionsComponent //,
   // outlet: 'parcoursContent'
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(optionsRoutes),
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    OptionsComponent
  ],
  providers: [],
})
export class OptionsModule { }
