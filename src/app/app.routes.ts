import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/shared/components/error/error.component';




export const routes: Routes = [

    {path: '', loadChildren: '../eligibilite/eligibilite.module#EligibiliteModule' },
    {path: 'offre', loadChildren: '../offre/offre.module#OffreModule' },//, canActivate: [TokenGuardService, AuthGuardService] },
    {path: 'souscription', loadChildren: '../souscription/stepper.module#NgxStepperModule' },
    {path: 'error', component: ErrorComponent }

];
