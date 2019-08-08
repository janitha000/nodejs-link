import { Component, OnInit } from '@angular/core';
import {LinkService} from '../../services/link.service';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-single-link',
  templateUrl: './single-link.component.html',
  styleUrls: ['./single-link.component.css']
})
export class SingleLinkComponent implements OnInit {
  name : string;
  characters : any = [] ;
  friends : any = [];
  level2Friends : any = [];

  constructor(private linkService : LinkService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.characters = this.name.split('');
      this.characters[0] = this.name[0].toUpperCase();
      this.name = this.characters.join('');
      console.log(this.name[0]);

      this.linkService.getUserByName(this.name).subscribe(data => {
        this.friends = data;
        console.log(data);
      })

      this.linkService.getLevelFriends(this.name, 2).subscribe(result => {
        this.level2Friends = result;
        console.log(result)
      })
    })  
  }

}
