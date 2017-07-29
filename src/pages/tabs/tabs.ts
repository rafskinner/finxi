import { Component } from '@angular/core';

import { BookedPage } from '../booked/booked';
// import { ContactPage } from '../contact/contact';
import { AvailablePage } from '../available/available';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  availableTab = AvailablePage;
  bookedTab = BookedPage;
  // tab3Root = ContactPage;

  constructor() {

  }
}
