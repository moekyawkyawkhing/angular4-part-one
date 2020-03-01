import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public dataUrl : string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: Http) { }

  getAllPost(){
    return this.http.get(this.dataUrl)
    .pipe(
      map(response => response.json())
    );
  }

  getSinglePost(id){
    return this.http.get(`${this.dataUrl}/${id}`)
    .pipe(
      map(response => response.json())
    );
  }
}
