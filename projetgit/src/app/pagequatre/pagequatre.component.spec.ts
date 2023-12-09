import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagequatreComponent } from './pagequatre.component';

describe('PagequatreComponent', () => {
  let component: PagequatreComponent;
  let fixture: ComponentFixture<PagequatreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagequatreComponent]
    });
    fixture = TestBed.createComponent(PagequatreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
