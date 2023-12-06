import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackernewslistComponent } from './hackernewslist.component';

describe('HackernewslistComponent', () => {
  let component: HackernewslistComponent;
  let fixture: ComponentFixture<HackernewslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackernewslistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackernewslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
