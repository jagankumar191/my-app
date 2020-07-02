import { Users } from './../schemas/Users';
import { NavbarService } from './../navbar.service';
import { LoginService } from './../login.service';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  title = "Update User ";
  
  _id:any;
  // username: any;
  // password: any;
  // email: any;
  // phone: any;
  // role: any;
   createdon: any;
   formValue: any;
  user:any;
  constructor(public about:LoginService,public nav:NavbarService,private http:HttpClient, private route: ActivatedRoute, private router: Router,private datePipe: DatePipe) { 
     this.user=new Users();
  }

  ngOnInit(): void {
    this.nav.show();
    this.route.params.forEach((params: Params) => {
      this._id = params['_id'];
  });
  this.http.get("http://localhost:4000/api/user/" + this._id).subscribe((data: any) => {
     
   this.user._id = data[0]._id;
     this.user.username = data[0].username;
     this.user.password = data[0].password;
     this.user.email = data[0].email;
      this.user.role = data[0].role;
      this.user.createdon = data[0].createdon;
      this.user.phone = data[0].phone;      
      this._id=this.user._id;
               
  }, err => console.log(err));
  // this.form = new FormGroup({
  //   'username': new FormControl(this.username),
  //   'password': new FormControl(this.password),
  //   'email': new FormControl(this.email),
  //   'phone': new FormControl(this.phone),
  //   'role': new FormControl(this.role),
  //   'createdon': new FormControl(this.createdon)   
    
  // });
   }

  mydate() {
    return new Date();
  }
  currentDate() {
    let date = new Date();
    let todayDate = this.datePipe.transform(date, "MM/dd/yyyy");
    this.createdon=todayDate;
    
  }

  submitForm(formValue:any) {
       
   console.log(this._id);
   console.log(this.user);
      this.http.put('http://localhost:4000/api/user/update/'+ this._id, this.user).subscribe(
          
      (data: any) => this.router.navigate(['users']), 
          
        err => console.log(err)
      )

   } 
  }

