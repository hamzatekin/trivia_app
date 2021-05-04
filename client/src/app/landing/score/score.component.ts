import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  shareLink: string;
  score: number;
  constructor(
    private router: ActivatedRoute,
    private httpService: HttpService
  ) {}

  ngOnInit() {
    console.log('init');
    this.router.paramMap.subscribe((res) => {
      if (res['params']['id']) {
        let id = res['params']['id'];
        environment.isLoading = true;
        this.httpService
          .nativeGet(environment.api.endpoint, 'score/' + id + '/')
          .toPromise()
          .then((res) => {
            this.score = res.score;
            this.shareLink = 'http://localhost:4200/score/' + res.guid + '/';
            environment.isLoading = false;
          })
          .catch((err) => {
            environment.isLoading = false;
          });
      }
    });
  }
}
