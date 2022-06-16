import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  

  constructor(private authService:AuthService, private router:Router, private fb:FormBuilder) { }
  // registrationForm= new FormGroup(
  //   {
  //     userName:new FormControl(''),
  //     password:new FormControl('')
  //   }
  // );
  // user:any={};
  registrationForm:any=FormGroup;
  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      Email:['rm@bts.com',[Validators.required,Validators.email]],
      password:['namjoon',[Validators.required,Validators.minLength(5)]]
    });
  }
  onSubmit(data:any){
    console.log(data);
    const user=this.authService.authUser(this.registrationForm.value);
    if(user){
      console.log("Log in successfull");
      this.router.navigate(['Products'])
    }
    else{
      console.log("login Failed");
      
    }
  }
  redirectToRegister(){
    this.router.navigate(['register'])
  }


















  
  // onSubmit(){
  //   console.log(this.registrationForm.value);
  //   this.user=Object.assign(this.user,this.registrationForm.value);
  //   this.addUser(this.user);
  //   this.registrationForm.reset();
    
  // }
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


  
  


}
