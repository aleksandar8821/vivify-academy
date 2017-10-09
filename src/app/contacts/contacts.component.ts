import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  title:string = 'contactss';
  constructor() { 
  	
  		this.title = 'new title';
  	

  }

  ngOnInit() {
  }

}
