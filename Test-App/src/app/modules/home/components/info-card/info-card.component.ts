import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DefaultUser } from 'src/app/const/const';
import { Gif } from 'src/app/shared/models/gif';
import { FilterStateService } from 'src/app/shared/services/filter-state.service';
import { DoggyInformationComponent } from '../doggy-information/doggy-information.component';
import { FormStateService } from 'src/app/shared/services/form-state.service';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  @Input() item!: Gif;
  isFav = false;
  constructor(
    private _dialog: MatDialog,
    private _filterStateService: FilterStateService,
    private _formStateService: FormStateService) { }

  ngOnInit(): void {
    this.item.user = this.item.user ?? DefaultUser;
    this.checkFavCache();
  }

  checkFavCache() {
    this.isFav = this._filterStateService.selectedFavsList.some(x => x === this.item.id);
  }

  fav() {
    this.isFav = !this.isFav;
    if (this.isFav) {
      this._filterStateService.addFavIdToCache(this.item.id);
    } else {
      this._filterStateService.removeFavIdToCache(this.item.id);
    }
  }

  showDialog() {
    this._dialog.open(DoggyInformationComponent, {
      data: {
        url: this.item.images.preview_webp.url,
        name: this.filterControlValue
      },
      width: '900px',
      ariaModal: true,
      disableClose: true,
    });
  }

  get iconType() {
    return this.isFav ? 'favorite' : 'favorite_border';
  }

  get filterControlValue(): string {
    return this._formStateService.filter.value;
  }
}
