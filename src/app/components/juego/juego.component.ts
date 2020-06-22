import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';
import { GestionPalabraService } from 'src/app/services/gestion-palabra.service';
import { calcPossibleSecurityContexts } from '@angular/compiler/src/template_parser/binding_parser';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  reiniciar:0;
  cantidadVidas:number=6;
  puntaje:number=0;
  palabras:Array<Palabra>;
  palabra:Palabra;
  letras:Array<string>;
  encontrado:boolean=false;
  posiciones:Array<boolean>;
  mostrar=false;
  palabraIngresada:Palabra;
  posicionPalabra=0;
  letrasIngresadas:Array<string>;
  letraIngresada:string;
  band=false;
  compararM=false;
  pal:Palabra;
  maxPosicion:9;
  mostrarFelicitacion=false;

  constructor(private palabraService:GestionPalabraService) {
    this.palabraIngresada= new Palabra();
    this.palabra= new Palabra();
    this.palabras= new Array<Palabra>();
    //this.listaPalabras();
    this.letras= new Array<string>();
    this.pal= new Palabra();
    this.posiciones= new Array<boolean>();
    this.letrasIngresadas= new Array<string>();
   }

  ngOnInit(): void {
  }
  public seleccionarPalabra(){
      this.palabras=this.palabraService.generarPalabras(this.pal.categoria);
      this.encontrado=true;
      this.generarCampos();
  }

  
  public generarCampos(){
    this.palabra=this.palabras[this.posicionPalabra];
    this.posiciones= new Array<boolean>();
    for (let i = 0; i < this.palabra.palabraIngles.length; i++) {
      const element = this.palabra.palabraIngles[i];
      this.letras.push(element);
      this.posiciones.push(true);
  }
  this.compararM=true;
}

public seleccion(){
  this.band=true
}
public iniciarJuego(){
  this.mostrar=true;
  this.puntaje=0;
  this.posicionPalabra=0;
  this.cantidadVidas=6;
}

public compararPalabra(){
  var contador=0;
  for (let i = 0; i < this.letras.length; i++) {
    const element = this.letras[i];
    if(element==this.letrasIngresadas[i])
    contador++;
  }
  if (contador==this.letras.length) {
    this.puntaje=this.puntaje+10;
    this.posicionPalabra++;
    this.palabra=new Palabra();
    this.letras= new Array<string>();
    this.posiciones= new Array<boolean>();
    this.letrasIngresadas= new Array<string>();
    this.compararM=false;
    if(this.posicionPalabra<10)
      this.generarCampos();
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  if (contador<this.letras.length) {
    this.letrasIngresadas= new Array<string>();
  }
  if (this.posicionPalabra==this.maxPosicion) {
    this.mostrarFelicitacion=true;
  }
  
}
public compararLetra1(){
  if(this.posiciones[0]==true){
  var encontrada=false;
  if(this.letras[0]==this.letrasIngresadas[0]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
public compararLetra2(){
  if(this.posiciones[1]==true){
  var encontrada=false;
  if(this.letras[1]==this.letrasIngresadas[1]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
      this.cantidadVidas--;
  }
  }
}
public compararLetra3(){
  if(this.posiciones[2]==true){
  var encontrada=false;
  if(this.letras[2]==this.letrasIngresadas[2]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
      this.cantidadVidas--;
  }
  }
}
public compararLetra4(){
  if(this.posiciones[3]==true){
  var encontrada=false;
  if(this.letras[3]==this.letrasIngresadas[3]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
public compararLetra5(){
  if(this.posiciones[4]==true){
  var encontrada=false;
  if(this.letras[4]==this.letrasIngresadas[4]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
public compararLetra6(){
  if(this.posiciones[5]==true){
  var encontrada=false;
  if(this.letras[5]==this.letrasIngresadas[5]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
public compararLetra7(){
  if(this.posiciones[6]==true){
  var encontrada=false;
  if(this.letras[6]==this.letrasIngresadas[6]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
public compararLetra8(){
  if(this.posiciones[7]==true){
  var encontrada=false;
  if(this.letras[7]==this.letrasIngresadas[7]){
    encontrada=true;
  }else{
    if(this.cantidadVidas>0)
    this.cantidadVidas--;
  }
  }
}
  
}
