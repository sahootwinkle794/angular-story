import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguage$ = new BehaviorSubject<Language>('en');
  
  getCurrentLanguage() {
    return this.currentLanguage$.asObservable();
  }
  
  getCurrentLanguageValue(): Language {
    return this.currentLanguage$.getValue();
  }
  
  setLanguage(language: Language) {
    this.currentLanguage$.next(language);
    localStorage.setItem('selectedLanguage', language);
  }
  
  initializeLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage') as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'odia')) {
      this.currentLanguage$.next(savedLanguage);
    }
  }
}