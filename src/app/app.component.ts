import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  email=new FormControl('abc@gmail.com', [Validators.required,Validators.minLength(2),Validators.maxLength(10)]);

  showEmailDetails(){
    console.log('errors',this.email.errors);
    console.log('valid',this.email.valid);
  }
}
