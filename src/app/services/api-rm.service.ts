import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class ApiRMService {
  private link = "https://rickandmortyapi.com/api/character/";

  constructor(private http: HttpClient) { 
    
  }

  getDetails(id:number){
    return this.http.get<Character>(`${this.link}/${id}`)
  }
  
  searchPersonajes(query='',page=1){
    return this.http.get<Character[]>(`${'https://rickandmortyapi.com/api/character/'}/?name=${query}&page=${page}`)
  }
}
