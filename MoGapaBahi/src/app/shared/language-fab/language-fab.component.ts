import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../config/api.config';

@Component({
  selector: 'app-language-fab',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fab-container" [class.active]="isOpen">
      <button 
        class="fab-main" 
        (click)="toggleFab()"
        [attr.aria-label]="'Toggle language menu'"
      >
        <span class="fab-icon">{{ currentLanguage === 'en' ? 'EN' : 'ଓ' }}</span>
      </button>
      
      <div class="fab-options" [class.show]="isOpen">
        <button 
          class="fab-option" 
          (click)="switchLanguage('en')"
          [class.active]="currentLanguage === 'en'"
        >
          <span class="option-text">English</span>
        </button>
        <button 
          class="fab-option" 
          (click)="switchLanguage('odia')"
          [class.active]="currentLanguage === 'odia'"
        >
          <span class="option-text">ଓଡ଼ିଆ</span>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .fab-container {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 1000;
    }

    .fab-main {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .fab-main:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }

    .fab-main:active {
      transform: scale(0.95);
    }

    .fab-icon {
      color: white;
      font-weight: bold;
      font-size: 14px;
      transition: transform 0.3s ease;
    }

    .fab-container.active .fab-icon {
      transform: rotate(45deg);
    }

    .fab-options {
      position: absolute;
      bottom: 70px;
      right: 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .fab-options.show {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    .fab-option {
      background: white;
      border: none;
      border-radius: 25px;
      padding: 12px 20px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      cursor: pointer;
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      gap: 8px;
      min-width: 120px;
    }

    .fab-option:hover {
      transform: translateX(-5px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    .fab-option.active {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
    }

    .option-text {
      font-size: 14px;
      font-weight: 500;
    }

    /* Responsive design */
    @media (max-width: 768px) {
      .fab-container {
        bottom: 15px;
        right: 15px;
      }
      
      .fab-main {
        width: 50px;
        height: 50px;
      }
      
      .fab-options {
        bottom: 65px;
      }
    }
  `]
})
export class LanguageFabComponent implements OnInit {
  isOpen = false;
  currentLanguage: Language = 'en';

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.languageService.initializeLanguage();
    this.languageService.getCurrentLanguage().subscribe(lang => {
      this.currentLanguage = lang;
    });
  }

  toggleFab() {
    this.isOpen = !this.isOpen;
  }

  switchLanguage(language: Language) {
    this.languageService.setLanguage(language);
    this.isOpen = false;
    // Removed the page reload - now components will listen to language changes
  }
}