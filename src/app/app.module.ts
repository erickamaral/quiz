import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { QuizModule } from './quiz/quiz.module';
import { RankModule } from './rank/rank.module';

const modules = [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    SharedModule,
    QuizModule,
    RankModule
];
const components = [AppComponent];


@NgModule({
  declarations: [...components],
  imports: [...modules],
  providers: [],
  bootstrap: [...components]
})
export class AppModule { }
