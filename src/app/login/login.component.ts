import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;

  logindata= new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  })
  constructor(private route:Router, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.logindata = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
  });
  }

  get f() { return this.logindata.controls; }
login(){
  this.submitted = true;

  // stop here if form is invalid
  if (this.logindata.invalid) {
    return;
}

  this.route.navigateByUrl('/homepage')
}
register(){
  this.route.navigateByUrl('/registration')
}
home(){
  this.route.navigateByUrl('/homepage')
}
}
