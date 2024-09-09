import { Component } from '@angular/core';

@Component({
  selector: 'app-transcript-info',
  standalone: true,
  imports: [],
  templateUrl: './transcript-info.component.html',
  styleUrl: './transcript-info.component.css'
})
export class TranscriptInfoComponent {
  protected date : Date = new Date();
  protected issuedate : string=this.getFormattedDate();
  getFormattedDate(): string {
    const day = this.date.getDate().toString().padStart(2, '0'); // Get day and add leading zero if needed
    const month = (this.date.getMonth() + 1).toString().padStart(2, '0'); // Get month (0-indexed, so add 1) and add leading zero
    const year = this.date.getFullYear().toString(); // Get full year

    return `${day}-${month}-${year}`; // Return in dd-mm-yyyy format
  }
}
