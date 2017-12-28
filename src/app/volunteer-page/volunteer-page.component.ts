import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from '../message.service';


@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css']
})
export class VolunteerPageComponent implements OnInit {

  constructor(public messageService: MessageService,  public router:Router) { }

  edit_profile()
  {
    this.router.navigate(["edit-profile"]);
  }

  ngOnInit() {
  }

}
