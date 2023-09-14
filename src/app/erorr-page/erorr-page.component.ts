import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-erorr-page',
  templateUrl: './erorr-page.component.html',
  styleUrls: ['./erorr-page.component.css']
})
export class ErorrPageComponent implements OnInit {
  erorrMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.erorrMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(
      (data: Data) => {
        this.erorrMessage = data['message']
      }
    );
  }

}
