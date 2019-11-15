import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  //this.router.navigate(['login']);
  back(){
    this.router.navigate(['']);
  }
}
