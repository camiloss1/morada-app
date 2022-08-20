import { User } from "./user";

export class UserResgistered extends User {
    _id!: string;
    createdAt!: Date;
    updatedAt!: Date;
}