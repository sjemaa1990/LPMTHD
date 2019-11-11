import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EligibiliteByAdress } from 'src/eligibilite/models/eligibiliteByAdress';

@Component({
  selector: 'app-eligibilite-by-adress',
  templateUrl: './eligibilite-by-adress.component.html',
  styleUrls: ['./eligibilite-by-adress.component.css']
})
export class EligibiliteByAdressComponent implements OnInit {

  displayCodePostal: boolean = false;
  displayAdress: boolean = false;
  displayCommune : boolean = false;
  displayVoie: boolean = false;

  codePostal?: number ;
  adress: string = '';
  communeList = [{value: 'Nanterre', display: 'Nanterre'}, {value: 'Chaville', display: 'Chaville'}];
  voieList = [{value: '1', display: '1'}, {value: '2', display: '2'},{value: '3', display: '3'}];
  eligibiliteByAdress: any = {} ;
  
  
 constructor(private router: Router) { }

 ngOnInit() {
   this.eligibiliteByAdress.adress;
   this.eligibiliteByAdress.codePostal = '';
   this.eligibiliteByAdress.commune = 'Chaville';
   this.eligibiliteByAdress.voie = '3';

   this.displayCodePostal = false;
   this.displayAdress = false;
   this.displayCommune = false;
   this.displayVoie = false;
 }

 redirectToOffrePage(){
   this.router.navigate(['home']);
 }

 displayEligByAdress(){
   this.displayCodePostal = true;
 }

 codePostalChange(newObj) {
  // do something with new value
  debugger;
  if( newObj.length > 4){
    console.log(newObj);
    this.displayAdress = true;
    this.displayCommune = true;
    this.displayVoie = true;
  }
  
 }

}
