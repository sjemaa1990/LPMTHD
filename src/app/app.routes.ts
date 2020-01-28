import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/shared/components/error/error.component';
import { CoordonneesComponent } from 'src/coordonnees/components/coordonnees/coordonnees.component';


export const routes: Routes = [

  {
		path: 'eligibilite',
		loadChildren: () => import("../eligibilite/eligibilite.module").then(mod => mod.EligibiliteModule)
  },
  {
    path: 'offre', loadChildren: () => import("../offre/offre.module").then(mod => mod.OffreModule)
  },//, canActivate: [TokenGuardService, AuthGuardService] },
  {
    path: 'souscription',
    loadChildren: () => import('../souscription/stepper.module').then(mod => mod.NgxStepperModule)
  },
  {
    path: 'error', component: ErrorComponent//, outlet: 'principal'
  },
  { path: '', redirectTo: 'eligibilite', pathMatch: 'full' }
];
