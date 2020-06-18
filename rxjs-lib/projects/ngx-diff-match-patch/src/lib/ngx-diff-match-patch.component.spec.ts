import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDiffMatchPatchComponent } from './ngx-diff-match-patch.component';

describe('NgxDiffMatchPatchComponent', () => {
  let component: NgxDiffMatchPatchComponent;
  let fixture: ComponentFixture<NgxDiffMatchPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxDiffMatchPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxDiffMatchPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
