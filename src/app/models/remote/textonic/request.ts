import {Process} from "./process";
import {Document} from "./document";

export class Request {
  requestId: string = '';
  process: Process = new Process();
  documents: Document[] = [];
}
