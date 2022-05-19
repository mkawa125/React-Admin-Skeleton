import { Role } from "../roles_and_permissions/roleModel";

export class Order {
    constructor(
        public id = 0,
        public name = '',
        public email = '',
        public uuid = '',
        public created_at = '',
        public total = 0,

    ){}
}