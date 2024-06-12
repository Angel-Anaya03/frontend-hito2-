import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reporte } from '../model/reporte';

@Injectable({
  providedIn: 'root'
})
export class ReporteService {
  private url = 'http://localhost:8080/api/reportes'; 

  constructor(private http: HttpClient) { }
  
  getReportes(): Observable<Reporte[]> {
    return this.http.get<Reporte[]>(this.url);
  }
}
