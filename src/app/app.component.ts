import {Component} from '@angular/core';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {Platform} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    //
    // var lastTimeBackPress = 0;
    // var timePeriodToExit = 2000;
    //
    // platform.registerBackButtonAction(() => {
    //   // get current active page
    //   let view = this.nav.getActive();
    //   if (view.component.name == "HomePage") {
    //     //Double check to exit app
    //     if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
    //       platform.exitApp(); //Exit from app
    //     } else {
    //       let toast = this.toastCtrl.create({
    //                                           message: 'Press back again to exit App',
    //                                           duration: 3000,
    //                                           position: 'bottom'
    //                                         });
    //       toast.present();
    //       lastTimeBackPress = new Date().getTime();
    //     }
    //   } else {
    //     // go to previous page
    //     this.nav.pop({});
    //   }
    // });
  }



}
