import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/shared/shared.module";
import { StepperComponent } from "./components/stepper/stepper.component";
import { C1Component } from "./components/c1/c1.component";
import { C2Component } from "./components/c2/c2.component";

export const souscriptionRoutes = [
	{
		path: "",
		component: StepperComponent,
		// outlet:'principal',

		children: [
			{
				path: "options",
				loadChildren: () => import("../options/options.module").then(modul => modul.OptionsModule)
			},
			{
				path: "coordonnees",
				loadChildren: () =>
					import("../coordonnees/coordonnees.module").then(
						mod => mod.CoordonneesModule
					)
				// outlet: 'parcoursContent'
			},
			{
				path: "c1",
				component: C1Component,
				outlet: "test"
			},
			{
				path: "c2",
				component: C2Component,
				outlet: "test"
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
		RouterModule.forChild(souscriptionRoutes),
		SharedModule
	],
	exports: [RouterModule],
	declarations: [StepperComponent, C1Component, C2Component],
	providers: []
})
export class NgxStepperModule {}
