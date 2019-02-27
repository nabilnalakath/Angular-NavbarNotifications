import { Injectable } from '@angular/core';






import {NotificationsModel} from './notifications-model';
import {HttpClient} from '@angular/common/http';
import {RestapiService} from './restapi.service';
import {Notifications} from './notifications-data';


@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  Notifications: any;


  constructor(private http: HttpClient, private apiService: RestapiService ) {

  }


  getNotificationsFromApi() {
    this.apiService.getConfig()
      .subscribe((data) => {
      this.Notifications = data ;
      });


  }



  getNotifications(): NotificationsModel[] {
    return this.Notifications;
  }

  getNotificationsForPage(pageName: string): NotificationsModel {
    return this.Notifications.find((notification) => notification.page === pageName);

  }






}
