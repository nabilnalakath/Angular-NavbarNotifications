import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NotificationsService} from '../notifications.service';
import {NotificationsModel} from '../notifications-model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentRoute;
  notificationResult: NotificationsModel;

  notificationEnabled: boolean;

  notifications: NotificationsModel[];

  constructor(private router: Router, private notificationsService: NotificationsService) {



    this.router.events.subscribe((res) => {

      this.currentRoute = this.router.url.split('/')[1];
      if (this.currentRoute) {

        this.getNotificationForPage(this.currentRoute);
      }

    });


  }

  ngOnInit() {
  }

  getNotificationsList() {

    this.notifications = this.notificationsService.getNotifications();
    console.log(this.notifications);

  }

  getNotificationForPage(pageName) {


    this.notificationResult = this.notificationsService.getNotificationsForPage(pageName);




    this.notificationEnabled = this.notificationResult.enabled;

  }




}
