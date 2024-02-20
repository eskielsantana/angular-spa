import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/pages/main/app.component';
import { config } from './app/pages/main/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
