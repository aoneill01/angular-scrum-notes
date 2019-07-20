import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemizedListComponent } from './itemized-list.component';

describe('ItemizedListComponent', () => {
  let component: ItemizedListComponent;
  let fixture: ComponentFixture<ItemizedListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemizedListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemizedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
