import { Component, Input, HostListener, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { DashboardTile } from 'src/app/models/DashboardTile';

@Component({
    selector: 'app-dashboard-tile',
    templateUrl: './dashboard-tile.component.html',
    styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements AfterViewInit {

    constructor() { }

    @Input() tile: DashboardTile;
    @ViewChild('tileContainer') tileContainer: ElementRef;

    ngAfterViewInit(): void {
        this.setElementHeightWidthEqual();
    }

    @HostListener('window:resize', ['$event'])
    setElementHeightWidthEqual(): void {
        const el = (this.tileContainer.nativeElement as HTMLElement);

        el.style.height = `${el.clientWidth.toString()}px`;
    }
}
