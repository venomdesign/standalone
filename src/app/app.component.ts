import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LAYOUT } from './shared/layout';
import { ButtonComponent } from './shared/components';
import { CardComponent } from './shared/components';

@Component({
  selector: 'vision-root',
  standalone: true,
  imports: [
    CommonModule, 
    LAYOUT, 
    ButtonComponent,
    CardComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'standalone';

  clickedButton(){
    console.log('clicked');
  }
}
