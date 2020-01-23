import { Component, OnInit } from '@angular/core';
import { Parametre } from 'src/models/parametre.model';
import { ParametreService } from '../providers/parametre.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  mediaUrl: Parametre ;
  portailProcessUrl: Parametre;

  constructor(private parametreService : ParametreService) { }

  ngOnInit() {
     
    this.getMediaUrl();
    this.getPortailProcessUrl();
  }

  getMediaUrl () {
    this.parametreService.getParametre('URL_MEDIAS').subscribe((result: Parametre) => {
      this.mediaUrl = result[0];
      console.log(this.mediaUrl);
    }, error => {
      console.log(error);
    });
  }

  getPortailProcessUrl(){
    this.parametreService.getParametre('URL_PORTAIL_PROCESS').subscribe((result: Parametre) => {
      this.portailProcessUrl = result[0];
      console.log(this.portailProcessUrl);
    }, error => {
      console.log(error);
    });
  }


}
