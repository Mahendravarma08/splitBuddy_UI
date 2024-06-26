import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedSidebarComponent } from './shared-sidebar/shared-sidebar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { GroupsComponent } from './groups/groups.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateGroupComponent } from './create-group/create-group.component';
import { JoinGroupComponent } from './join-group/join-group.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedSidebarComponent,
    GroupsComponent,
    CreateGroupComponent,
    JoinGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
