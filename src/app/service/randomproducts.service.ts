import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Randomproducts } from 'src/app/models/randomproducts';

@Injectable({
  providedIn: 'root'
})
export class RandomproductsService {

  constructor(private http: HttpClient) { }
  
  getRandomProducts():Observable<Randomproducts[]>{
    return this.http.post<Randomproducts[]>('https://www.pryices.com/api/randomProducts/', null);
  }
}
