import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnuncioPage } from './anuncio.page';

describe('AnuncioPage', () => {
  let component: AnuncioPage;
  let fixture: ComponentFixture<AnuncioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnuncioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnuncioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
