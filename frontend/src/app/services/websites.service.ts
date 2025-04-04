import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Website } from '../models/websites/website.model';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Draft } from '../models/websites/draft.model';

@Injectable({
  providedIn: 'root'
})
export class WebsitesService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getAllWebsites(): Promise<Website[]> {
    const observable = this.httpClient.get<Website[]>(`${environment.restServerUrl}/websites`)
    const list = firstValueFrom(observable)
    return list
  }

  async getWebsitesPerRegion(regionId: string): Promise<Website[]> {
    const observable = this.httpClient.get<Website[]>(`${environment.restServerUrl}/websites/region/${regionId}`)
    const list = firstValueFrom(observable)
    return list
  }

  async create(draft: Draft): Promise<Website> {
    const observable = this.httpClient.post<Website>(`${environment.restServerUrl}/websites`, draft)
    const newWebsite = firstValueFrom(observable)
    return newWebsite
  }

  async remove(id: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/websites/${id}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
