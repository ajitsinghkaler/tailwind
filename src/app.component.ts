import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: ` <h1>{{ title }}</h1>`,
  styles: `
    h1 {
      @apply text-4xl font-bold;
    }`,
})
export class AppComponent {
  title = 'test';
}
