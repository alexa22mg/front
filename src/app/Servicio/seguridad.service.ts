import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { modeloIdentificar } from './modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  
  url = 'http://localhost:3000';
  datosUsuarioEnSesion = new BehaviorSubject<modeloIdentificar>(new modeloIdentificar())

  constructor(private http: HttpClient) {
    this.VerificarSesionActual();

  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }
RefrescarDatosSesion(datos: modeloIdentificar) {
  this.datosUsuarioEnSesion.next(datos);
}

ObtenerDatosUsuarioEnSesion(){
  return this.datosUsuarioEnSesion.asObservable();
}

Identificar(usuario: string, clave: string): Observable<modeloIdentificar> {
    return this.http.post<modeloIdentificar>(`${this.url}/identificarPersona`, {
      usuario: usuario,
      Contrasena: clave
    }, {
      headers: new HttpHeaders({

      })
    })
}
AlmacenarSesion(datos: modeloIdentificar){
  datos.estaIdentificado = true;
  let stringDatos = JSON.stringify(datos);
  localStorage.setItem("datosSesion",stringDatos);
  this.RefrescarDatosSesion(datos);
}

ObtenerInformacionSesion(){
  let datosString = localStorage.getItem("datosSesion");
  if(datosString){
    let datos = JSON.parse(datosString);
    return datos;
  }else{
    return null;
  }
}

EliminarInformacionSesion(){
  localStorage.removeItem("datosSesion");
  this.RefrescarDatosSesion(new modeloIdentificar());
}
  
SeHaIniciadoSesion(){
  let datosString = localStorage.getItem("datosSesion");
  return datosString;
}
  
}

