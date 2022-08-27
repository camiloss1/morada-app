import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserGateway } from "../models/User/gateway/user-gateway";
import { Token } from "../models/User/token";
import { User } from "../models/User/user";
import { UserResponse } from "../models/User/userresponse";

@Injectable ({
    providedIn:'root'
})

export class UserUseCase {
    constructor(private _userGateway : UserGateway){}

    signup(user : User) : Observable<UserResponse> {
        //TODO implementacion de la logica de negocio
        return this._userGateway.signup(user);
    }
    login(email : String, password : String) : Observable<Token> {
        return this._userGateway.login(email,password);
    }
}