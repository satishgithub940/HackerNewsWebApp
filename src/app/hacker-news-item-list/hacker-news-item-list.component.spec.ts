import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerNewsItemListComponent } from './hacker-news-item-list.component';

describe('HackerNewsItemListComponent', () => {
  let component: HackerNewsItemListComponent;
  let fixture: ComponentFixture<HackerNewsItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HackerNewsItemListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HackerNewsItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
