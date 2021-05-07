import { Component, OnInit } from '@angular/core';
import algosdk from 'algosdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-algosdk';
  private _algodToken = '';
  private _indexerServer = 'https://testnet.algoexplorerapi.io/idx2';
  private _algodPort = '';
  private _indexerClient;
  ngOnInit(): void {
    this._indexerClient = new algosdk.Indexer(this._algodToken, this._indexerServer, this._algodPort);
  }
}
