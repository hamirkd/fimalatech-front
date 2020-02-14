import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NbLoginComponent, NbAuthService, NbAuthSocialLink } from '@nebular/auth';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  ngOnInit() {
    
  }
}