import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  public images : string[];
  public index: number;
  public urlImage: string;
  

  constructor() {
  this.index = 0;
    this.images = [
      "assets/a.png",
      "assets/b.png",
      "assets/c.png"
    ];
     
    this.urlImage = this.image;
    setInterval(() => {
      this.urlImage = this.image;
    }, 2000)

    
    
  }

   public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }

 

  ngOnInit() {
  }

}
