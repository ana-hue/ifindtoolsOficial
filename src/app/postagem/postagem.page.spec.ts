import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PostagemPage } from './postagem.page';

describe('PostagemPage', () => {
  let component: PostagemPage;
  let fixture: ComponentFixture<PostagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostagemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PostagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
