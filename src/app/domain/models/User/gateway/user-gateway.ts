import { Observable } from "rxjs";
import { User } from "../user";
import { UserResgistered } from "../userregistered";

export abstract class UserGateway {
abstract signup(user : User) : Observable<UserResgistered>;
}