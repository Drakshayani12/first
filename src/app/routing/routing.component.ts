import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
    //   let id = value.get('id');
    // const title = value.get('title');
    //   console.log(value);
    //   console.log(id);
    // console.log(title);
    const page = value.get('page')
    console.log(page);

      // let id = value.get('id');
      // console.log(id);
    })

  }
  constructor(private route: ActivatedRoute) {

  }
  
}
