import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  register(email: string, password: string, name: string, typedocument: string, document: string, phone: string) {
    var user = {
      email,
      password,
      name,
      typedocument,
      document,
      phone
    }

    
    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
   
    return this.http.post<any>('https://moradatest.free.beeceptor.com/signup', user,httpOptions).subscribe(data => {
      Swal.fire({
        title: 'title',
        text: 'text',
        icon: 'success',
        confirmButtonText: 'confirmButton'
      });
    }

     )
  }
}
