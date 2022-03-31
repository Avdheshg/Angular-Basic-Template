// "./" => V R in "app" folder
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { SuccessAlertComponent } from './successAlert/successAlert.component';
import { WarningAlertComponent } from './warningAlert/warningAlert.component';
import {userNameComponent} from "./dataBinding/dataBinding.component";
import {secretDetailsComponent} from "./directivesAss/directives.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessAlertComponent,
    WarningAlertComponent,
    userNameComponent,
    secretDetailsComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
