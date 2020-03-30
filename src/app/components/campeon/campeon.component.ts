import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CampeonesService} from '../../servicios/campeones.service';
@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html'
})
export class CampeonComponent  {
campeon:any={};

  constructor(private _CampeonesService:CampeonesService,private _ActivatedRoute:ActivatedRoute) {
this._ActivatedRoute.params.subscribe(estructura =>{ 
this.campeon=this._CampeonesService.getCampeon(estructura['id']);
});
   }

  

}
