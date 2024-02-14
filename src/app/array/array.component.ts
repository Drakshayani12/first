import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
  objArray: any=[
    {id:1,fname:"movie"},
  {id:2,fname:"songs"},
  {id:3,fname:"moni"},
  {id:4,fname:"mama"}
]
}
