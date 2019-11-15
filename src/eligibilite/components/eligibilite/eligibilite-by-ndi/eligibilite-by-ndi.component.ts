import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eligibilite-by-ndi',
  templateUrl: './eligibilite-by-ndi.component.html',
  styleUrls: ['./eligibilite-by-ndi.component.css']
})
export class EligibiliteByNdiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToOffrePage(){
    this.router.navigate(['error']);
  }
}
