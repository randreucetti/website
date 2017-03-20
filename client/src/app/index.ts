import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {routing} from "./routes";
import {HelloComponent} from "./hello";
import {HomeComponent} from "./components/home/home.component";
import {HeaderComponent} from "./components/header/header.component";
import {AppComponent} from "./components/app/app.component";

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
