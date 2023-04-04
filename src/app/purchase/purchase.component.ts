import { Component, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  purchases: any = [];
  purchase = {
    id: '',
    description: '',
    product: '',
    amount: 0
  };
  constructor(private http: HttpClient, private router: Router,) { }

  adicionarCompra() {
    this.http.post('http://localhost:8080/purchase', this.purchase)
      .subscribe(
        (response) => {
          this.purchases.push(response);
          this.purchase = {
            id: '',
            description: '',
            product: '',
            amount: 0
          };
        },
        (error) => {
          console.log('Erro ao realizar a requisição POST', error);
        }
      );
  }

  ngOnInit() {
    if (!sessionStorage.getItem("authenticatedUser")) {
      this.router.navigate(['/login']);
    }
    this.list();
  }

  list() {
    this.http.get('http://localhost:8080/purchase')
      .subscribe(
        (response) => {
          this.purchases = response;
        },
        (error) => {
          console.log('Erro ao realizar a requisição POST', error);
        }
      );
  }

  removePurchase(id: string) {    
    this.http.delete('http://localhost:8080/purchase/' + id)
      .subscribe(
        (response) => {
          this.list();
        },
        (error) => {
          console.log('Erro ao realizar a requisição POST', error);
        }
      );
  }
}
