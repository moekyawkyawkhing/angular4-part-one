import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data : string [] = [];

  constructor(public http:Http) {
    console.log('Data service connected.');  
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      map(res => res.json()) // or any other operator
    )
  }

  addData(add_data){
    this.data.push(add_data);
  }

  getData(){
    return this.data;
  }
}
