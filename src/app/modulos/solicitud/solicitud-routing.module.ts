import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearAfiliacionComponent } from './afiliaciones/crear-afiliacion/crear-afiliacion.component';

const routes: Routes = [
  {
    path:'crear-afiliacion',
    component: CrearAfiliacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SolicitudRoutingModule { }
