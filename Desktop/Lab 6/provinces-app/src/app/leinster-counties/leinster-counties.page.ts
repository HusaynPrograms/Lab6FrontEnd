import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//Ionic UI Components
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leinster-counties',
  templateUrl: './leinster-counties.page.html',
  styleUrls: ['./leinster-counties.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LeinsterCountiesPage implements OnInit {
//Array storing Counties Names
  counties: string[] = ["Carlow", "Dublin", "Kildare",
    "Kilkenny", "Laois", "Longford", "Louth", "Meath",
    "Offaly", "Westmeath", "Wexford", "Wicklow"];

  constructor() { }

  //Runs when page loads 
  ngOnInit() {
  }

}
