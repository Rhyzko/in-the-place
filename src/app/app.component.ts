import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { InThePlaceComponent } from './in-the-place/in-the-place.component'
import { HeaderComponent } from "./core/header/header.component";
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
registerLocaleData(localeFr, 'fr');
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, RouterOutlet, InThePlaceComponent, HeaderComponent],
})
export class AppComponent {
  title = 'in-the-place';

}

