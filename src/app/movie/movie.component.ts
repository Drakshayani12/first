import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
  constructor(private router : Router){}
  ngOnInit(){

    const obsTest$ = new Observable(observer =>
      {
        //return function
        observer.next('Returned from Observable')
        observer.next('this is the second return from Observable');
        setTimeout(()=>
        {
          observer.next('this is from timeout function');
        },2000);
        observer.next('this is the thrid return from observable');
        //console.log('Printed from observable');
      }).subscribe(value => {
        console.log(value)
        //call function
      });

      const obsTest = function(){
        // console.log('printed from function');
        return "return from function";
        return "return 2 from function";
      }
      const returnData = obsTest();
      console.log(returnData);
      obsTest();
      }
 
      onSubmit(){
        this.router.navigate(['/posts'],{queryParams : {page :1,order:'newset'}});
       }

}
