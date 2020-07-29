import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
    declarations: [
        AppComponent,
        DashboardTileComponent,
        NavBarComponent,
        DashboardComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
