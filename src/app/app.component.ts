import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  titulo: string = 'Contador APP';
  public numero: number = 15;
  public base: number = 3;

  acumulador(valor: number) {
    this.numero += valor;
  }
}
