import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { Dog } from 'src/app/shared/models/dog';
import { DoggyService } from 'src/app/shared/services/doggy-service.service';
import { SpinnerDialogService } from 'src/app/shared/services/spinner-dialog.service';

@Component({
  selector: 'app-doggy-information',
  templateUrl: './doggy-information.component.html',
  styleUrls: ['./doggy-information.component.scss']
})
export class DoggyInformationComponent implements OnInit, OnDestroy {
  private _weight = 50;
  private _height = 50;
  private _energy!: number;
  private _trainability!: number;
  dogInfo!: Dog;
  protected _onDestroy$ = new Subject<void>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<DoggyInformationComponent>,
    private _dogsService: DoggyService,
    private _spinner: SpinnerDialogService) {

  }
  ngOnInit(): void {
    this._spinner.startSpinner();
    this._dogsService.getDogByBreed(this.data.name)
      .pipe(takeUntil(this._onDestroy$))
      .subscribe(results => {
        if (results.length > 0) {
          this.dogInfo = results[0];
        }
        this._spinner.closeSpinner();
      })
  }

  onCancel() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  get weight() {
    return this.dogInfo?.max_weight_male;
  }

  get height() {
    return this.dogInfo?.max_height_male;
  }
  get energy() {
    return (this.dogInfo.energy * 100) / 5;
  }

  get trainability() {
    return (this.dogInfo.trainability * 100 / 5);
  }

  get isLoading() {
    return this._spinner.isLoading;
  }
}
