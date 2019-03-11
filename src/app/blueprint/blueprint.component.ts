import {Component, OnDestroy, OnInit} from '@angular/core';
import { AuthService } from '../auth.service';
import { UserSnapshot } from '../models';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-blueprint',
  templateUrl: 'blueprint.component.html',
  styleUrls: ['blueprint.component.scss'],
})
export class BlueprintComponent implements OnDestroy, OnInit{

  Usub:any;
  Usnap:UserSnapshot;
  navList;
  constructor(private auth:AuthService, private router:Router) {
    // Make a quick links section of most used links to shorten user clicks
    this.navList=[
      {
        title: 'Dashboard',
        link: 'dashboard',
      },
      {
        title: 'Directory',
        link: 'directory',
      },
      {
        title: 'Discus',
        link: 'discus',
      },
      {
        title: 'Scheduling/CAS',
        link: 'cas',
      },
      {
        title: 'Athletics',
        link: 'athletics',
      },
      {
        title: 'Medical',
        link: 'medical',
      },
      {
        title: 'Grading/Courses',
        link: 'Grading/Courses',
      },
      {
        title: 'Military',
        link: 'military',
      },
      {
        title: 'Mitchell Hall',
        link: 'food',
      },
    ];
  }

  ngOnInit(){
    this.Usub=this.auth.User.subscribe(
      (next) => this.Usnap=next
    );
  }
logout(){
  this.auth.logout();
}
ngOnDestroy(){
  this.Usub.unsubscribe();
}

}