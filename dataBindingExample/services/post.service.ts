import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { getHeapCodeStatistics } from 'v8';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url='https://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) {}
  getPosts(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
  }

  createPost(post){
    return this.http.post(this.url,JSON.stringify(post));
  }

  updatePost(post){
    return this.http.put(this.url+'/'+post.id,JSON.stringify(post))
  }
  deletePost(post){
    return this.http.delete(this.url+'a'+'/'+post.id)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error:HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      //client Error
      console.log('client Error:'+error.error.message)
    }
    else{
      //backend Error
      console.log(`backend error:status code:${error.status} error:${error.error}`)
    }
    return throwError("Unknown Error")
  }
}
