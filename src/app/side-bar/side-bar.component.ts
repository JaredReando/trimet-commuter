import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgModule } from '@angular/core';

import { AuthService } from '../auth.service';

import { LoginComponent } from '../login/login.component';
import { RecentSearchComponent } from '../recent-search/recent-search.component';

@NgModule({
  declarations: [
    LoginComponent,
    RecentSearchComponent
  ]
})

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  constructor( private authService: AuthService ) {  }

  ngOnInit() { 
    this.authService.user.subscribe( (user) => {
      if (user) { this.user = user; }
      else { this.user = null; }
    });
  }

  @Output() toggleNav = new EventEmitter()
  
  sideBarMessage;
  user;

  closeNav() {
    this.toggleNav.emit();
  }

  messageFromLogin(msg) {
    this.sideBarMessage = msg;

    const autoClearNotification = setInterval(()=>{
      this.sideBarMessage = null;
      clearInterval(autoClearNotification);
    },3000);
  }

}
