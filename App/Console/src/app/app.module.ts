import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ListgamesPage } from '../pages/listgames/listgames';
import { ConsolesPage} from '../pages/consoles/consoles';
import { CrudPage} from '../pages/crud/crud';
import { Crud1Page} from '../pages/crud1/crud1';
import { Crud2Page} from '../pages/crud2/crud2';
import { PreferencePage} from '../pages/preference/preference';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConsolesservicesProvider } from '../providers/consolesservices/consolesservices';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConsolesPage,
    CrudPage,
    Crud1Page,
    Crud2Page,
    ListgamesPage,
    PreferencePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConsolesPage,
    CrudPage,
    Crud1Page,
    Crud2Page,
    ListgamesPage,
    PreferencePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ConsolesservicesProvider
  ]
})
export class AppModule {}
