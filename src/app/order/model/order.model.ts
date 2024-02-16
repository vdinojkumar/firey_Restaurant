import { Item } from "./item.model";

export interface Order {
    orderNo: string;
    contactName: string;
    orderDate: Date;
    itemsOrdered: Item[];
    orderTotal: number;
    taxTotal: number;
    grandTotal: number;
}
