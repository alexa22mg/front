import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsesorRoutingModule } from './asesor-routing.module';
import { CrearMascotaComponent } from './mascotas/crear-mascota/crear-mascota.component';
import { EditarMascotaComponent } from './mascotas/editar-mascota/editar-mascota.component';
import { EliminarMascotaComponent } from './mascotas/eliminar-mascota/eliminar-mascota.component';
import { BuscarMascotaComponent } from './mascotas/buscar-mascota/buscar-mascota.component';
import { CrearProspectoComponent } from './prospecto/crear-prospecto/crear-prospecto.component';


@NgModule({
  declarations: [
    CrearMascotaComponent,
    EditarMascotaComponent,
    EliminarMascotaComponent,
    BuscarMascotaComponent,
    CrearProspectoComponent
  ],
  imports: [
    CommonModule,
    AsesorRoutingModule
  ]
})
export class AsesorModule { }
