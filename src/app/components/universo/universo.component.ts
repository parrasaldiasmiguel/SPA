import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CampeonesService,Campeon} from '../../servicios/campeones.service';
@Component({
  selector: 'app-universo',
  templateUrl: './universo.component.html'
})
export class UniversoComponent implements OnInit {
campeones:Campeon[]=[];

  constructor(private _CampeonesService:CampeonesService, private router:Router) { 

  }

  ngOnInit() {
    this.campeones=this._CampeonesService.getCampeones();
  }
  verCampeon(idx:number){
  this.router.navigate(['campeon', idx])

  }

}
