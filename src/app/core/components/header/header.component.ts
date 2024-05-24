import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // @Input

  showModal=false;

  addPhoto(){
    this.showModal=true;
    alert('cliked')
  }
}
