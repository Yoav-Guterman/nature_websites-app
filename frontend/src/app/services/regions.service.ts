import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Region } from '../models/regions/region.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAllRegions(): Promise<Region[]> {
    const observable = this.httpClient.get<Region[]>(`${environment.restServerUrl}/regions`)
    const list = firstValueFrom(observable)
    return list
  }
}
