import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DefaultModule } from './UI/layouts/default/default.module';
import { FullwidthModule } from './UI/layouts/fullwidth/fullwidth.module';
import { UserGateway } from './domain/models/User/gateway/user-gateway';
import { MoradaUserApiService } from './infraestructure/driven-adapter/services/morada-user/morada-user-api.service';
import { PropertyGateway } from './domain/models/Property/gateway/property-gateway';
import { MoradaPropertyApiService } from './infraestructure/driven-adapter/services/morada-property/morada-property-api.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './infraestructure/helpers/authinterceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullwidthModule,
    FormsModule,
    ReactiveFormsModule,
    SweetAlert2Module.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor,multi:true},
    { provide: UserGateway, useClass: MoradaUserApiService },
    { provide: PropertyGateway, useClass: MoradaPropertyApiService }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
