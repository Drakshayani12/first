import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  changecolor: boolean=false;
  isActive: boolean=true;
  title: string = "Data from component";
  color: string = "cyan";
  image: string = "https://th.bing.com/th/id/OIP.d86XWMIvFtPNm5-RTlyLHAHaKc?w=115&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7";
  onewaydate: string ="the data component"
  //create a new variable 
  varcp:string ="this message is between child to parent using @viewchild"

  //@input between components first we have to import input 
  @Input() varpc:any
  constructor(){
   
  }
  //@Output create a new variable 
  varOcp:string ="from child to parent using event emitter by click";
  @Output() messageEvent  = new EventEmitter<string>();
  sendMessage(){
    this.messageEvent.emit(this.varOcp)
  }

 

  //-----------------------------------------------------------------------------
  buttonClick()
  {
    console.log('Button click event happened');
  }
  onKeyUp($event: any)
  {
    //if($event.keyCode ===13)
    if($event.code == "Enter")
    console.log($event);
  }
  onKey()
  {
console.log('key pressed');

  }
  onKey1(name:string)
  {
    console.log("Entered value is "+name);
  }
  onKey2()
  {
    console.log(this.onewaydate);
  }

  //=================
names:string[] =["ram","prem","rim"];

objArray: Array<Object>=[
      {eid:1,fname:"Arun"},
    {eid:2,fname:"Amit shah"},
    {eid:3,fname:"modi ji"},
    {eid:4,fname:"mamata"}
]

form:string='';
buttonClick1(form1:string){
  this.form= form1;

}
count:number =89;
dcValue:number =45.00;
price:number=120193;

}
