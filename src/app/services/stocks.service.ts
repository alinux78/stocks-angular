import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { EMPTY } from 'rxjs';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR', 'MSFT'];

let service: string = 'https://angular2-in-action-api.herokuapp.com';

export interface StockInterface {
	symbol: string;
	lastTradePriceOnly: number;
	change: number;
	changeInPercent: number;
}


@Injectable({
	providedIn: 'root'
})
export class StocksService {

	constructor(private http: HttpClient) {}

	get() {
		return stocks.slice();
	}

	add(stock: string) {
		stocks.push(stock);
		return this.get();
	}

	remove(stock: string) {
		stocks.splice(stocks.indexOf(stock), 1);
		return this.get();
	}

	load(symbols: string[]) {
		if (symbols) {
			let url = service + '/stocks/snapshot?symbols=' + symbols.join();
			return this.http.get<Array<StockInterface>>(url);
		}
		return EMPTY;
	}
}
