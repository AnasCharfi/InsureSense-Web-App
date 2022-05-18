import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../services/authentification.service';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  hoes = true;
  element = document.getElementById('sidebarnav-main');

  main = document.getElementById('page-wrapper')  ;


  

  sideToggle() {

    this.element = document.getElementById('sidebarnav-main');
    this.main = document.getElementById('page-wrapper')  ;


    if (this.hoes == true && this.element != null) {
      console.log(this.main);
      if (this.main != null){
      this.main.style.marginLeft = "0px";

      
      };
      this.element.hidden = true;
      this.hoes = false;
    }
    else {
      if (this.element) {
        if (this.main != null){
          this.main.style.marginLeft = "250px";
    
          
          };

        this.element.hidden = false;
        this.hoes = true;
      }
    }

  }

  autoRenew = false;

  onChange() {

    
    if (this.autoRenew == true) {
      this.autoRenew = false;
      this.sideToggle()
    }
    else {
      this.autoRenew = true;
      this.sideToggle()
    }

  }

  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  constructor(private modalService: NgbModal,         private router: Router,       private authenticationService: AuthenticationService) {
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-warning',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/user1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/user2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/user4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'Español',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'Français',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]

  ngAfterViewInit() { 

  }
  logout() {
    
    localStorage.clear();
    window.location.reload();
    this.router.navigate(["/component/login"]);
    
  }
}
