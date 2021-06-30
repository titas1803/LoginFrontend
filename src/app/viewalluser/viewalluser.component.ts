import { Component, OnInit } from '@angular/core';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewalluser',
  templateUrl: './viewalluser.component.html',
  styleUrls: ['./viewalluser.component.css']
})
export class ViewalluserComponent implements OnInit {

  users:UserDto[]=[];
  msg?:string
  currentPage:number=1;
  userArray:any[]=[];
  totalPages:number=1;
  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.viewAll().subscribe(data=>{
      console.log(data);
      this.users=data;
      this.users.sort((a,b)=>a.userId-b.userId);
      this.msg=undefined;
      let endrow=this.currentPage*3;
      let startrow=endrow-3;
      this.userArray=this.users.slice(startrow, endrow);
      this.totalPages=Math.ceil(this.users.length/3.0);
    },
    error=>{
      console.log(error);
      this.msg=error.error.msg;
    });
  }

  previous(){
    --this.currentPage;
    let endrow=this.currentPage*3;
    let startrow=endrow-3;
    this.userArray=this.users.slice(startrow, endrow);
  }

  next(){
    ++this.currentPage;
    let endrow=this.currentPage*3;
    let startrow=endrow-3;
    this.userArray=this.users.slice(startrow, endrow);
  }

}
