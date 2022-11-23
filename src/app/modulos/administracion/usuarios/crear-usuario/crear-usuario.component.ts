import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { modeloUsuario } from 'src/app/Servicio/modelos/modelo.usuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  fgValidador: FormGroup= this.fb.group({
    'cedula':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'apellido':['',[Validators.required]],
    'telefono':['',[Validators.required]],
    'correo':['',[Validators.required]],
    'rol':['',[Validators.required]]
    
  });
  routes: any;
  constructor(private fb: FormBuilder, 
    private servicioUsuario:UsuarioService){}
  ngOnInit(): void {
    
  }
 GuardarUsuario(){
  let cedula = this.fgValidador.controls["cedula"].value;
  let nombre = this.fgValidador.controls["nombre"].value;
  let apellido = this.fgValidador.controls["apellido"].value;
  let telefono = this.fgValidador.controls["telefono"].value;
  let correo = this.fgValidador.controls["correo"].value;
  let rol = this.fgValidador.controls["rol"].value;
  let u = new modeloUsuario();
  u.Cedula=cedula;
  u.Nombre=nombre;
  u.Apellido=apellido;
  u.Telefono=telefono;
  u.Correo=correo;
  u.Rol=rol;
  this.servicioUsuario.Crearusuario(u).subscribe((datos: modeloUsuario)=>{
    alert("Datos almacenados correctamente");
    this.routes.navigate(['/administracion/listar-usuario'])

  },(error:any)=>{
    alert(" Error en el almacenamiento de datos")

  })
 } 

}
