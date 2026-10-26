import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRutasComponet } from './menu-rutas-componet';

describe('MenuRutasComponet', () => {
  let component: MenuRutasComponet;
  let fixture: ComponentFixture<MenuRutasComponet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuRutasComponet],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuRutasComponet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
