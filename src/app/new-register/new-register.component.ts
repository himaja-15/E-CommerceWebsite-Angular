import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-new-register',
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {


  constructor(private fb:FormBuilder, private router:Router,private userService:UserService) { }
  
  register:any=FormGroup;
  user:any={};

  ngOnInit(): void {
    this.register = this.fb.group({
      userName:['',[Validators.required]],
      Email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]]
    });
  }
  onSubmit(){
    console.log(this.register.value)
    this.user=Object.assign(this.user,this.register.value);
    this.userService.addUser(this.user);
    this.register.reset();
    
  }
  registerSubmit(data:any){
    console.log(data)
    this.user=Object.assign(this.user,data);
    this.userService.addUser(this.user);
    this.register.reset();
    this.router.navigate(['header']);
  }
 
    // addUser(user:any){
    //   let users=[];
    //   if(localStorage.getItem('Users')){
    //     users=JSON.parse(localStorage.getItem('Users')as string);
    //     users=[user,...users];
    //   }
    //   else{
    //     users=[user];
    //   }
    //   localStorage.setItem('Users',JSON.stringify(this.user));
    // }
    redirectToLogin(){
      this.router.navigate(['login'])
    }
}

