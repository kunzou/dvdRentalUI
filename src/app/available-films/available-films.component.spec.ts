import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableFilmsComponent } from './available-films.component';

describe('AvailableFilmsComponent', () => {
  let component: AvailableFilmsComponent;
  let fixture: ComponentFixture<AvailableFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
