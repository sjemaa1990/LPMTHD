import { Component, OnInit } from '@angular/core';
import { ParametreService } from '../providers/parametre.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  mediaUrl: string = '';
  constructor(private parametreService : ParametreService) { }

  ngOnInit() {
    this.mediaUrl = this.parametreService.getParametre('URL_MEDIAS');
    console.log(this.mediaUrl);
  }

}
