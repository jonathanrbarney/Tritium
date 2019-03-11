import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-athletics',
  templateUrl: './athletics.component.html',
  styleUrls: ['./athletics.component.scss']
})
export class AthleticsComponent implements OnInit {
  role;
  constructor(private data:DataService, private auth:AuthService) { 
    auth.User.subscribe(
      (x) => this.role=x.account_type
    );
  }

  ngOnInit() {
    console.log(this.role)
  }

}
