import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AutocompleteConfigurations } from 'src/app/shared/models/autocomplete-config';
import { DoggyService } from 'src/app/shared/services/doggy-service.service';
import { FormStateService } from 'src/app/shared/services/form-state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  autocompleteConfiguration: AutocompleteConfigurations = <AutocompleteConfigurations>{
    callback: this.getDogs.bind(this),
    dropdownFormatter: (value) => value.name,
    valueProperty: 'name'
  };

  onSearch = false;
  constructor(
    private _formStateService: FormStateService,
    private _dogsService: DoggyService) {

  }

  getDogs(search: string) {
    return this._dogsService.getDogByBreed(search);
  }

  executeSearch() {
    this.onSearch = true;
  }

  get filterControl(): UntypedFormControl {
    return this._formStateService.filter;
  }

  get listElements() {
    return this._formStateService.giphyList;
  }

  get notFound() {
    return this._formStateService.notFound;
  }
}
