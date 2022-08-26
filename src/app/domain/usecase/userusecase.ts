import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { User, UserResponse } from "../models/User/user";

@Injectable ({
    providedIn:'root'
})

export class UserUseCase {
    constructor(private _userGateway : UserGateway){}

    signup(user : User) : Observable<UserResponse> {
        //TODO implementacion de la logica de negocio
        return this._userGateway.signup(user);
    }
}