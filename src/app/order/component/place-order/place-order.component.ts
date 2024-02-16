import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Order } from '../../model/order.model';
import { Item } from '../../model/item.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-order',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl:'./place-order.component.html',
  styleUrl: './place-order.component.css'
})

 

export class PlaceOrderComponent {

  constructor(private orderservice:OrderService){}

  items:number=0;

  cartItems:Order|any;

  item:Item|any;

  i:number=1;

  totalprice:number=0

  itemprice:number=0;

  // increase(){
  //   ++this.i;
  // }


  addItems(orderId: string , itemId: string): void {
    console.log("updateItems called")
    this.orderservice.updateNumberOfItems(orderId, itemId).subscribe(
      () => console.log('Items updated successfully'),
      (error) => console.error('Error updating items:', error)
    );
  }
  removeItems(orderId: string , itemId: string): void {
    console.log("updateItems called")
    this.orderservice.updateNumberOfItems(orderId, itemId).subscribe(
      () => console.log('Items updated successfully'),
      (error) => console.error('Error updating items:', error)
    );
  }

  // decrease(){
  //   if(this.i>1){
  //     --this.i;
  //   }
  // }

  calculatetotalprice(){
    for(let a of this.item){
      this.totalprice+= a.price
    }
  }

  ngOnInit(){
    this.getdata()
    this.calculatetotalprice()
  }

  getdata(){
    this.orderservice.fetchCartDetails()
    this.cartItems= this.orderservice.getAllordersitems
    this.item=this.cartItems[0].itemsOrdered
    console.log(this.item)
    this.items=this.item.length
  }
  
}

// function updateItems(orderId) {
//   const order = orders.find(order => order.id === orderId);
//   if (order) {
//     order.itemsOrdered.forEach(item => {
//       item.numberOfItems += 1; // Update the number of items
//     });
//     console.log('Items updated for order:', order);
//     // You can update your UI here to reflect the changes
//   } else {
//     console.error('Order not found');
//   }
// }


