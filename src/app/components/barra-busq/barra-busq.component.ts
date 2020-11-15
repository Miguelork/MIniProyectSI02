import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busq',
  templateUrl: './barra-busq.component.html',
  styleUrls: ['./barra-busq.component.scss']
})
export class BarraBusqComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(value:string){
    if(value){
      this.router.navigate(['/personajes'], {queryParams: {q:value}});
    }
  }

}
