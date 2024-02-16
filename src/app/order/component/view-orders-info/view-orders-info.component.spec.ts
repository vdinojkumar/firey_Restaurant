import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOrdersInfoComponent } from './view-orders-info.component';

describe('ViewOrdersInfoComponent', () => {
  let component: ViewOrdersInfoComponent;
  let fixture: ComponentFixture<ViewOrdersInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewOrdersInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewOrdersInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
