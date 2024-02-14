import { Component } from '@angular/core';
import {NgForm,FormControl, NgModel} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
OnSubmit(f:NgForm)
{
  console.log(f);
}

getValue(f:NgModel)
{
  console.log(f);
}
}
