import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './highlight.directive';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule} from '@angular/router'

const my_route: Routes = [
  {path: "", component:HomeComponent},
  {path: "calculator", component:CalculatorComponent},
  {path: "user", component:UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    CalculatorComponent,
    UserComponent,
    HighlightDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(my_route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
