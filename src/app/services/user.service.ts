import { Injectable } from '@angular/core';
import { User } from '../interface/Users';
import { cookieService } from './cookie.service';


@Injectable({
  providedIn: 'root'
})
export class UserService{
  private URL: string = 'https://doevida.onrender.com'

  constructor(private cookieService: cookieService){}

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
  async create(username: string, password: string): Promise<User>{
    const access_token = this.cookieService.get('access_token');
    const response = await fetch(`${this.URL}/users`, {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: JSON.stringify({username, password})
    })
    const data = await response.json();
    return data
  }

  async getAllUsers(): Promise<User[]>{
    const access_token = this.cookieService.get('access_token');

    const response = await fetch(`${this.URL}/users`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    });
    const data = await response.json()
    return data;
  }

  async getUserByUsername(username: string): Promise<User>{
    const access_token = this.cookieService.get('access_token');
    const response = await fetch(`${this.URL}/users/${username}`, {
      method: 'GET',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      }
    })
    const data = await response.json()
    return data;
  }

  async updateUser(user: User, username: string): Promise<any>{
    const access_token = this.cookieService.get('access_token');
    const response = await fetch(`${this.URL}/users/${username}`, {
      method: 'PUT',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: JSON.stringify(user)
    })

    if(response.ok){
      const jsonResponse = await response.json()
      return jsonResponse
    }else{
      throw new Error('Erro ao atualizar o usuário');
    }
  }

  async delete(user: User, username: string): Promise<any>{
    const access_token = this.cookieService.get('access_token');
    const response = await fetch(`${this.URL}/users/${username}`, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
      },
      body: JSON.stringify(user)
    })

    if(response.ok){
      const jsonResponse = await response.json()
      return jsonResponse
    }else{
      throw new Error('Erro ao deletar o usuário');
    }
  }


}
