import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  uploadrequest:any ={}
  submitted = false;
  createUser_url:any =""
  jsonString:any=""
  response:any

  registerdata= new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    email: new FormControl(),
    mobile: new FormControl(),
    address: new FormControl(),
    d1No: new FormControl()
    // file: new FormControl(),
    
  })
  constructor(private route:Router, private http:HttpClient, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.createUser_url=environment.createUser_url
    this.registerdata = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      d1No: ['', Validators.required],
      // file: ['', Validators.required],

      
  });
  }

base: any
changeListener($event: any):void{
  this.readThis($event);
}
readThis(inputValue:any):void{
  var file: File = inputValue.target.files[0];
  var myReader: FileReader = new FileReader();
  myReader.readAsDataURL(file);
  myReader.onloadend = (e) =>{
    this.uploadrequest.data = (<string>myReader.result).split(','[1])
  }
}

get f() { return this.registerdata.controls; }

register(){
  this.submitted=true

  // stop here if form is invalid
  if (this.registerdata.invalid) {
    return;
}
else {
  this.jsonString={

    "fullName": this.registerdata.getRawValue().username,
    "password": this.registerdata.getRawValue().password,
    "email": this.registerdata.getRawValue().email,
    "contactNo": this.registerdata.getRawValue().mobile,
    "address": this.registerdata.getRawValue().address,
    "d1No":this.registerdata.getRawValue().d1No
  };
  this.http.post(this.createUser_url, this.jsonString,
    {
      headers:{'Content-Type':'application/json'}
    }).subscribe(data=>{
      this.response=data;
      this.route.navigateByUrl('/login')  
    },
    err=>{
      console.log(err)
    })
}
  
}
home(){
  this.route.navigateByUrl('/homepage')
}
login(){
  this.route.navigateByUrl('/login')
}
}
