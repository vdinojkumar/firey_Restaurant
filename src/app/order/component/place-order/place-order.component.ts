import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl:'./place-order.component.html',
  styleUrl: './place-order.component.css'
})

 

export class PlaceOrderComponent {

  constructor(private orderservice:OrderService){}

  items:number=0;

  mydata:any

  i:number=0

  increase(){
    ++this.i;
  }
  decrease(){
    if(this.i>0){
      --this.i;
    }
  }

  // getdata(){
  //   this.orderservice.fetchItems()
  //   this.mydata=this.orderservice.getAllordersitems
  //   console.log(this.mydata)
  // }
  
}


