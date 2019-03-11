import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../data.service';
import { Account } from '../models';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, OnDestroy {

  constructor(
    private route:ActivatedRoute,
    private router:Router,
    private data:DataService,
    ){}

  acct:Account;
  p:any;

  ngOnInit() {
      this.p=this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.data.getUser(params.get('id')))
    );
    this.p.subscribe((x) => {this.acct=x;}, (err) => console.log(err), () => console.log('Got Account'))
  }
  ngOnDestroy(){
    this.p.unsubscribe();
  }
  save(){
  this.data.putUser(this.acct).subscribe((x) => {this.acct=x;});
  }
  
  haveData():boolean{
    if ((typeof(this.acct) == undefined) || (this.acct == null)){
      return false;
    }else{
      return true;
    }

  }

}
