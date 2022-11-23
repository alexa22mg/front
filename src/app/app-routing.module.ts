import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { ListaMascotasComponent } from './plantilla/lista-mascotas/lista-mascotas.component';
import { ListarUsuariosComponent } from './plantilla/listar-usuarios/listar-usuarios.component';
import { ModAdminComponent } from './plantilla/mod-admin/mod-admin.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'administrador',
    component: ModAdminComponent
  },
  {
    path: 'listarmascotas',
    component: ListaMascotasComponent
  },
  {
    path: 'listarusuarios',
    component: ListarUsuariosComponent
  },
  {
    path: "",
    pathMatch: 'full',
    redirectTo: '/inicio',
  },
  {
    path: 'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path: 'asesor',
    loadChildren: () => import("./modulos/asesor/asesor.module").then(x => x.AsesorModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import("./modulos/solicitud/solicitud.module").then(x => x.SolicitudModule)
  },
  {
    path: 'mascotas',
    loadChildren: () => import("./modulos/mascotas/mascotas.module").then(x => x.MascotasModule)
  },
  
  {
    path: '**',
    component: ErrorComponent
  }
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
