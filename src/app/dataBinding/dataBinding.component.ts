
import {Component} from "@angular/core";

@Component({
    selector: "app-username",
    templateUrl: "databinding.component.html",
})

export class userNameComponent {
    userName = "";
    haveUserName = false;

    // if (userName !== "") {
    //     haveUserName = true;
    // }

    // onUserNameUpdate(event: Event) {
    //     this.userName = (<HTMLInputElement>event.target).value;
    // }

    onclickResetUserName() {
        this.userName = "";
    }
}