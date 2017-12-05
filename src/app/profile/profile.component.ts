import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  city = ['','ירושלים', 'תל-אביב', 'חיפה','נתניה','אשדוד'];
  constructor() { }

  ngOnInit() {
  }

}
