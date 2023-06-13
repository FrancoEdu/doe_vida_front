import { Injectable } from "@angular/core";
import { Hospital } from "../interface/Hospital";
import { cookieService } from "./cookie.service";

@Injectable({
  providedIn: 'root'
})
export class HospitalService{
  private URL: string = 'https://doevida.onrender.com/';

  constructor(private cookie_service: cookieService){}

  async getAllHospitals(): Promise<Hospital[]>{
    const response = await fetch(`${this.URL}hospitals`);
    const data = await response.json();
    return data.hospitals;
  }

  async create(name: string, city: string, state: number): Promise<Hospital>{
    console.log(name)
    const access_token = this.cookie_service.get('access_token');
    const data = {
    hospital_name: name,
    city_name: city,
    state: state
    };

    const response = await fetch(`${this.URL}hospitals`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
  }

  async delete(hospital_name:string):Promise<any>{
    const access_token = this.cookie_service.get('access_token');
    const response = await fetch(`${this.URL}hospitals/${hospital_name}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
    });

    const responseData = await response.json()
    return responseData
  }
}
