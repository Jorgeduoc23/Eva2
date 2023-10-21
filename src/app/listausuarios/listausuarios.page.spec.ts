import { ComponentFixture, TestBed } from '@angular/core/testing';
import { listausuariosPage } from './listausuarios.page';

describe('ListausuariosPage', () => {
  let component: listausuariosPage;
  let fixture: ComponentFixture<listausuariosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(listausuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
