import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: "./servers.component.html",
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server created!";
  serverName = 'TestServer';
  serverCreated = false;
  servers = ["Testserver 1", "Testserver 2"];

  constructor() {
    setTimeout( () => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  // this will ignite when V will click on the button
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "New Server created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; 
  }
}
