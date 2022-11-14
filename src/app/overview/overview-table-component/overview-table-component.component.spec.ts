import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewTableComponentComponent } from './overview-table-component.component';

describe('OverviewTableComponentComponent', () => {
  let component: OverviewTableComponentComponent;
  let fixture: ComponentFixture<OverviewTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewTableComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverviewTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
