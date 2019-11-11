import { Routes } from '@angular/router';
import { ErrorComponent } from 'src/shared/components/error/error.component';




export const routes: Routes = [

    {path: '', loadChildren: '../eligibilite/eligibilite.module#EligibiliteModule' },
    {path: 'home', loadChildren: '../home/home.module#HomeModule' },//, canActivate: [TokenGuardService, AuthGuardService] },
    {path: 'error', component: ErrorComponent }

];
