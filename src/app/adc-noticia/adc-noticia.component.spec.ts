import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdcNoticiaComponent } from './adc-noticia.component';

describe('AdcNoticiaComponent', () => {
  let component: AdcNoticiaComponent;
  let fixture: ComponentFixture<AdcNoticiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdcNoticiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdcNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
