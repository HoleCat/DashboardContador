import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.sass']
})
export class DefaultComponent implements OnInit {
  sidebarstatus = true;
  constructor() { }

  ngOnInit(): void {
  }

  sidebarstatuschanger(event) {
    this.sidebarstatus = !this.sidebarstatus;
  }

}
