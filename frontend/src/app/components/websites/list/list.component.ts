// list.component.ts
import { Component, OnInit, signal } from '@angular/core';
import { WebsitesService } from '../../../services/websites.service';
import { RegionsService } from '../../../services/regions.service';
import { Website } from '../../../models/websites/website.model';
import { Region } from '../../../models/regions/region.model';
import { SingleComponent } from "../single/single.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  imports: [SingleComponent]
})
export class ListComponent implements OnInit {
  websites = signal<Website[]>([]);
  regions = signal<Region[]>([]);

  constructor(
    public websiteService: WebsitesService,
    public regionsService: RegionsService
  ) { }

  async ngOnInit(): Promise<void> {
    // Load only regions when component initializes
    const regionsList = await this.regionsService.getAllRegions();
    this.regions.set(regionsList);
  }

  async selectRegion(event: Event): Promise<void> {
    const regionId = (event.target as HTMLSelectElement).value;

    if (regionId) {
      const filteredWebsites = await this.websiteService.getWebsitesPerRegion(regionId);
      this.websites.set(filteredWebsites);
    } else {
      this.websites.set([]);
    }
  }

  removeWebsite(id: string) {
    this.websites.set(this.websites().filter(website => website.id !== id))
  }
}