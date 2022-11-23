import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolicitudRoutingModule } from './solicitud-routing.module';
import { CrearAfiliacionComponent } from './afiliaciones/crear-afiliacion/crear-afiliacion.component';
import { EditarAfiliacionComponent } from './afiliaciones/editar-afiliacion/editar-afiliacion.component';
import { EliminarAfiliacionComponent } from './afiliaciones/eliminar-afiliacion/eliminar-afiliacion.component';
import { BuscarAfiliacionComponent } from './afiliaciones/buscar-afiliacion/buscar-afiliacion.component';
import { CrearEstadoComponent } from './estados/crear-estado/crear-estado.component';
import { EditarEstadoComponent } from './estados/editar-estado/editar-estado.component';
import { EliminarEstadoComponent } from './estados/eliminar-estado/eliminar-estado.component';
import { BuscarEstadoComponent } from './estados/buscar-estado/buscar-estado.component';


@NgModule({
  declarations: [
    CrearAfiliacionComponent,
    EditarAfiliacionComponent,
    EliminarAfiliacionComponent,
    BuscarAfiliacionComponent,
    CrearEstadoComponent,
    EditarEstadoComponent,
    EliminarEstadoComponent,
    BuscarEstadoComponent
  ],
  imports: [
    CommonModule,
    SolicitudRoutingModule
  ]
})
export class SolicitudModule { }
