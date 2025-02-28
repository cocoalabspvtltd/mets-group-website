import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefreshService {

  private readonly refreshKey = 'pageRefreshed';

  hasPageRefreshed(): boolean {
    return sessionStorage.getItem(this.refreshKey) === 'true';
  }

  setPageRefreshed(): void {
    sessionStorage.setItem(this.refreshKey, 'true');
  }
}