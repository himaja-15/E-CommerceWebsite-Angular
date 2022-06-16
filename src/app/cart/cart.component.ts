import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor( private cartService:CartService,private router:Router ) { }
  public product:any=[];
  public grandTotal !:number;


  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartService.removecartItem(item);

  }
  
  emptycart(){
    this.cartService.removeAllCart();
  }
  backToProducts(){
    this.router.navigate(['Products'])
  }
  ToProducts(){
    this.router.navigate(['Products'])

  }
  ToCheckOut(){
    this.router.navigate(['checkout'])

  }

}
