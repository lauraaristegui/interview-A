import { Component, OnInit } from '@angular/core';
import { Token } from '../../models/token.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.page.html',
  styleUrls: ['./sell.page.scss'],
})
export class SellPage implements OnInit {


  token:Token;

  form:FormGroup;


  constructor(private _token:TokenService, private fb:FormBuilder, private toast:ToastController,private router:Router) { 
    
    this.createForm();

  }

  ngOnInit() {
  }

  async createToast(message){
    const toast = await this.toast.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  fieldValid(field){
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  createForm(){
    this.form = this.fb.group({
       quantity:['',[Validators.required]],
       price:['',[Validators.required]],
     })
   }


  create( ){
    if(this.form.valid){
      this._token.createToken(this.form.value).then( e => {
        this.form.reset();
        this.createToast('Token Creados');
        this.router.navigate(['/tabs/home']);
      })
    } 
  
  }

}
