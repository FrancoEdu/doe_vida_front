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
    console.log(name + ', '+city + ', '+ state)
    const access_token = this.cookie_service.get('access_token')
    const response = await fetch(`${this.URL}hospitals`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: JSON.stringify({name,city,state})
    });

    const data = await response.json()
    return data
  }
}
