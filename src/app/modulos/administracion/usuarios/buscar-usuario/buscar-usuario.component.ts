import { Component, OnInit } from '@angular/core';
import { modeloUsuario } from 'src/app/Servicio/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-usuario',
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css']
})
export class BuscarUsuarioComponent implements OnInit {

listadoRegistros: modeloUsuario[]=[];
  constructor( private usuarioServicio:UsuarioService){}
  
  
  ngOnInit(): void {
   
  }
  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerRegistros().subscribe((datos: modeloUsuario[])=>{
      this.listadoRegistros = datos;
    })

  }
}
