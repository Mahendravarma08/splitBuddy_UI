import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {

  constructor(private router: Router) { }


  onBoxClicked(boxType: string) {
    console.log(boxType, "boxTypee");

    if (boxType === 'create')
      this.router.navigate(['create'])
    if (boxType === 'join')
      this.router.navigate(['join'])
  }
}
