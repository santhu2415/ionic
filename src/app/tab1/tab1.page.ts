import { Component } from '@angular/core';
import { logging } from 'selenium-webdriver';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}
  login(){

    this.router.navigate(['/mainpage'])
    }
  
}
