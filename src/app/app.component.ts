import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ngx-translate';
  languages = ['en', 'de'];
  selectedLanguage = 'en';

  constructor(private translate: TranslateService) {
    translate.addLangs(this.languages);
    translate.setDefaultLang('en');
  }
  
  onLanguageChange(lang: string): void {
    this.translate.use(lang);
  }
}
