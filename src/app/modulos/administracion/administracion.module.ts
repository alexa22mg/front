import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearUsuarioComponent,
    EditarUsuarioComponent,
    EliminarUsuarioComponent,
    BuscarUsuarioComponent,
    BuscarSucursalComponent,
    EliminarSucursalComponent,
    EditarSucursalComponent,
    CrearSucursalComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
