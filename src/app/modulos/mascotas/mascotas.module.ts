import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MascotasRoutingModule } from './mascotas-routing.module';
import { CrearPlanComponent } from './planes/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './planes/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './planes/eliminar-plan/eliminar-plan.component';
import { BuscarPlanComponent } from './planes/buscar-plan/buscar-plan.component';
import { BuscarProductoservicioComponent } from './productoservicios/buscar-productoservicio/buscar-productoservicio.component';
import { EliminarProductoservicioComponent } from './productoservicios/eliminar-productoservicio/eliminar-productoservicio.component';
import { EditarProductoservicioComponent } from './productoservicios/editar-productoservicio/editar-productoservicio.component';
import { CrearProductoservicioComponent } from './productoservicios/crear-productoservicio/crear-productoservicio.component';


@NgModule({
  declarations: [
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    BuscarPlanComponent,
    BuscarProductoservicioComponent,
    EliminarProductoservicioComponent,
    EditarProductoservicioComponent,
    CrearProductoservicioComponent
  ],
  imports: [
    CommonModule,
    MascotasRoutingModule
  ]
})
export class MascotasModule { }
