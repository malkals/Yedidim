import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
public navItems: NavItem[];

  constructor()
   { 
      this.navItems = [
      new NavItem("Home", "home"),
      new NavItem("Purchase", ""),
      new NavItem("About", ""),
      new NavItem("Your account", ""),
     
    ]
   }

}

export class NavItem{
  
  constructor(public text: string, public url: string){

  }
}