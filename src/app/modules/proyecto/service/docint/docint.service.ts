import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocintService {
  public URL:string = "http://localhost:8082/api/docsint"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getalldocsint():Observable<any>{
    //return this.httpClient.get(`${this.URL}/listarlibros`)
    return this.httpClient.get(this.URL+"/listardocint")
  }
  public savedocint(libro:any):Observable<any>{
    return this.httpClient.post(`${this.URL}/insertardocint`,libro)
  }
  public deletedocint(id:number):Observable<any>{
    return this.httpClient.delete(`${this.URL}/eliminardocint/${id}`)
  }
}
