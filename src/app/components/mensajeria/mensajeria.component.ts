import { Component, OnInit } from '@angular/core';
import {Mensaje} from '../../models/mensaje';
import { Empresa } from 'src/app/models/empresa';
import { MensajeService } from 'src/app/services/mensaje.service';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent implements OnInit {

  mensaje:Mensaje;
  tamMaxText:number = 120;
  tamTexto:number=120;
  mensajes:Array<Mensaje>;
  empresas:Array<Empresa>;
  auxText:string;
  auxDestino:number;
  auxFecha:Date;
  constructor(private mensajeService:MensajeService,private empresaService:EmpresaService) {
    this.mensaje=new Mensaje();
    this.mensajes= new Array<Mensaje>();
    this.empresas= new Array<Empresa>();
    this.getEmpresas();
   }

  ngOnInit(): void {
  }
  public cambiarTamText(){
    this.tamTexto= this.tamMaxText-this.mensaje.texto.length;
  }
  public enviarMensaje(){
    this.mensaje._id=null;
    this.auxDestino=this.mensaje.para;
    this.auxText=this.mensaje.texto;
    this.mensaje.fecha = new Date();
    this.mensajeService.addMensaje(this.mensaje).subscribe(
      (result)=>{
        alert("mensaje guardado");
      },
      (error)=>{
        console.log(error);
      }
    );
    this.mensaje=new Mensaje();
    this.auxFecha=new Date();
    this.tamTexto=120;
  }
  
  public limpiarMensaje(){
    this.tamTexto=120;
    this.mensaje= new Mensaje();
  }

  public getEmpresas(){
    this.empresas = new Array<Empresa>();
    this.empresaService.getEmpresas().subscribe(
      (result)=>{
        var vempresa:Empresa= new Empresa();
        result.forEach(element =>{
          Object.assign(vempresa,element);
          this.empresas.push(vempresa);
          vempresa = new Empresa();
        })
      },
      (error)=>{
        console.log(error);
      }
    )
   }

}
