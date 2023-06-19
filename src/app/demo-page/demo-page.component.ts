import * as uuid from 'uuid';
import { Component } from '@angular/core';
import { Request } from '../models/remote/textonic/request';
import {Analysis} from "../models/remote/textonic/analysis";
import {Document} from "../models/remote/textonic/document";
@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {
  inputValue: string = '';
  serverResponse: string = '';
  inputError: string = '';

  onSubmit() {
    let value = this.inputValue;
    let doc = new Document();

    value = value.trim();
    if (value.length === 0) {
      this.inputError = "errorMessage";
      return
    }

    let splited = value.split("\n");
    doc.id = uuid.v4();
    doc.sections.push({
      outline: 'headline',
      data: splited[0]
    });
    if (splited.length >= 2)    {
      let body = ''
      for (let i = 1; i < splited.length; i++){
        body = body + splited[i] + "\n"
      }
      doc.sections.push({
        outline: 'body',
        data: body
      })
      this.inputError = body;
    }


    let request : Request = {
      requestId: uuid.v4(),
      process: {
        analysis : {
          steps: [
            { step: '' }
          ]
        }
      },
      documents: [
        doc
      ]
    }
  }
}
