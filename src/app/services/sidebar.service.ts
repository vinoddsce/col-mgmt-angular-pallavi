import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  isOpen: boolean = false;
  @Output() change: EventEmitter<boolean> = new EventEmitter<boolean>();


  toggle(): void {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
  }

}
