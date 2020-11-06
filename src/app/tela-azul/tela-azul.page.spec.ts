import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TelaAzulPage } from './tela-azul.page';

describe('TelaAzulPage', () => {
  let component: TelaAzulPage;
  let fixture: ComponentFixture<TelaAzulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaAzulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TelaAzulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
