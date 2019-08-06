import { Component, OnInit } from '@angular/core';
import {LinkService} from '../../services/link.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-link-company',
  templateUrl: './single-link-company.component.html',
  styleUrls: ['./single-link-company.component.css']
})
export class SingleLinkCompanyComponent implements OnInit {
  users : any = [];
  name : string;
  characters : any = [];
  constructor(private service : LinkService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name']
      this.characters = this.name.split('');
      this.characters[0] = this.name[0].toUpperCase();
      this.name = this.characters.join('');
      this.service.getCompanyByName(this.name).subscribe(result => {
        this.users = result;
      })
    })

  }

}
