import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { Item } from './item.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public constructor( private http:HttpClient ){}

  getAllorders:any
 
  getAllordersitems:any

 

  // fetchItems(){
  //   this.http.get('http://localhost:3000/orders/1').subscribe((res:any)=>{
  //     this.getAllordersitems=res
  //   })
  // }

  // public addItemsToOrder(orderId: string, newItems: Item): Observable<Order> {
  //   const updateData = newItems
  //   console.log("hii")
  //   return this.http.post<Order>(`http://localhost:3000/orders/${orderId}`, updateData);
  // }
  ngOnInit(){
    this.http.get('http://localhost:3000/vieworder').subscribe((res:any)=>{
      this.getAllorders=res
    })
  }

  fetchAllorders(){
  }
  
}
