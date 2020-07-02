import { LoginService } from './../login.service';
import { NavbarService } from './../navbar.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
   
  users: any = [];
  
  constructor(public about:LoginService,public nav:NavbarService,private http:HttpClient,private router: Router) { }

  ngOnInit(): void {
    this.nav.show();
      this.http.get('http://localhost:4000/api').subscribe(
        (data: any) => this.users = data,
        err => console.log(err)
    );
  }
  
  deleteUser(userid) {
    var c = confirm('Do you want to Delete the user! ');
    if (c == true) {
      this.http.delete("http://localhost:4000/api/user/delete/" + userid).subscribe(
            (data: any) => this.router.navigate(['users']),                   
            err => console.log(err)
        );
        window.location.reload();
    }
  
}
}

