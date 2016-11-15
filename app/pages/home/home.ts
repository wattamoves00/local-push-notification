import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';


@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

    LocalNotifications.on('click', (notification, state) => {
      alert(notification.id + " was clicked");
    })

  }

  scheduleNotification() {
    LocalNotifications.schedule({
      id: 1,
      text: "Single Notification"
    })
  }
}
