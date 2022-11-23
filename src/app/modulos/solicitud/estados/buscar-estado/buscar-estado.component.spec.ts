import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarEstadoComponent } from './buscar-estado.component';

describe('BuscarEstadoComponent', () => {
  let component: BuscarEstadoComponent;
  let fixture: ComponentFixture<BuscarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
