import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  standalone: true,
  imports: [],
  templateUrl: './button-generic.component.html',
  styleUrl: './button-generic.component.scss'
})
export class ButtonGenericComponent {
@Input() buttonText!: string;


}
