import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // ✅ Import CommonModule to use *ngFor
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  features = [
    { title: "Text Summarization", description: "Generate concise summaries from text." },
    { title: "Text Translation", description: "Convert text between languages." },
    { title: "Image OCR Processing", description: "Extract text from images with high accuracy." },
    { title: "Audio Transcription", description: "Convert audio into text accurately." },
    { title: "Audio Summarization", description: "Generate concise summaries from audio." },
    { title: "AI Image Generation", description: "Create images from text prompts with AI." },
    { title: "AI Story Generation", description: "Create stories from text prompts with AI." },
    { title: "Barcode Generation", description: "Create various barcodes." },
    { title: "AI Chat Assistant", description: "An intelligent AI-powered chat assistant for instant answers." }
  ];
}
