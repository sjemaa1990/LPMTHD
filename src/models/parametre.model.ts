export class Parametre {

    id: number ;
    code: string ;
    valeur: string;
    /**
     *
     */
    constructor(idParametre: number, code: string,valeur : string) {
        this.id = idParametre;
        this.code = code;
        this.valeur = valeur;
    }
}
