import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CartService } from '../services/cart.service';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  public productList:any;
  public filterCategory:any;
  searchKey:string="";
  constructor(private api:ApiService, private cartService:CartService, private router:Router) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
      this.productList.forEach((a:any)=>{
        if(a.category==="women's clothing"|| a.category==="men's clothing"){
          a.category="fashion"
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
    })
    this.cartService.search.subscribe(val=>{
      this.searchKey=val;
    }
      )
  }
  addtocart(item:any){
    this.cartService.addtoCart(item);

  }
  filter(category:string){
    this.filterCategory=this.productList
    .filter((a:any)=>{
      if(a.category==category || category==''){
        return a;
      }
    })

  }
  viewProdDetails(item:any){
    // this.router.navigate(['productDetails']);
    this.router.navigateByUrl('/productDetails', { state: item });
  }

}
