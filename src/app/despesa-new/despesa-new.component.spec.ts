import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DespesaNewComponent } from './despesa-new.component';

describe('DespesaNewComponent', () => {
  let component: DespesaNewComponent;
  let fixture: ComponentFixture<DespesaNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DespesaNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DespesaNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
