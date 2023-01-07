import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrgainisersComponent } from './view-orgainisers.component';

describe('ViewOrgainisersComponent', () => {
  let component: ViewOrgainisersComponent;
  let fixture: ComponentFixture<ViewOrgainisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOrgainisersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewOrgainisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
