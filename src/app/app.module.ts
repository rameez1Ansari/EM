import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegFormComponent } from './component/registration/reg-form/reg-form.component';
import { LogInComponent } from './component/login/log-in/log-in.component';
import { BookEventComponent } from './user/book-event/book-event.component';
import { VenuesComponent } from './user/venues/venues.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AddEventComponent } from './orgainiser/add-event/add-event.component';
import { ManageVenueComponent } from './orgainiser/manage-venue/manage-venue.component';
import { OrgProfileComponent } from './orgainiser/org-profile/org-profile.component';
import { ViewBookingsComponent } from './orgainiser/view-bookings/view-bookings.component';
import { AdminViewBookingsComponent } from './admin/admin-view-bookings/admin-view-bookings.component';
import { VenuesDetailsComponent } from './admin/venues-details/venues-details.component';
import { ViewUsersComponent } from './admin/view-users/view-users.component';
import { ViewOrgainisersComponent } from './admin/view-orgainisers/view-orgainisers.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    RegFormComponent,
    LogInComponent,
    BookEventComponent,
    VenuesComponent,
    ProfileComponent,
    AddEventComponent,
    ManageVenueComponent,
    OrgProfileComponent,
    ViewBookingsComponent,
    AdminViewBookingsComponent,
    VenuesDetailsComponent,
    ViewUsersComponent,
    ViewOrgainisersComponent,
    NavBarComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
