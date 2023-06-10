import { Injectable } from "@angular/core";
import { Hospital } from "../interface/Hospital";

@Injectable({
  providedIn: 'root'
})
export class HospitalService{
  private URL: string = 'https://doevida.onrender.com/';

  constructor(){}

  async getAllHospitals(): Promise<Hospital[]>{
    const response = await fetch(`${this.URL}hospitals`);
    const data = await response.json();
    return data.hospitals;
  }
}
