import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipodocintService {

  public URL:string = "http://localhost:8082/api/tiposdocint"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getalltiposdocint():Observable<any>{
    return this.httpClient.get(`${this.URL}/listartipodocint`);
  }
}
