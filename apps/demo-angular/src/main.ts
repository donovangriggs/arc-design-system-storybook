import { bootstrapApplication } from '@angular/platform-browser';
import { defineCustomElements } from '@arctech/core/loader';
import { AppComponent } from './app/app.component';

defineCustomElements(window);

bootstrapApplication(AppComponent).catch((err) => console.error(err));
