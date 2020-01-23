export class EligibiliteByAdress {

    codePostal: string ;
    adress: string ;
    complementAdress: string;
    commune: string;
    voie: number;
    /**
     *
     */
    constructor(codePostal: string, adress: string,complementAdress : string, commune: string, voie: number) {
        this.codePostal = codePostal;
        this.adress = adress;
        this.complementAdress = complementAdress;
        this.commune= commune;
        this.voie = voie;
    }
}

