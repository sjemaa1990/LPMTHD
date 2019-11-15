import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EligibiliteComponent } from './components/eligibilite/eligibilite.component';
import { RouterModule } from '@angular/router';
import { EligibiliteByNdiService } from 'src/eligibilite/providers/eligibilite-by-ndi.service';
import { EligibiliteByAdressComponent } from 'src/eligibilite/components/eligibilite/eligibilite-by-adress/eligibilite-by-adress.component';
import { EligibiliteByNdiComponent } from 'src/eligibilite/components/eligibilite/eligibilite-by-ndi/eligibilite-by-ndi.component';


import {FormsModule} from '@angular/forms'

export const eligibiliteRoutes = [
  {
    path: '',
    pathMatch: 'full',
    component: EligibiliteComponent
  }
];

@NgModule({
  declarations: [
    EligibiliteComponent,
    EligibiliteByAdressComponent,
    EligibiliteByNdiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(eligibiliteRoutes),
    FormsModule,
    SharedModule

  ],
  providers: [
    EligibiliteByNdiService
  ]
})
export class EligibiliteModule { }
