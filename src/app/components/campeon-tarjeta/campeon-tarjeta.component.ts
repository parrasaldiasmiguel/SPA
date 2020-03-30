import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-campeon-tarjeta',
  templateUrl: './campeon-tarjeta.component.html'
})

export class CampeonTarjetaComponent implements OnInit {
@Input() campeon:any={};
@Input() indice:number;
@Output() campeonSeleccionado:EventEmitter<number>;
  constructor(private router:Router) {
    this.campeonSeleccionado=new EventEmitter;
   }

  ngOnInit() {

  }
verCampeon(){
  console.log(this.campeon);
  this.router.navigate(['/campeon',this.indice]);

}
}
