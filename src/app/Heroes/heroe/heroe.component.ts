import { Component } from "@angular/core";

@Component({
selector:'app-heroe',
templateUrl:'heroe.component.html'
})
export class HeroeComponent{
nombre: string='IronMan';
edad:number=30;

get nombreCapitalizado():string{
    return this.nombre.toLocaleUpperCase();
}

obtenerNombre():string{
return `${this.nombre } - ${this.edad}`;
}
cambiarNombre():void{
this.nombre='SpiderMan' ;

console.log('Hey!');
}

cambiarEdad():void{
    this.edad=20;
    }
}