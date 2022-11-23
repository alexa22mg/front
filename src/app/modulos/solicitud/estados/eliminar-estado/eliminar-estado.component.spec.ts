import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarEstadoComponent } from './eliminar-estado.component';

describe('EliminarEstadoComponent', () => {
  let component: EliminarEstadoComponent;
  let fixture: ComponentFixture<EliminarEstadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarEstadoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarEstadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
