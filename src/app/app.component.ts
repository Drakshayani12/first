import { Component,ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'between component using @input Parent to child';
  
  
  //view child ,create a variable view 
  varFromChildtoparent:string="";
  @ViewChild(LoginComponent) childobj: any;
  //in override method in parent component
ngAfterViewInit()
{
  console.log(this.childobj);
  this.varFromChildtoparent=this.childobj.varcp;
}
//--------------------------------------------------------------
//create a new variable using event emmitter
varOfFromchildToParent: string ="";
receiveMessage($event:any)
{
  this.varOfFromchildToParent =$event;
}
//---------------------------------------

}

//
