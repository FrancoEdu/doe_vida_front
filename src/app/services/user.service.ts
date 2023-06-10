import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService{
  private URL: string = 'https://doevida.onrender.com'

  constructor(){}

  async login(username: string, password: string): Promise<any>{
    const response = await fetch(`${this.URL}/login`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username, password})
    })

    if(response.ok){
      const jsonResponse = response.json()
      return jsonResponse;
    }else{
      if (response.status === 403) {
        throw new Error('Wrong password');
      } else if (response.status === 404) {
        throw new Error('User not found');
      } else {
        throw new Error('Unexpected error occurred');
      }
    }
  }

}
