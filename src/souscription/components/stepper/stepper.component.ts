import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
   currentStepNumber : number = 1;
   listStepNumber : any = [1,2,3,4,5,6];

   currentStepClass: string = 'btn btn-default btn-round currentStep';
   nextStepClass: string = 'btn btn-default btn-round nextStep';
   currentLabelStepClass: string = 'font-bold';
   nextLabelStepClass: string = 'grey';

   isFirstStep: boolean ;
   isLastStep: boolean ;

   stepsClass : any = ["OPTIONS","COORDONNÉES","RENDEZ-VOUS","RÉCAPITULATIF","PAIEMENT","CONFIRMATION"];
  //  stepsNumbersClass : any = [this.steps1Class,
  //                             this.steps2Class,
  //                             this.steps3Class,
  //                             this.steps4Class,
  //                             this.steps5Class,
  //                             this.steps6Class];

  constructor(private route: ActivatedRoute,private router: Router,) { }

  ngOnInit() {
    this.currentStepNumber = 1;
    this.isFirstStep = this.currentStepNumber == this.listStepNumber[0];
    this.isLastStep = this.currentStepNumber == this.listStepNumber[this.listStepNumber.length-1];
  }

  valider(){
    if(this.currentStepNumber < this.listStepNumber[this.listStepNumber.length-1])
      this.currentStepNumber  ++;
      this.verifyButtonState();
      this.router.navigate(['coordonnees'], { relativeTo: this.route });

    // this.router.navigate([{ outlets: { parcoursContent: ['coordonnees'] } }], { relativeTo: this.route });
      // this.router.navigate([
      //   {
      //     outlets: {
      //       souscriptionContent: ['coordonnees']
      //     }
      //   }
      // ]);
   //this.router.navigate([{outlets: {primary: 'coordonnees' ,souscriptionContent: 'coordonnees'}}]);
  // this.router.navigate([{ outlets: { principal: [ 'coordonnees'] }}]);
  // this.router.navigate([{ outlets: { parcoursContent: ['coordonnees'] }}]);
  }
  back(){
    this.currentStepNumber  --;
		this.verifyButtonState();
		this.router.navigate(['options'], { relativeTo: this.route });
  }
  verifyButtonState(){
    debugger;
    this.isFirstStep = this.currentStepNumber == this.listStepNumber[0];
    this.isLastStep = this.currentStepNumber == this.listStepNumber[this.listStepNumber.length-1];
  }

}
