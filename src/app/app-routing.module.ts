import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import {RankComponent} from './rank/rank.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'quiz',
        component: QuizComponent
    },
    {
        path: 'rank',
        component: RankComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
