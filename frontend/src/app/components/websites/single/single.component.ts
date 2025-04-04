import { Component, input, output } from '@angular/core';
import { Website } from '../../../models/websites/website.model';
import { WebsitesService } from '../../../services/websites.service';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})


export class SingleComponent {

  constructor(
    public websitesService: WebsitesService,
  ) { }

  website = input<Website>()
  deletedWebsite = output<string>()

  async deleteMe() {
    try {
      await this.websitesService.remove(this.website()!.id)
      this.deletedWebsite.emit(this.website()!.id)
    } catch (e) {
      alert(e)
    }
  }

}
