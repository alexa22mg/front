import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarSucursalComponent } from './sucursales/buscar-sucursal/buscar-sucursal.component';
import { CrearSucursalComponent } from './sucursales/crear-sucursal/crear-sucursal.component';
import { EditarSucursalComponent } from './sucursales/editar-sucursal/editar-sucursal.component';
import { EliminarSucursalComponent } from './sucursales/eliminar-sucursal/eliminar-sucursal.component';
import { BuscarUsuarioComponent } from './usuarios/buscar-usuario/buscar-usuario.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { EliminarUsuarioComponent } from './usuarios/eliminar-usuario/eliminar-usuario.component';

const routes: Routes = [
  {
    path: 'crear-sucursal',
    component: CrearSucursalComponent
  },
  {
    path: 'editar-sucursal',
    component: EditarSucursalComponent
  },
  {
    path: 'eliminar-sucursal',
    component: EliminarSucursalComponent
  },
  {
    path: 'buscar-sucursal',
    component: BuscarSucursalComponent
  },
  {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'editar-usuario/:id',
    component: EditarUsuarioComponent
  },
  {
    path:'listar-usuarios',
    component: BuscarUsuarioComponent
  },
  {
    path: 'eliminar-usuario',
    component: EliminarUsuarioComponent
  },
  {
    path: 'buscar-usuario',
    component: BuscarUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
