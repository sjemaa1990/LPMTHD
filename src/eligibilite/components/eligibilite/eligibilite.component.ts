import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eligibilite',
  templateUrl: './eligibilite.component.html',
  styleUrls: ['./eligibilite.component.css']
})
export class EligibiliteComponent implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
   
  }

  // redirectToOffrePage(){
  //   this.router.navigate(['home']);
  // }

  // displayEligByAdress(){
  //   this.displayCodePostalInput = true;
  // }
}
