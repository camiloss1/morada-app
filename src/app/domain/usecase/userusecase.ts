import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User } from "../models/User/user";
import { UserResgistered } from "../models/User/userregistered";

@Injectable ({
    providedIn:'root'
})

export class UserUseCase {
    constructor(private _userGateway : UserGateway){}

    signup(user : User) : Observable<UserResgistered> {
        //TODO implementacion de la logica de negocio
        return this._userGateway.signup(user);
    }
}