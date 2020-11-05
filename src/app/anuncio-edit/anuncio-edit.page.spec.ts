import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnuncioEditPage } from './anuncio-edit.page';

describe('AnuncioEditPage', () => {
  let component: AnuncioEditPage;
  let fixture: ComponentFixture<AnuncioEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnuncioEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
