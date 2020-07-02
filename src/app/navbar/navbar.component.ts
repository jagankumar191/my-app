import { LoginService } from './../login.service';
import { NavbarService } from './../navbar.service';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public nav:NavbarService,public about:LoginService) { }

  ngOnInit(): void {
  
  }
  
}
