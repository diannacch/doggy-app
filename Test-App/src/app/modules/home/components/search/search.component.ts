import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { of, Subject, switchMap, takeUntil } from 'rxjs';
import { AutocompleteConfigurations } from 'src/app/shared/models/autocomplete-config';
import { DoggyService } from 'src/app/shared/services/doggy-service.service';
import { FormStateService } from 'src/app/shared/services/form-state.service';
import { GiphyService } from 'src/app/shared/services/giphy-service.service';
import { ResponseData } from '../../../../shared/models/response-data';
import { Gif } from 'src/app/shared/models/gif';
import { FilterStateService } from 'src/app/shared/services/filter-state.service';
import { Dog } from 'src/app/shared/models/dog';
import { SpinnerDialogService } from 'src/app/shared/services/spinner-dialog.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  size: NzButtonSize = 'large';
  @Input() filterControl!: UntypedFormControl;
  @Input() configurations!: AutocompleteConfigurations;
  @Output() executeSearch = new EventEmitter<void>();
  protected _onDestroy$ = new Subject<void>();

  constructor(
    public formStateService: FormStateService,
    private _giphyService: GiphyService,
    private _doggyService: DoggyService,
    private _filterStateService: FilterStateService,
    private _spinner: SpinnerDialogService) { }

  ngOnInit(): void {
    this.restoreCache();
  }

  restoreCache() {
    this._filterStateService.restoreCacheSearches();
    this._filterStateService.restoreCacheFavs();
  }

  search() {
    this._spinner.startSpinner();
    this.executeSearch.emit();
    this._doggyService.getDogByBreed(this.filterControlValue)
      .pipe(
        takeUntil(this._onDestroy$),
        switchMap(result => result.length > 0 ? this._giphyService.searchGifByFilterText(this.filterControlValue) : of(null)))
      .subscribe((result: ResponseData<Gif[]> | null) => {
        if (result != null) {
          this.formStateService.giphyList = result.data;
          this.formStateService.notFound = false;
          this._filterStateService.addSearchesToCache(this.filterControlValue)
        } else {
          this.formStateService.notFound = true;
        }
        this._spinner.closeSpinner();
      });
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  get isFormValid() {
    return this.filterControl.valid;
  }
  get filterControlValue(): string {
    return this.filterControl.value;
  }

  get searchOptions(): Dog[] {
    return this._filterStateService.searchListCache;
  }
}
