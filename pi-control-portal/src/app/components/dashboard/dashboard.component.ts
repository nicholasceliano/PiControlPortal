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
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }, {
        name: 'Test Tile',
        status: 'Test status',
        action: 'console.log("test action")'
    }];

    ngOnInit(): void {
    }

}
