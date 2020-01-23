import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../providers/parametre.service';
import { Observable } from 'rxjs';
import { Parametre } from 'src/models/parametre.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mediaUrl: Parametre ;
  constructor(private parametreService : ParametreService) { }

  ngOnInit() {
    //  this.parametreService.getParametre('URL_MEDIAS').subscribe((result: Parametre) => {
    //   this.mediaUrl = result[0];
    //   console.log(this.mediaUrl);
    // }, error => {
    //   console.log(error);
    // });
  
    //console.log(this.mediaUrl);
  }

}
