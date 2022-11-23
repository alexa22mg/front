import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { modeloUsuario } from '../Servicio/modelos/modelo.usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  Crearusuario: any;
  CrearUsuario(p: any) {
    throw new Error('Method not implemented.');
  }
  url ='http://localhost:3000';

  constructor(private http: HttpClient) { }

ObtenerRegistros(): Observable<modeloUsuario[]> {
   return this.http.get<modeloUsuario[]>('${this.url}/usuarios')
 }  
}
