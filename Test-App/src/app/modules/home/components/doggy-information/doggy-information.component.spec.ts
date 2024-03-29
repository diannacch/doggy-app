import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoggyInformationComponent } from './doggy-information.component';

describe('DoggyInformationComponent', () => {
  let component: DoggyInformationComponent;
  let fixture: ComponentFixture<DoggyInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoggyInformationComponent]
    });
    fixture = TestBed.createComponent(DoggyInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
