import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCheckItemComponent } from './new-check-item.component';

describe('NewCheckItemComponent', () => {
  let component: NewCheckItemComponent;
  let fixture: ComponentFixture<NewCheckItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCheckItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCheckItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
