import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class InformacionService {

  info: any = {};
  equipo: any = {};

  constructor( public http: HttpClient ) {

    this.carga_info();

  }

  public carga_info() {
    this.http.get( 'http://malcolmcordova.com/assets/data/info.pagina.json' )
      .subscribe( data => {
        // console.log( data );
        this.info = data;
      } );

  }

  /*public carga_sobre_nosotros(){
    this.http.get( "https://html5-angular.firebaseio.com/equipo.json" )
      .subscribe( data =>{
        //console.log( data.json() );
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
      } )

  }*/

}
