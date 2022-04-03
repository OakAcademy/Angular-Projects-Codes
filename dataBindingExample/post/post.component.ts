// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:[any];
  error;

  

  constructor(private postService:PostService) {
    /* http.get(this.url)
      .subscribe(response=>{
        console.log(response);
        this.posts=<[any]>response;
      }) */
      /* postService.getPosts()
      .subscribe(response=>{
        console.log(response);
        this.posts=<[any]>response;
      }) */
   }

   ngOnInit():void{
    this.postService.getPosts()
      .subscribe(response=>{
        console.log(response);
        this.posts=<[any]>response;},
        error=>this.error=error
        )
  }
   
   

   updatePost(post){
     post.title='updated';
      // this.http.patch(this.url+'/'+post.id,JSON.stringify({title:'updated'}))
    //  this.http.put(this.url+'/'+post.id,JSON.stringify(post))
    this.postService.updatePost(post)
        .subscribe(response=>{
          console.log(response);
        })
   }

   deletePost(post){
    //  this.http.delete(this.url+'/'+post.id)
    this.postService.deletePost(post)
        .subscribe(response=>{
          console.log(response);
          let index=this.posts.indexOf(post);
          this.posts.splice(index,1)
        },
        error=>this.error=error)
   }

   createPost(input:HTMLInputElement){
     const post={title:input.value}
     input.value='';

    //  this.http.post(this.url,JSON.stringify(post))
    this.postService.createPost(post)
     .subscribe(response=>{
      post['id']=response['id'];
      this.posts.splice(0,0,post);
       console.log(response);
     })
   }

  

}
