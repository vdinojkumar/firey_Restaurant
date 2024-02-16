import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ViewOrdersComponent } from './order/component/view-orders/view-orders.component';
import { SliderComponent } from '../components/slider/slider.component';
import { PlaceOrderComponent } from './order/component/place-order/place-order.component';

export const routes: Routes = [
    {path:'items',component:ViewOrdersComponent},
    {path:'',component:SliderComponent},
    {path:'ordersummary',component:PlaceOrderComponent}
];
