import { Component, OnInit } from '@angular/core';
import { LinkService } from '../../services/link.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-link-home',
  templateUrl: './link-home.component.html',
  styleUrls: ['./link-home.component.css']
})
export class LinkHomeComponent implements OnInit {
  users: any;
  companies: any;
  constructor(private linkService: LinkService, private router: Router) { }

  ngOnInit() {
    this.linkService.getUsers().subscribe(result => {
      this.users = result;
    })

    this.linkService.getCompanies().subscribe(result => {
      this.companies = result;
    })
  }

  onFriendClick(friend) {
    this.router.navigate(['link/user/', friend.name])
  }

  onCompanyClick(company){
    console.log(company)
    this.router.navigate(['link/company/', company])
  }
}
