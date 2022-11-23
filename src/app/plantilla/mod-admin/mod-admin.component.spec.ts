import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModAdminComponent } from './mod-admin.component';

describe('ModAdminComponent', () => {
  let component: ModAdminComponent;
  let fixture: ComponentFixture<ModAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
