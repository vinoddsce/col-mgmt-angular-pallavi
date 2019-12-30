import { Component, OnInit, HostListener, Input } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-side-bar-toggle',
  templateUrl: './side-bar-toggle.component.html',
  styleUrls: ['./side-bar-toggle.component.css']
})
export class SideBarToggleComponent implements OnInit {

  // @Input() sideBar: SideBarComponent;

  @HostListener('click')
  public toggle(): void {
    console.log("Toggling !!!!!!");
    // this.sideBar.toggle();
    this.sideBarService.toggle();
  }

  // constructor() { }
  constructor(private sideBarService: SidebarService) { }

  ngOnInit() {
  }

}
