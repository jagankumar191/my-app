import { LoginService } from './../login.service';
import { NavbarService } from './../navbar.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, EmailValidator } from "@angular/forms";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  title = "Create New User Page";
  form: FormGroup;
  username: any;
  password: any;
  email: any;
  phone: any;
  role: any;
  createdon: any;

  ngOnInit(): void {
    console.log("this.about.get()"+this.about.get());
    if(this.about.get()){
      this.about.isAdmin();
    }
   
    this.nav.show();
    this.currentDate();
    this.form = new FormGroup({
      'username': new FormControl(this.username, [
        Validators.required,
        Validators.minLength(4)
      ]),
      'password': new FormControl(this.password, [
        Validators.required,
        Validators.minLength(5)
      ]),
      'email': new FormControl(this.email, [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      'phone': new FormControl(this.phone, [
        Validators.required,
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
      'role': new FormControl(this.role, [
        Validators.required
      ]),
      'createdon': new FormControl(this.createdon, [
      ])

    });
  }

  mydate() {
    return new Date();
  }
  currentDate() {
    let date = new Date();
    let todayDate = this.datePipe.transform(date, "MM/dd/yyyy");
    this.createdon=todayDate;
    
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(public about:LoginService,public nav:NavbarService,public fb: FormBuilder, private http: HttpClient, private datePipe: DatePipe) {
    this.form = this.fb.group({
      username: [null],
      password: [null],
      email: [null],
      role: ['Employee'],
      createdon: [this.currentDate()],
      phone: [null]

    })
  }


  submitForm() {
    console.log("Form Validation : " + this.form.valid);
    if (this.form.valid) {
      let formObj = this.form.getRawValue();
      this.form.reset();
      this.http.post('http://localhost:4000/api/create-user', JSON.stringify(formObj), this.httpOptions).subscribe(
        (response) => alert("User Successfully Created"),
        (error) => alert(error+"User Creation failed.")
      )

    } else {
      alert("Enter Valid Details.");
    }
  }
}
