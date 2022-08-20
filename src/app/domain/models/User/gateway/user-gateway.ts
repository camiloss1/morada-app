import { Observable } from "rxjs";
import { User, UserResponse } from "../user";

export abstract class UserGateway {
abstract signup(user : User) : Observable<UserResponse>;
}