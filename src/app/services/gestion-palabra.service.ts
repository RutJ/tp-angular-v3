import { Injectable } from '@angular/core';
import { Palabra } from '../models/palabra';

@Injectable({
  providedIn: 'root'
})
export class GestionPalabraService {
  animal1 = new Palabra(1,"cat","gato","assets/images/gato.jpg");
  animal2 = new Palabra(1,"dog","perro","assets/images/perro.jpg");
  animal3 = new Palabra(1,"lion","leon","assets/images/leon.jpg");
  animal4 = new Palabra(1,"raccoon","mapache","assets/images/mapache.png");
  animal5 = new Palabra(1,"squirrel","ardilla","assets/images/ardilla.jpeg");
  animal6 = new Palabra(1,"chicken","gallina","assets/images/gallina.jpg");
  animal7 = new Palabra(1,"koala","koala","assets/images/koala.jpg");
  animal8 = new Palabra(1,"tiger","tigre","assets/images/tigre.jpg");
  animal9 = new Palabra(1,"turtle","tortuga","assets/images/tortuga.jpg");
  animal10 = new Palabra(1,"fox","zorro","assets/images/zorro.jpg");
  navidad1 = new Palabra(2,"TREE","arbol","assets/images/arbol.jpg");
  navidad2 = new Palabra(2,"GIFT","regalo","assets/images/regalo.jpg");
  navidad3 = new Palabra(2,"STAR","estrella","assets/images/estrella.jpg");
  utiles1 = new Palabra(3,"PEN","lapiz","assets/images/lapiz.jpg");
  utiles2 = new Palabra(3,"ERASER","borrador","assets/images/borrador.jpg");
  utiles3 = new Palabra(3,"BACKPACK","mochila","assets/images/mochila.jpg");
  palabras:Array<Palabra>;
   palabrasAleatorio:Array<Palabra>;
  constructor() {
    this.palabrasAleatorio= new Array<Palabra>();
    this.palabras= new Array<Palabra>();
  }

  public generarPalabras(categoria:number){
    if(categoria==1){
      this.palabras= new Array<Palabra>();
      this.palabras = [this.animal1,this.animal2,this.animal3,this.animal4,this.animal5,this.animal6,this.animal7,this.animal8,this.animal9,this.animal10];
      this.aleatorio();
    }else if(categoria==2){
      this.palabras= new Array<Palabra>();
      this.palabras=[this.navidad1,this.navidad2,this.navidad3];
      this.aleatorio();
    }else if(categoria==3){
      this.palabras= new Array<Palabra>();
      this.palabras = [this.utiles1,this.utiles2,this.utiles3];
      this.aleatorio();
    }
    return this.palabrasAleatorio;
  }

  public listaPalabras(){
    this.aleatorio();
    return this.palabrasAleatorio;
  }
  public aleatorio(){
    for (let i = 0; i < this.palabras.length; i++) {
      var num=Math.floor(Math.random()*this.palabras.length);
      this.palabrasAleatorio[i]=this.palabras[num];
    }
  }

  

}
