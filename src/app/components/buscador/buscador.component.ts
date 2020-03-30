import { Component,OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampeonesService} from '../../servicios/campeones.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent  {
campeones:any[]=[];
termino:string;

constructor(private _ActivatedRoute:ActivatedRoute, 
  private _CampeonesService:CampeonesService) { }

  ngOnInit() {
  this._ActivatedRoute.params.subscribe(data=>{
  this.termino=data['termino'];
  this.campeones=this._CampeonesService.buscarCampeon(this.termino
    );
  });

    
  }
}
