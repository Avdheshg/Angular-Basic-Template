
import {Component} from "@angular/core";

@Component({
    selector: "app-secret",
    templateUrl: "directives.component.html",
    styles: [`
        .greater {
            color: white;
            background-color: blue;
        }
    `]
})

export class secretDetailsComponent {

    activeStatus = false;
    counter: number = 0;
    outputArray: Date[] = [];
    showSecret = false;

    toggleActiveStatus() {
        return this.activeStatus = !this.activeStatus;
    }

    onToggleDetails() {
        this.showSecret = !this.showSecret;
        // this.counter++;
        // this.outputArray.push(this.counter);
        this.outputArray.push(new Date());
        console.log(this.counter);
    }
}








































