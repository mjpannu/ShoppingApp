import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/profile.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  

  mobile : number = 0;
  address : String = "";
  editable =  false;
  constructor(private profile : ProfileService, public toastController: ToastController) {
    

  }

  ngOnInit() {
    this.mobile =  this.profile.getMobile();
    this.address =  this.profile.getAddress();
  }

  edit() {
    
    if(this.editable){
      this.profile.edit(this.mobile, this.address);  
      this.presentToast;
    }
    this.editable = !this.editable;
  }

   async presentToast() {
    console.log("toat");
    const toast = await  this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  } 
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
