import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
import { landingRoutes } from './langing.routing';
import { QuizComponent } from './quiz/quiz.component';
import { ShareService } from 'src/services/share.service';
import { ScoreComponent } from './score/score.component';

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(landingRoutes)],
  declarations: [HomeComponent, QuizComponent, ScoreComponent],
  providers: [ShareService],
})
export class LandingModule {}
