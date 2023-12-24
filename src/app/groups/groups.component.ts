import { Component } from '@angular/core';
import { CalendarModule } from 'primeng/calendar'; @Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  selectedDate: any = null
}
