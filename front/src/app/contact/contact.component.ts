import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { delay } from 'rxjs/operators';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient,private router : Router) { }


  ngOnInit(): void {
  }
  onSubmit(contactForm: NgForm) {


    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/mrgrakjk',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            
            console.log(response);
            Swal.fire({
              title: '<strong>Welcome to <u>InsureSense</u> by BluBerry</strong>',
              icon: 'success',
              html:
                'Your email was sent, we\'ll do our best to answer it within the next 24 hours',
        
        
              confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Great!',
              confirmButtonAriaLabel: 'Thumbs up, great!'
            });

            this.router.navigate(['/about']);
          }
        );
    }
  }

}
