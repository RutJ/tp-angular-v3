import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Asistente } from '../models/asistente';

@Injectable({
  providedIn: 'root'
})
export class AsistenteService {

  urlBase:string="http://localhost:3000/api/asistentes/";
  constructor(private _http:HttpClient) {}

  getAsistentes():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.get(this.urlBase,httpOptions)
  }

  addAsistentes(asistente:Asistente):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body = JSON.stringify(asistente);
    return this._http.post(this.urlBase, body ,httpOptions);
  }
  deleteAsistentes(asistente: Asistente):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({

      })
    };
    return this._http.delete(this.urlBase + asistente._id ,httpOptions)
  }

  updateAsistentes(asistente:Asistente):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type":"application/json"
      })
    };
    var body = JSON.stringify(asistente);
    return this._http.put(this.urlBase + asistente, body ,httpOptions);
  }
  

}
