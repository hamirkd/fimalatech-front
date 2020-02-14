import { Component, OnInit } from '@angular/core';
import { NbLogoutComponent, NbAuthResult } from '@nebular/auth';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent extends NbLogoutComponent implements OnInit {

  
  ngOnInit() {
    this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay")
    this.strategy=this.getConfigValue("forms.logout.strategy")
     this.logout(this.strategy);
  }

  logout(strategy:string){
    this.service.logout(strategy).subscribe((result:NbAuthResult)=>{
      const redirect = result.getRedirect();
      if(redirect){
        setTimeout(()=>{
          return this.router.navigateByUrl('auth/login');
        },this.redirectDelay)
      }
    })
  }

}
