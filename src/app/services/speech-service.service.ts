import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechServiceService {

  constructor() { }

  speak(text: string): void {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  }
}
