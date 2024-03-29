import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  
  setItem(key: string, value: any) {
    if (![undefined, null].includes(value)) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }

  getItem<T>(key: string): T | undefined {

    const item = localStorage.getItem(key);
    let parsedItem!: T;

    if (item !== 'undefined' && item !== null) {
      parsedItem = JSON.parse(item);
    }

    return parsedItem;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
