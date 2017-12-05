import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})
export class RequestHelpComponent implements OnInit {
  city = ['','ירושלים', 'תל-אביב', 'חיפה','נתניה','אשדוד'];
  constructor() { }

  ngOnInit() {
  }

}
