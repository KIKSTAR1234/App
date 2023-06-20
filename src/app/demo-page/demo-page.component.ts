import { Component } from '@angular/core';
import { Request } from '../models/remote/textonic/request';
import { Analysis } from "../models/remote/textonic/analysis";
import { Document } from "../models/remote/textonic/document";
import * as uuid from 'uuid';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from "rxjs";

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.css']
})
export class DemoPageComponent {
  inputValue: string = '';
  serverResponse: string = '';
  inputError: string = '';
  naslov: string = "";
  text: string = '';

  constructor(private http: HttpClient) {
  }

  getTextonicResponse(request: Request): Observable<HttpResponse<any>> {
    const url: string = 'https://textonic.io/api/public/ml/process';
    const headers: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer fab30336-fea1-42ca-88bc-f93ec26b1005" -d'
    });
    return this.http.post(
      url, request, { observe: 'response', headers: headers });
  }


  makeRestRequest(request: Request) {
    this.getTextonicResponse(request).subscribe(resp => {
      console.log(resp);
    })
  }

  onSubmit() {
    let value = this.inputValue;
    let doc = new Document();
    this.inputError = "";
    this.naslov = "";
    this.text = "";
    value = value.trim();
    if (value.length === 0) {
      this.inputError = "errorMessage";
      return;
    }

    let splited = value.split("\n");
    doc.id = uuid.v4();
    doc.sections.push({
      outline: 'headline',
      data: splited[0]
    });
    this.naslov = splited[0];
    if (splited.length >= 2) {
      let body = '';
      for (let i = 1; i < splited.length; i++) {
        body = body + splited[i] + "\n";
      }
      doc.sections.push({
        outline: 'body',
        data: body
      });
      this.text = body;
    }

    let request: Request = {
      requestId: uuid.v4(),
      process: {
        analysis: {
          steps: [
            { step: '' }
          ]
        }
      },
      documents: [
        doc
      ]
    };

    this.makeRestRequest(request);
  }
}
