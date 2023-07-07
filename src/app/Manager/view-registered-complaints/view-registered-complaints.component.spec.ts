import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRegisteredComplaintsComponent } from './view-registered-complaints.component';

describe('ViewRegisteredComplaintsComponent', () => {
  let component: ViewRegisteredComplaintsComponent;
  let fixture: ComponentFixture<ViewRegisteredComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRegisteredComplaintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRegisteredComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
