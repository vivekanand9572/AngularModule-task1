import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router:Router){}
  nav(){
this.router.navigate(['/Home'])
  }
  nav1(){
    this.router.navigate(['/About'])
      }
      nav2(){
        this.router.navigate(['/Contact'])
          }
}
