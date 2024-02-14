import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-array-details',
  templateUrl: './array-details.component.html',
  styleUrls: ['./array-details.component.css']
})
export class ArrayDetailsComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  formModel:any={PurposeOfLoan:null}
  itemForm: FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router)
  {
    this.itemForm=this.formBuilder.group({
      FullName:[this.formModel.FullName,[Validators.required]],
      LoanAmount:[this.formModel.LoanAmount,[Validators.required,Validators.min(1000),Validators.max(10000)]],
      PurposeOfLoan:[this.formModel.PurposeOfLoan,[Validators.required]],
      Tenure:[this.formModel.Tenure,[Validators.required,Validators.min(1),Validators.max(30)]],
  
    });
  
  }
  onRegister()
  {
    if(this.itemForm.valid)
    {
      this.router.navigateByUrl('/welcome')
    }
    else{
      this.itemForm.markAllAsTouched();
      this.router.navigateByUrl('error');
    }
  }
  
  
 
}
