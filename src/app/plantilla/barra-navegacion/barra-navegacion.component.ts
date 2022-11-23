import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { modeloIdentificar } from 'src/app/Servicio/modelos/identificar.modelo';
import { SeguridadService } from 'src/app/Servicio/seguridad.service';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {
  
  seInicioSesion: boolean = false;

  subs: Subscription =  new Subscription();

  constructor(private seguridadService: SeguridadService){}

  ngOnInit(): void {
    this.subs = this.seguridadService.ObtenerDatosUsuarioEnSesion().subscribe((datos:modeloIdentificar)=>{
      this.seInicioSesion = datos.estaIdentificado;
    })
    
  }

}
