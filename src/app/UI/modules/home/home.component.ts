import { Component, OnInit } from '@angular/core';
import { PropertiesResponse } from 'src/app/domain/models/Property/property';
import { PropertyUseCase } from 'src/app/domain/usecase/propertyusecase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _propertyUseCase: PropertyUseCase) { }
  response: any;
  properties!: PropertiesResponse;
  ngOnInit(): void {
    this.response = this._propertyUseCase.getProperties();
      this.response.subscribe(
        (data: PropertiesResponse) => {
          if (data) {
            this.properties = data
            console.log(this.properties);
          }
        }
      )
  }

}
