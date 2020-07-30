import { Component, OnInit } from '@angular/core';
import { DashboardTile } from 'src/app/models/DashboardTile';
import { QuotePullerService } from 'src/app/services/quote-puller.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor(private quotePuller: QuotePullerService) { }

    public dashboardTiles: DashboardTile[] = [{
        name: 'Quote Puller',
        status: 'Run',
        idle: true,
        action: this.execQuotePuller
    }, {
        name: 'Gnucash Backup',
        status: 'Run',
        idle: true,
        action: 'console.log("test action")'
    }, {
        name: 'Connect Bluetooth',
        status: 'Test status',
        idle: true,
        action: 'console.log("test action")'
    }, {
        name: 'Network Speed',
        status: 'Test status',
        idle: true,
        action: 'console.log("test action")'
    }];

    ngOnInit(): void {
    }

    private execQuotePuller(tile: DashboardTile): void {
        if (tile.idle) {
            console.log(this.quotePuller);
            this.quotePuller.execQuotePuller().subscribe(
                msg => console.log('message received: ' + msg),
                // Called whenever there is a message from the server
                err => console.log(err),
                // Called if WebSocket API signals some kind of error
                () => console.log('complete')
                // Called when connection is closed (for whatever reason)
            );
        }
    }
}
