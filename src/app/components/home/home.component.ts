import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  
  ngOnInit(): void {
  }

  constructor(private router: Router){}

  goWendding(){

    this.router.navigateByUrl(`/boda`);    
  }

  goBirthday(){

    this.router.navigateByUrl(`/xvcumpleaños`);
  }

}
