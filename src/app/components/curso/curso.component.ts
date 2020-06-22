import { Component, OnInit } from '@angular/core';
import { Asistente } from '../../models/asistente';
import { AsistenteService } from 'src/app/services/asistente.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  asistente: Asistente;
  asistentes: Array<Asistente>;
  verifica:boolean=false;


  constructor(private asistenteService:AsistenteService) { 
    this.asistente = new Asistente();
    this.asistentes = new Array<Asistente>();
    this.getAsistentes();
  }

  ngOnInit(): void {
  }
  
  constancia(e){
    if(e.target.checked==true)
      this.verifica=true;
    else
      this.verifica=false;
  }
  
  public guardarAsistente(){
    this.asistente._id=null;
    this.asistente.solicitaConstancia=this.verifica;
    this.asistenteService.addAsistentes(this.asistente).subscribe(
      (result)=>{
        alert("Asistente guardado");
      },
      (error)=>{
        console.log(error);
      }
    )
    //this.getAsistentes();
    this.verifica=false;
    this.asistente = new Asistente();
    console.log(this.asistentes)
  }
   public getAsistentes(){
    this.asistenteService.getAsistentes().subscribe(
      (result)=>{
        var asist:Asistente= new Asistente();
        result.forEach(element =>{
          Object.assign(asist,element);
          this.asistentes.push(asist);
          asist = new Asistente();
        })
      },
      (error)=>{
        console.log(error);
      }
      
    )
   }

  public eliminarAsistencia(asistente:Asistente){
    this.asistenteService.deleteAsistentes(asistente).subscribe(
      (result)=>{
        alert("PuntoEliminado");
      },
      (error)=>{
        console.log(error);
      }
    )
    //this.getAsistentes();
  }

  public modificarAsistente(){
    this.asistente.solicitaConstancia=this.verifica;
    this.asistenteService.updateAsistentes(this.asistente).subscribe(
      (result)=>{
        alert("Asistente modificado");
      },
      (error)=>{
        console.log(error);
      }
    )
    //this.getAsistentes();
    this.asistente = new Asistente();
    
  }
}
