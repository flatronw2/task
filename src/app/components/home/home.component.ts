import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  cards = [
    {
      title: "iRacun - online racun",
      description: "Novac na racunu za 30 minuta.Minimalna dokumentacija 100% online"
    },
    {
      title: "Lokacija filijala",
      description: "Budite jedan od prvih korisnika tekuceg racuna i oktrijte sve   pogodnosti koje on nudi."
    },
    {
      title: "iKes kredit",
      description: "Novac na racunu za 30 minuta.Minimalna dokumentacija 100% online"
    }
  ]
  ngOnInit(): void {
  }

}
