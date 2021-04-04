import { Component, OnInit } from '@angular/core';
import { DashboardTile } from 'src/app/models/DashboardTile';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    constructor() { }

    public dashboardTiles: DashboardTile[] = [{
        name: 'Quote Puller',
        status: 'Run',
        idle: true,
        action: 'console.log("test action")'
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
}
