import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayDetailsComponent } from './array-details.component';

describe('ArrayDetailsComponent', () => {
  let component: ArrayDetailsComponent;
  let fixture: ComponentFixture<ArrayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrayDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
