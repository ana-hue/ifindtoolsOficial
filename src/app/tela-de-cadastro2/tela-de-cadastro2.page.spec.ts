import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaDeCadastro2Page } from './tela-de-cadastro2.page';

describe('TelaDeCadastro2Page', () => {
  let component: TelaDeCadastro2Page;
  let fixture: ComponentFixture<TelaDeCadastro2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaDeCadastro2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaDeCadastro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
