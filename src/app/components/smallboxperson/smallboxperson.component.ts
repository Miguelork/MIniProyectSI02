import { Component, OnInit, Input } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-smallboxperson',
  templateUrl: './smallboxperson.component.html',
  styleUrls: ['./smallboxperson.component.scss']
})
export class SmallboxpersonComponent implements OnInit {
  @Input() personaje: Character={
    id:0,
    name:'',
    location:{
      name:''
    },
    status:'',
    gender:'',
    species:'',
    origin: {
      name:''
    },
    image:'',
    created:''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
