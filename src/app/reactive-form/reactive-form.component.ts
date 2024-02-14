import { Component } from '@angular/core';
import { NgForm, NgModel, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  form:any
  constructor(){
    this.form=new FormGroup({
      fullName:new FormControl(
        '',[Validators.required,
        Validators.minLength(5)]
      ),
      email:new FormControl(
        '',[Validators.required,
        Validators.minLength(5)]
      ),
      address:new FormControl(
        '',[Validators.required,
          Validators.minLength(5)]
      )

    })
  }
  get fullName(){
    return this.form.get("fullName")
  }
  get email(){
    return this.form.get("email")

  } 
  get address(){
    return this.form.get("address")
  }
  
  getValue(f:NgModel)
{
  console.log(f);
}
}
