import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMeasuresComponent } from './current-measures.component';

describe('CurrentMeasuresComponent', () => {
  let component: CurrentMeasuresComponent;
  let fixture: ComponentFixture<CurrentMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentMeasuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentMeasuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
