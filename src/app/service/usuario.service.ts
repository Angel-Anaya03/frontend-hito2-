import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../model/reporte';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private  url = 'http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  register(user: any): Observable<any> {
    return this.http.post(`${this.url}/u`, user);
  }

  // Método para validar usuario
  validateUser(user: any): Observable<any> {
    return this.http.post(`${this.url}/validate`, user);
  }
  getAllUsers(): Observable<any> {
    return this.http.get(`${this.url}/usuarios`);
  }
  getReporte():Observable<Reporte[]>{
    return this.http.get<Reporte[]>(this.url);
  }
}
