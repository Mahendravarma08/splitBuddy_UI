import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import * as axios from 'axios'
@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit{
  groupForm!: FormGroup;
  selectedDate: any = null

  constructor(private router:Router,
    private formBuilder: FormBuilder){}
  


  ngOnInit(): void {
    this.createForm();
  }
  goback(){
    this.router.navigate(['groups'])
  }

  createForm(){
    this.groupForm = new FormGroup({
      profilephoto : new FormControl(null),
      title : new FormControl(null),
      date : new FormControl(null),
      ocassion : new FormControl(null)
    })
  }

  submitForm(){
    console.log(this.groupForm)
    // const body = {
    //   title:this.groupForm.value.title
    //   date:
    // }
    // axios.post('http://192.168.1.10:3000')

  }

}
