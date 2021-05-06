import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { TransactionsService } from '../../services/transactions.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Token } from '../../models/token.model';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {


  buyForm: FormGroup;

  constructor(public modal: ModalController, private _transaction: TransactionsService, private fb: FormBuilder, private toast: ToastController, public alertController: AlertController,) {
    this.createForm();

  }

  ngOnInit() {
  }



  @Input() token: Token;

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modal.dismiss({
      'dismissed': true
    });
  }

  async createToast(message) {
    const toast = await this.toast.create({
      message: message,
      duration: 2000,
      color: "danger"
    });
    toast.present();
  }
  //alert
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      message: 'Has comprado X tokens a pepa.',
      buttons: ['OK']
    });
    await alert.present();
  }

  buyToken(d) {
    console.log(d)
    console.log(this.buyForm)

    let transaction: any = {
      quantity: 2,
      price: this.token.price,
      token_id: this.token.id,
      type: 'BOUGHTED'
    }
    this._transaction.createTransactionBuy(transaction, this.token).then(e => {
      this.createToast('Token Comprados');
      this.dismiss();
      this.buyForm.reset();
    });
  }


  fieldValid(field) {
    return this.buyForm.get(field).invalid && this.buyForm.get(field).touched;
  }

  createForm() {
    this.buyForm = this.fb.group({
      quantity: ['', [Validators.required]]
    })
  }

}
