import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vision-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone';
}
