import { Component, OnInit } from '@angular/core';
import { RandomproductsService } from 'src/app/service/randomproducts.service';
import { Randomproducts } from 'src/app/models/randomproducts';
import { take, takeUntil } from 'rxjs';
@Component({
  selector: 'app-randomproducts',
  templateUrl: './randomproducts.component.html',
  styleUrls: ['./randomproducts.component.scss']
})
export class RandomproductsComponent implements OnInit {
  randomProductsList: Randomproducts[] = [];
  constructor(private randomProductsService: RandomproductsService){

  }

  ngOnInit(): void {
    this.randomProducts();
  }

  randomProducts(){
    this.randomProductsService.getRandomProducts()
    .pipe(take(1))
    .subscribe(res => {
      this.randomProductsList = res;
      console.log(res);
    }, err => {
      console.debug(err);
    })
  }
}
