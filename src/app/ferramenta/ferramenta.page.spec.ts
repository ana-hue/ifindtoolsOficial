import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FerramentaPage } from './ferramenta.page';

describe('FerramentaPage', () => {
  let component: FerramentaPage;
  let fixture: ComponentFixture<FerramentaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FerramentaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FerramentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
