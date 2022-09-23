import { Component, Input } from '@angular/core';
import { StockInterface } from 'src/app/services/stocks.service';

@Component({
  selector: 'summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent {
  @Input() stock: any;

  isNegative() {
    return (this.stock && this.stock.change < 0);     
  }     

  isPositive() {
    return (this.stock && this.stock.change > 0);     
  }     

  constructor() { 
  }

  ngOnInit(): void {
  }

}
