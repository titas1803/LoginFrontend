import { Component, OnInit } from '@angular/core';
import { UserDto } from '../user-dto';
import { UserService } from '../user.service';

@Component({
  selector: 'app-viewuserby-name',
  templateUrl: './viewuserby-name.component.html',
  styleUrls: ['./viewuserby-name.component.css']
})
export class ViewuserbyNameComponent implements OnInit {

  userName:string;
  users:UserDto[]=[];
  msg?:string
  currentPage:number=1;
  userArray:any[]=[];
  totalPages:number=1;
  constructor(public userService:UserService) { }

  ngOnInit() {   
  }

  viewbyname(){
    this.userService.viewbyname(this.userName).subscribe(data=>{
      console.log(data);
      this.users=data;
      this.users.sort((a,b)=>a.userName.localeCompare(b.userName));
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
