import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGateway } from 'src/app/domain/models/User/gateway/user-gateway';
import { User, UserResponse } from 'src/app/domain/models/User/user';
import { GenericService } from 'src/app/infraestructure/helpers/generic.service';

@Injectable({
  providedIn: 'root'
})
export class MoradaApiService extends UserGateway {
  
private _url = 'http://localhost:3001'
  constructor(private genericService : GenericService) { super();}
  
  signup(user: User): Observable<UserResponse> {
   return this.genericService.post<User>(this._url,'users/signup',user)
  }

}
