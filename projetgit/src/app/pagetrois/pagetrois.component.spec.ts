import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetroisComponent } from './pagetrois.component';

describe('PagetroisComponent', () => {
  let component: PagetroisComponent;
  let fixture: ComponentFixture<PagetroisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagetroisComponent]
    });
    fixture = TestBed.createComponent(PagetroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
