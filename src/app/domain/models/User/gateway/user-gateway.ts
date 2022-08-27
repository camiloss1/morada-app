import { Observable } from "rxjs";
import { Token } from "../token";
import { User } from "../user";
import { UserResponse } from "../userresponse";

export abstract class UserGateway {
abstract signup(user : User) : Observable<UserResponse>;
abstract login(email : String, password : String) : Observable<Token>;
}

