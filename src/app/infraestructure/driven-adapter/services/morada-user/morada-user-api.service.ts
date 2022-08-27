import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { Token } from 'src/app/domain/models/User/token';
import { User } from 'src/app/domain/models/User/user';
import { UserResponse } from 'src/app/domain/models/User/userresponse';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradaUserApiService extends UserGateway {
 
private _url = 'http://localhost:3001'
  constructor(private genericService : GenericService) { super();}
  
  signup(user: User): Observable<UserResponse> {
   return this.genericService.post<User>(this._url,'users/signup',user)
  }
  login(email: String, password: String): Observable<Token> {
    return this.genericService.post<Token>(this._url,'users/login',{email,password})
  }
}
