import { Injectable } from '@angular/core';
import { BehaviorSubject, timeout } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadService {


    private loadingSubject = new BehaviorSubject<boolean>(false);
    loading$ = this.loadingSubject.asObservable();
  
    show() {
      this.loadingSubject.next(true);
    }
  
    hide() {
      this.loadingSubject.next(false);
    }
  
}
