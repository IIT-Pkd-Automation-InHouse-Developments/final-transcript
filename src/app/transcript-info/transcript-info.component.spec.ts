import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranscriptInfoComponent } from './transcript-info.component';

describe('TranscriptInfoComponent', () => {
  let component: TranscriptInfoComponent;
  let fixture: ComponentFixture<TranscriptInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranscriptInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TranscriptInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
