import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hospital } from "./Hospital";

@Injectable({ //pode ser utilizada em outros componentes e métodos
  providedIn: 'root' // quando root, pode ser injetado em toda aplicação
})

export class HospitalService{
  private readonly API = "https://doevida.onrender.com/hospitals"

  constructor(private http: HttpClient) { }

  list(): Observable<Hospital[]>{
    return this.http.get<Hospital[]>(this.API)
  }
}
