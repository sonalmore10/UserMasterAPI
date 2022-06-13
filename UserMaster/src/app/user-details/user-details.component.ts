import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../shared/user-details.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  constructor(public service : UserDetailsService) { }

  ngOnInit() {
    this.service.getUserDetailsList();
  }

}
