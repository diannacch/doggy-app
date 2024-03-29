import { Injectable } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';
import { Gif } from '../models/gif';

@Injectable({
  providedIn: 'root'
})
export class FormStateService {
  filterControl = new UntypedFormControl('', [Validators.required]);
  giphyList: Gif[] = [];
  _notFound = false;

  get filter(): UntypedFormControl {
    return this.filterControl;
  }

  get notFound(): boolean {
    return this._notFound;
  }

  set notFound(val: boolean) {
    this._notFound = val;
  }
}
