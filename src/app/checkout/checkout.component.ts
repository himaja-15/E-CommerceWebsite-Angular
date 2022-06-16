import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public totalItem:any;
  constructor(private router:Router,private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()

    .subscribe(res=>{

      this.totalItem = res.length;



    })
  }
  backToProducts(){
    this.router.navigate(['Products']);
  }
}
