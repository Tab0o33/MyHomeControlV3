import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentMeasuresComponent } from './current-measures.component';
import { ThemeService } from 'src/app/services/theme.service';
import { CurrentMeasuresService } from '../current-measures.service';

describe('CurrentMeasuresComponent', () => {
  let component: CurrentMeasuresComponent;
  let fixture: ComponentFixture<CurrentMeasuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentMeasuresComponent],
      providers: [
        ThemeService,
        CurrentMeasuresService
      ]
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
