
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCardComponent } from './about-card.component';

describe('AboutCardComponent', () => {
  let component: AboutCardComponent;
  let fixture: ComponentFixture<AboutCardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
