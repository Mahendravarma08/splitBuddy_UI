import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
declare var $: any;

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent {
  constructor(private router: Router) { }
  selectedDate: any = null

  goback() {
    this.router.navigate(['groups'])
  }

}
