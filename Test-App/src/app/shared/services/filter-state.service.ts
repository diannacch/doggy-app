import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { Dog } from '../models/dog';

@Injectable({
  providedIn: 'root'
})
export class FilterStateService {
  selectedSearchesList: string[] = [];
  selectedFavsList: string[] = [];
  searchListCache: Dog[] = [];
  constructor(private _cacheService: CacheService) { }

  restoreCacheSearches() {
    const cachedSelectedSearches = this._cacheService.getItem<string[]>('selectedSearches') ?? [];
    if (cachedSelectedSearches.length > 0) {
      this.searchListCache = cachedSelectedSearches.map(x => <Dog>{ name: x });
    }
  }

  addSearchesToCache(search: string) {
    this.selectedSearchesList = this._cacheService.getItem<string[]>('selectedSearches') ?? [];
    if (this.selectedSearchesList.length == 0) {
      this.selectedSearchesList?.push(search)
    } else {
      const value = this.selectedSearchesList.find(x => x === search);
      if (!value) {
        this.selectedSearchesList.push(search)
      }
    }
    this._cacheService.setItem('selectedSearches', this.selectedSearchesList);
  }

  addFavIdToCache(id: string) {
    this.selectedFavsList = this._cacheService.getItem<string[]>('selectedFavs') ?? [];
    if (this.selectedFavsList.length == 0) {
      this.selectedFavsList?.push(id)
    } else {
      const value = this.selectedFavsList.find(x => x === id);
      if (!value) {
        this.selectedFavsList.push(id)
      }
    }
    this._cacheService.setItem('selectedFavs', this.selectedFavsList);
  }

  removeFavIdToCache(id: string) {
    this.selectedFavsList = this._cacheService.getItem<string[]>('selectedFavs') ?? [];
    if (this.selectedFavsList.length > 0) {
      const filteredItems = this.selectedFavsList.filter((value) => value !== id);
      this._cacheService.setItem('selectedFavs', filteredItems);
    }
  }

  restoreCacheFavs() {
    const cachedSelectedFavs = this._cacheService.getItem<string[]>('selectedFavs') ?? [];
    if (cachedSelectedFavs.length > 0) {
      this.selectedFavsList = cachedSelectedFavs;
    }
  }
}
