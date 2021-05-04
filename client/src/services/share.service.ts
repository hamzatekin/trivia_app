import { Injectable } from '@angular/core';
import { ScoreResponse } from 'src/app/landing/quiz/quiz.dto';

@Injectable()
export class ShareService {
  private categoryId = null;
  private quizzes = [];
  private score = new ScoreResponse();

  setData(categoryId: number) {
    this.categoryId = categoryId;
  }

  setscore(data: ScoreResponse) {
    this.score = data;
  }
  getScore() {
    return this.score;
  }
  setQuiz(quiz: any) {
    this.quizzes = quiz;
  }

  getQuiz() {
    return this.quizzes;
  }

  getData(): any {
    return this.categoryId;
  }
}
