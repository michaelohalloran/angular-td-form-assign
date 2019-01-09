import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('myForm') userForm: NgForm;

  levels: string[] = ['Basic', 'Advanced', 'Pro'];
  defaultLevel: string = 'Advanced';
  submitted: boolean = false;
  userData = {
    emailAddress: '',
    level: '',
  }

  onSubmit() {
    console.log('myForm: ', this.userForm);
    this.userData.emailAddress = this.userForm.value.email;
    this.userData.level = this.userForm.value.level;
    this.submitted = true;
    this.userForm.reset();
  }

  // onSubmit(form: NgForm) {
  //   console.log('hit submit');
  //   console.log('form: ', form);
  //   this.submitted = true;
  // }
}
