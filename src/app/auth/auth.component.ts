import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NotificationService } from '../notification.service';

export class Passport {}

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
credentials:any ={};
next:string='';

constructor(
  private auth: AuthService,
  private router: Router,
  private route: ActivatedRoute,
  private readonly notify: NotificationService) {}

  ngOnInit() {
    this.credentials.username='';
    this.credentials.password='';
    this.route.queryParams
    .subscribe(params => this.next = params['next'] || '');
    this.auth.logout()
  }

  login(){
    console.log()
    this.auth.login(this.credentials.username,this.credentials.password).subscribe(
      (user) => {},
      (err) => {console.log(err);
        this.notify.error("Invalid Credentials")},
      () => {
        this.router.navigateByUrl(this.next);
      }
    )
    }
  }