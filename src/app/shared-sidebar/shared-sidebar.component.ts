import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shared-sidebar',
  templateUrl: './shared-sidebar.component.html',
  styleUrls: ['./shared-sidebar.component.css']
})
export class SharedSidebarComponent {

  constructor(private router:Router){}

  navigateTo(type:String){
    if(type === 'home')
    this.router.navigate(['/'])
  }

}
