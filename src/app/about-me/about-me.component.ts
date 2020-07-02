import { LoginService } from './../login.service';
import { NavbarService } from './../navbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
title="About Me";
  constructor(public nav:NavbarService,public about:LoginService) { }

  ngOnInit(): void {
    this.nav.show();
  }

}
