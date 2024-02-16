import { CommonModule } from '@angular/common';
import { HttpClient , HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Item } from '../../model/item.model';
import { Order } from '../../model/order.model';
@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css',
  "styles": [
      "./node_modules/bootstrap/dist/css/bootstrap.min.css"
    ],
})


export class ViewOrdersComponent {
  
  constructor(public orderserv:OrderService){}

  item: Item | any;
  cartItems:Order| any;
  menuItems:any

  getThecheckoutitem(id: string,
  name: string,
  price: string,
  img : string,
  desc: string){
  
    let prices=parseInt (price)
    this.item = {
      id,
      name,
      prices,
      img,
      desc
    };

    this.orderserv.fetchCartDetails()
    this.cartItems= this.orderserv.getAllordersitems

  // this.cartItems=this.orderserv.getAllordersitems
  //  console.log("hii")
    // let newitem =this.item
  //   // // Handle potential errors from addItemsToOrder
  //   // this.orderserv.addItemsToOrder("ORD001", newitem).subscribe({
  //   //   next: (order) => {
  //   //     console.log('Items added to order successfully!', order);
  //   //     // Update UI or perform other actions based on the updated order
  //   //   }
  //   // });
  
     // Log the item object for debugging or potential use
  }

   ngOnInit(){
     this.orderserv.fetchAllorders()
    this.menuItems=this.orderserv.getAllorders
    this.orderserv.fetchCartDetails()
    this.cartItems= this.orderserv.getAllordersitems
    this.item=this.cartItems[0].itemsOrdered
  }

  
  fetchAllitems(){
    this.orderserv.fetchAllorders()
    this.menuItems=this.orderserv.getAllorders
    // console.log(this.menuItems)
  }


}
