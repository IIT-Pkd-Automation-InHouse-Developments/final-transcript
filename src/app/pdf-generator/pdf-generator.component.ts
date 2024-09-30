import {Component, ElementRef, ViewChild} from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf-generator',
  standalone: true,
  imports: [],
  templateUrl: './pdf-generator.component.html',
  styleUrl: './pdf-generator.component.css'
})
export class PdfGeneratorComponent {
   @ViewChild('content', {static:false }) content!: ElementRef;
  generatePDF() {

    const element = document.getElementById('transcript-container');

    if (element) {
      // Use html2canvas to capture the content
      html2canvas(element, { scale: 3, useCORS: true }).then(canvas => {
        // Create a new jsPDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 size width in mm
        const pageHeight = 297; // A4 size height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        let heightLeft = imgHeight;
        let position = 0;
        const imgData = canvas.toDataURL('image/jpeg', 0.9); // 0.9 for better quality

        // Add the first image (page)
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        // Add more pages if necessary
        while (heightLeft > 0) {
          position = heightLeft - imgHeight; // Adjust position for each new page
          pdf.addPage();
          pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // Save the generated PDF
        pdf.save('transcript.pdf');
      }).catch(error => {
        console.error('Error generating PDF:', error);
      });
    } else {
      console.error('Element not found: #transcript-container');
    }
  }
}
