import { Component, OnInit, HostBinding } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private sideBarService: SidebarService) { }

  ngOnInit() {
    this.sideBarService.change.subscribe((isOpen: boolean) => {
      this.isOpen = isOpen;
    })
  }

  @HostBinding('class.is-open')
  isOpen: boolean = false;

  // public toggle(): void {
  //   console.log("toggle() !!!");

  //   this.isOpen = !this.isOpen;
  // }

}
