import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
login(){
  this.route.navigateByUrl('/login')
}
carDetails(){}
services(){}
home(){
  this.route.navigateByUrl('/home')
}
}
