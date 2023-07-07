import { Component } from '@angular/core';
import { UserSingletonClass } from './user-singleton-class';
import { Customer } from './Classes/customer';
import { Engineer } from './Classes/engineer';
import { Manager } from './Classes/manager';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedback_System';

  loggedUserObject:any;
  loggedUser:any;
  isAdminLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('adminLogin'))
    {
      this.loggedUserObject = <string>UserSingletonClass.getInstance().loginMap.get('adminLogin');
      this.loggedUser = this.loggedUserObject;
      return 'Y';
    }
    return 'N';
  }
  isCustomerLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('customerLogin'))
    {
      this.loggedUserObject = <Customer>UserSingletonClass.getInstance().loginMap.get('customerLogin');
      this.loggedUser = this.loggedUserObject.userName;
      return 'Y';
    }
    return 'N';
  }
  isEngineerLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('engineerLogin'))
    {
      this.loggedUserObject = <Engineer>UserSingletonClass.getInstance().loginMap.get('engineerLogin');
      this.loggedUser = this.loggedUserObject.userName;
      return 'Y';
    }
    return 'N';
  }
  isManagerLoggedIn():string{
    if(UserSingletonClass.getInstance().loginMap.has('managerLogin'))
    {
      this.loggedUserObject = <Manager>UserSingletonClass.getInstance().loginMap.get('managerLogin');
      this.loggedUser = this.loggedUserObject.userName;
      return 'Y';
    }
    return 'N';
  }
  isAnyoneLoggedIn():string{
    if(this.isAdminLoggedIn()=='N'&&this.isCustomerLoggedIn()=='N'&&this.isEngineerLoggedIn()=='N'&&this.isManagerLoggedIn()=='N'){
        return 'N';
    }
    else{
      return 'Y';
    }
  }
}
