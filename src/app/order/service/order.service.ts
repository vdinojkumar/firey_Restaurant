import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../model/item.model';
import { Order } from '../model/order.model';
import { Observable, catchError, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  public constructor( private http:HttpClient ){}

  getAllorders:any
 
  public getAllordersitems:any
 
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
    this.fetchAllorders();
    this. fetchCartDetails();
  }
  fetchCartDetails(){
    this.http.get('http://localhost:3000/orders').subscribe((res)=>{
      this.getAllordersitems=res
      console.log(res)
    })
  }

  fetchAllorders(){
    this.http.get('http://localhost:3000/Items').subscribe((res)=>{
      this.getAllorders=res
      console.log(res)
    })
  }

  updateNumberOfItems(orderId: string, itemId: string): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/orders/${orderId}`).pipe(
      catchError((error) => {
        console.error('Error fetching order:', error);
        throw error;
      }),
      switchMap((order) => {
        const item = order.itemsOrdered.find((item: { id: string; }) => item.id === itemId);
        if (item) {
          item.numberOfItems += 1;
          return this.http.put(`http://localhost:3000/orders/${orderId}`, order).pipe(
            catchError((error) => {
              console.error('Error updating order:', error);
              throw error;
            })
          );
        } else {
          throw new Error('Item not found in order');
        }
      })
    );
  }
  
}
