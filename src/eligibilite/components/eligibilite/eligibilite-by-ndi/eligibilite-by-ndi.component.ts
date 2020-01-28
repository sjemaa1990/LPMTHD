import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eligibilite-by-ndi',
  templateUrl: './eligibilite-by-ndi.component.html',
  styleUrls: ['./eligibilite-by-ndi.component.css']
})
export class EligibiliteByNdiComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
  }

  redirectToOffrePage(){
   // this.router.navigate(['error']);
   this.router.navigate(['offre']);
  // this.router.navigate([{ outlets: { principal: ['souscription'] }}],{relativeTo:this.route});
  }
}
