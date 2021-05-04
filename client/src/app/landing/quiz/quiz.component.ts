import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { shuffle } from 'src/helpers/utils';
import { confirm } from 'devextreme/ui/dialog';
import { HttpService } from 'src/services/http.service';
import { ShareService } from 'src/services/share.service';
import { QuizRequest, QuizResponse, ScoreResponse } from './quiz.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  categoryId: number;
  abc;
  quizes: QuizResponse[] = [];
  quizRequest = new QuizRequest();
  scorePopup = false;
  shareLink: string;
  score: number;
  constructor(
    private sharingService: ShareService,
    private httpService: HttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.categoryId = this.sharingService.getData();
    this.getQuiz();
  }

  getQuiz = () => {
    environment.isLoading = true;
    this.httpService
      .nativeGet(
        environment.api.endpoint,
        this.categoryId
          ? `quiz/start?categoryId=${this.categoryId}`
          : 'quiz/start'
      )
      .toPromise()
      .then((res: QuizResponse[]) => {
        res.forEach((element) => {
          shuffle(element.answers);
        });
        this.quizes = res;
        environment.isLoading = false;
      })
      .catch((err) => {
        environment.isLoading = false;
        this.quizes = [];
      });
  };

  finishQuiz = () => {
    let toGo = [];
    for (const [key, value] of Object.entries(this.quizRequest)) {
      toGo.push(value);
    }
    confirm('Are you sure you want to finish the quiz?', 'Confirmation').then(
      (res) => {
        if (res) {
          environment.isLoading = true;
          this.httpService
            .nativePost(environment.api.endpoint, 'quiz/finish/', {
              answers: toGo,
            })
            .toPromise()
            .then((res: ScoreResponse) => {
              if (res.guid) {
                debugger;
                this.router.navigate(['score/', res.guid]);
              }
              environment.isLoading = false;
            })
            .catch((err) => {
              environment.isLoading = false;
            });
        }
      }
    );
  };

  clearPopup = () => {
    this.score = 0;
    this.shareLink = '';
  };
}
