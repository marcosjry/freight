import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoadService } from './services/load.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  loading$!: Observable<boolean>;

  constructor(private loadService: LoadService) {}

  ngOnInit(): void {
    this.loading$ = this.loadService.loading$;
  }
}
