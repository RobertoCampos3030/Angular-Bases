import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
            <h1>{{ titulo }}</h1>
            <p>La Base es: {{ base }} </p>
            <button (click)="acumulador(- base)">- {{ base }}</button>
            <span>{{ numero }}</span>
            <button (click)="acumulador(+ base)">+ {{ base }} </button>
        `
})
 export class ContadorComponent {
    titulo: string = 'Contador APP';
    public numero: number = 15;
    public base: number = 3;
  
    acumulador(valor: number) {
      this.numero += valor;
    }
}