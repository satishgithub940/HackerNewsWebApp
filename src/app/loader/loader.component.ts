import { CommonModule } from '@angular/common';
import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: ' <div class="loader" *ngIf="loading"> </div>',
  styleUrls: ['./loader.component.css'],
  standalone: true,
  imports:[CommonModule]
})
export class LoaderComponent {
  @Input() loading: boolean = false;
}
