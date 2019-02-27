import { Component } from '@angular/core';
import {NotificationsService} from './notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notifications-poc';

  constructor(private notificationService: NotificationsService) {
    this.notificationService.getNotificationsFromApi();
  }



}
