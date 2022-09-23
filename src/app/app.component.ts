import { Component } from '@angular/core';
import { StocksService, StockInterface } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Stock Tracker';

  stocks: Array<StockInterface>;

  constructor(service: StocksService) {
    this.stocks = [];
    service.load(['MSFT', "AMZN",'NFLX']).subscribe(stocks => {
      this.stocks = stocks;
    });

  }
}
