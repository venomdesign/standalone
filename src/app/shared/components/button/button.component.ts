import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vision-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() label?: string | '';
  @Input() color: string = 'primary';
  @Input() disabled: boolean = false;
  @Input() preAriaLabel?: string | 'Click here to ';
  @Input() ariaLabel?: string;
  @Input() leftIcon?: string;
  @Input() rightIcon?: string;
  @Output() onClick = new EventEmitter<void>();

  buttonClicked(){
    if(!this.disabled){
      this.onClick.emit();
    }
  }
}
