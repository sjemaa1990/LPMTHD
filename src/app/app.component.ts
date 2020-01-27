import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'LPM-PORTAIL-THD';
  poigneeSrc : string = "https://medias.lapostemobile.fr/portail_fibre/img/sticker-btn-open.png";
  imgCloseCall : string = "https://medias.lapostemobile.fr/portail_fibre/img/sticker-btn-close.png"
  imgOpenCall : string = "https://medias.lapostemobile.fr/portail_fibre/img/sticker-btn-open.png"

  openWebStyle: any = {'width': '131px'};
  closeWebStyle : any ={ 'width': '22px'};
  besoiAideStyle : any ={};

  ngOnInit() {
    this.loadScript("lazy-loaded-script.js");
  }
  
  private loadScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    })
  }


  onPoigneeClick(){
    debugger;
   if (this.poigneeSrc == this.imgOpenCall ) this.ouvrirWebCall();
   else this.fermerWebCall();
   //e.stopPropagation();
  }
  ouvrirWebCall(){
   this.poigneeSrc = this.imgCloseCall; 
   this.besoiAideStyle = this.openWebStyle;
  }

  fermerWebCall(){
   this.poigneeSrc =this.imgOpenCall; 
   this.besoiAideStyle = this.closeWebStyle;
  }
  
}
