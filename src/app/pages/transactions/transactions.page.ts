import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/models/transactions.model';
import { TransactionsService } from '../../services/transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  transactions:Transactions[] = [];

  constructor( private _transaction:TransactionsService ) {
        
      this._transaction.getTransactions().subscribe(e => {
        this.transactions = e;
       
      })

   }

  ngOnInit() {
  }



}
