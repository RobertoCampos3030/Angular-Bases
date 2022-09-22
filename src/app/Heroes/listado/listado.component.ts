import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: String[] = ['SpiderMan', 'IronMan', 'Hulk'];
  heroeBorrado: String = '';

  borrarHeroe() {
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.pop() || '';
  }
}

