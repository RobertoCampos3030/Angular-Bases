import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
@Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter;

  @Input() nuevo: Personaje = {
    nombre: 'Broly',
    poder: 14000
  }

  agregar() {
    console.log(this.nuevo)
    this.nuevo={
      nombre:'',
      poder:0
    }
    
  }
  
  agregarNuevoPersonaje(){
    console.log('Main Page Commponent');
  }
}

