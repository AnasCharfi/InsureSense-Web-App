import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import Swal from 'sweetalert2';
import { User } from '../component/login/User';
import { AuthenticationService } from '../services/authentification.service';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    dashboard = document.getElementById('dashboard');   
    currentUser :User = new User();
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         this.currentUser = JSON.parse(localStorage.getItem('currentUser')||'{}');
         console.log("yalla",this.currentUser.id)
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }      







/*
        this.dashboard = document.getElementById('dashboard');   
        console.log(localStorage.getItem('currentUser'));
        console.log('b3enou',this.dashboard);
        if ( this.dashboard != null){
            this.dashboard.hidden = true;
          console.log('bidou',document.getElementById('dashboard'));
        }*/






        // not logged in so redirect to login page with the return url
        Swal.fire({
            title: 'Sorry 🙁',
            text: "You won't be able to see this until you're logged in!",
            icon: 'warning',
            showCancelButton: true,
            showConfirmButton: false,
            cancelButtonColor: '#d33',
            cancelButtonText: 'OK'
          
            
          })
        this.router.navigate(['/component/login']);

        return false;
    }
}