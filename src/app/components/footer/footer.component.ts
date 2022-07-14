import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor() {}
 
  Arr = Array; //Array type captured in a variable
  num:number = 6 //Number of repeation of array

  footerData: any = [
    {
      title: 'KREDITI',
      text1: 'Keš kredit',
      text2: '“iKeš” kredit',
      text3: 'Za refinansiranje',
      text4: 'Stambeni krediti',
      text5: 'Lizing',
    },
  ];

 

  ngOnInit(): void {}
}
