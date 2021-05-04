export class AnswerResponse {
  // tslint:disable-next-line: variable-name
  answer_id: number;
  name: string;
  is_true: boolean;
}

export class QuizResponse {
  // tslint:disable-next-line: variable-name
  question_id: number;
  name: string;
  answers: AnswerResponse[];
}

export class QuizRequest {
  answer1: number;
  answer2: number;
  answer3: number;
  answer4: number;
  answer5: number;
  answer6: number;
  answer7: number;
  answer8: number;
  answer9: number;
  answer10: number;
}

export class ScoreResponse {
  id: number;
  created_at: string;
  guid: string;
  score: number;
  updadeted_at: string;
}
