import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/shared/components/error/error.component';
import { CoordonneesComponent } from 'src/coordonnees/components/coordonnees/coordonnees.component';


export const routes: Routes = [

  {
    path: 'eligibilite', loadChildren: '../eligibilite/eligibilite.module#EligibiliteModule', outlet: 'principal'
  },
  {
    path: 'offre', loadChildren: '../offre/offre.module#OffreModule'//, outlet: 'principal'
  },//, canActivate: [TokenGuardService, AuthGuardService] },
  {
    path: 'souscription', loadChildren: '../souscription/stepper.module#NgxStepperModule'//, outlet: 'principal'
  },
  { 
    path: 'error', component: ErrorComponent//, outlet: 'principal' 
  },
  { path: '', redirectTo: 'eligibilite', pathMatch: 'full' }
];
