import { LoginService } from './../login.service';
import { NavbarService } from './../navbar.service';
import { Users } from './../schemas/Users';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="Login Page";
  form:FormGroup;
  username:any;
  password:any;
  role:any;
  user:Users;
  constructor(public login:LoginService,public isAdmin:LoginService,private http:HttpClient,private router:Router,public fb: FormBuilder,private nav:NavbarService) { 
    this.form = this.fb.group({
      username: [null],
      password: [null]     
      
    })
  }

  ngOnInit(): void {
    this.nav.hide();
    this.form = new FormGroup({
      'username': new FormControl(this.username, [
        Validators.required
      ]),
      'password': new FormControl(this.password, [
        Validators.required       
      ])
    });
  }

  submitForm() {
    console.log("Form Validation : " + this.form.valid);
    if (this.form.valid) {
      let formObj = this.form.getRawValue(); 
     let uname=this.form.controls['username'].value;
     let pass=this.form.controls['password'].value; 
      
      this.http.get('http://localhost:4000/api/login/'+uname).subscribe((data: any) => {
             
          this.username=data.username;    
          this.password=data.password;         
          if(this.username!=""||this.username!=null){
            if(this.password==pass){
              if(data.role=="Admin"){
                  this.isAdmin.isAdmin();
              }
              this.login.loggedIn();
              this.router.navigate(['users']);
            }else{
              alert("Login Failed");
            }
          }else{
            alert("Login Failed");
          }
       }, err => console.log(err));
       

    } else {
      alert("Enter Valid Details.");
    }
  }

}
