import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import DataSource from 'devextreme/data/data_source';
import { environment } from 'src/environments/environment';
import { HttpService } from 'src/services/http.service';
import { ShareService } from 'src/services/share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categoryId: number;
  username: string;
  categories = [];

  constructor(
    private httpService: HttpService,
    private router: Router,
    private sharingService: ShareService
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  startQuiz = async () => {
    if (this.categoryId) {
      this.sharingService.setData(this.categoryId);
    }
    await this.router.navigate(['quiz']);
  };

  getCategories = () => {
    environment.isLoading = true;
    this.httpService
      .nativeGet(environment.api.endpoint, 'category/')
      .toPromise()
      .then((res) => {
        this.categories = res;
        environment.isLoading = false;
      })
      .catch((err) => {
        this.categories = null;
        environment.isLoading = false;
      });
  };
}
