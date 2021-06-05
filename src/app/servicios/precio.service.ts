import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PrecioService {
  constructor(private http: HttpClient) {}

  getPrecio() {
    return new Promise((resolve) => {
      this.http.get(environment.API).subscribe((data) => {
        resolve(data);
      });
    });
  }
}
