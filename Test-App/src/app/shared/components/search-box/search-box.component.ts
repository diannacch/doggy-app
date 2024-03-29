import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { AutocompleteConfigurations } from '../../models/autocomplete-config';
import { debounceTime, filter, of, Subject, switchMap, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Input() options!: any[];
  @Input() control!: UntypedFormControl;
  @Input() configurations?: AutocompleteConfigurations = <AutocompleteConfigurations>{
    dropdownFormatter: (value) => value.name,
    valueGetter: (value: any) => value.name
  };
  isLoading = false;
  protected _onDestroy$ = new Subject<void>();

  ngOnInit(): void {
    this.subscribeToChanges();
  }

  subscribeToChanges() {
    this.control.valueChanges
      .pipe(
        filter((search) => !!search && typeof search == 'string'),
        tap(() => {
          this.isLoading = true;
        }),
        debounceTime(1000),
        takeUntil(this._onDestroy$),
        switchMap((search) => typeof this.configurations?.callback === 'function' ? this.configurations.callback(search) : of([])))
      .subscribe((results: any[]) => {
        this.isLoading = false
        if (results.length > 0) {
          this.options = results;
        }
      });
  }
  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
