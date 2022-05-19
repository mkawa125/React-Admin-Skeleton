import { Role } from "../roles_and_permissions/roleModel";
import { OrderItem } from "./orderItemModel";

export class Order {
    constructor(
        public id = 0,
        public name = '',
        public email = '',
        public uuid = '',
        public created_at = '',
        public total = 0,
        public order_items: OrderItem[]

    ){}
}