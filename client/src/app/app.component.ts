import { AfterViewChecked } from '@angular/core';
import { ChangeDetectorRef, Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewChecked {
  environment = environment;

  constructor(private cd: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.cd.detectChanges();
  }
}
