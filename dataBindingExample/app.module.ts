import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BookComponent } from './book.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomPipe } from './custom.pipe';
import { ForEmailDirective } from './for-email.directive';
import { PostComponent } from './post/post.component';
import{HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
   BookComponent,
   CustomPipe,
   ForEmailDirective,
   PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [BookComponent]
})
export class AppModule { }
