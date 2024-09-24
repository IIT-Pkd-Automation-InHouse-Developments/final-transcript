import { Component } from '@angular/core';
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
  generatePDF() {
    const element = document.getElementById('transcript-container');

    if (element) {
      // Use html2canvas to capture the content
      html2canvas(element, { scale: 5, useCORS: true }).then(canvas => {
        // Convert canvas to image data with a lower quality to reduce file size
        const imgData = canvas.toDataURL('image/jpeg', 0.7); // 0.7 is the quality setting (0.0 to 1.0)

        // Create a new jsPDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210; // A4 size width in mm
        const pageHeight = 297; // A4 size height in mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

        // Check if image height exceeds the page height and scale down if necessary
        const pageRatio = imgHeight / pageHeight;
        const scale = pageRatio > 1 ? pageRatio : 1;
        const scaledImgWidth = imgWidth;
        const scaledImgHeight = imgHeight / scale;

        // Add image to PDF
        pdf.addImage(imgData, 'JPEG', 0, 0, scaledImgWidth, scaledImgHeight);

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
