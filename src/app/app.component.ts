import {Component, ViewChild} from '@angular/core';
import { Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {ListPage} from '../pages/list/list';
import {TabsPage} from '../pages/tabs/tabs';
import {ActionsheetDemo} from '../pages/actionsheet-demo/actionsheet.demo';
import {AlertsDemo} from '../pages/alerts-demo/alerts.demo';
import {BadgeDemo} from '../pages/badge-demo/badge.demo';
import {ButtonDemo} from '../pages/button-demo/button.demo';
import {CardDemo} from '../pages/card-demo/card.demo';
import {CheckboxDemo} from '../pages/checkbox-demo/checkbox.demo';
import {DatetimeDemo} from '../pages/datetime-demo/datetime.demo';
import {FABSDemo} from '../pages/FABS-demo/FABS.demo';
import {InputDemo} from '../pages/input-demo/input.demo';
import {LoadingDemo} from '../pages/loading-demo/loading.demo';
import {MenusDemo} from '../pages/menus/menus.demo';
import {ModalsDemo} from '../pages/modals/modals.demo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Loading', component: LoadingDemo},
      {title: 'Input', component: InputDemo},
      {title: 'FABS', component: FABSDemo},
      {title: 'Datetime', component: DatetimeDemo},
      {title: 'Checkbox', component: CheckboxDemo},
      {title: 'Card', component: CardDemo},
      {title: 'Button', component: ButtonDemo},
      {title: 'Badge', component: BadgeDemo},
      {title: 'Alerts', component: AlertsDemo},
      {title: 'ActionSheet', component: ActionsheetDemo},
      {title: 'Menus', component: MenusDemo},
      {title: 'Modals', component: ModalsDemo},
      {title: 'Home', component: HomePage},
      {title: 'List', component: ListPage},
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
