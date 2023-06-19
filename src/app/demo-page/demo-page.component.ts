import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {
  inputValue: string = '';
  serverResponse: string = '';

  onSubmit() {
    this.serverResponse = this.inputValue;
  }
}
