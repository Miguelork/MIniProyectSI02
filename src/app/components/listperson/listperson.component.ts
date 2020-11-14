import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { ApiRMService } from 'src/app/services/api-rm.service';

type RequestInfo ={
  next:string;
}

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.scss']
})
export class ListpersonComponent implements OnInit {
  characters: Character[]=[];
  info: RequestInfo={
    next:null,
  }
  pageNum:1;
  query:string;

  constructor(private api: ApiRMService) { 

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(): void{
    this.api.searchPersonajes(this.query, this.pageNum)
    .pipe(take(1))
    .subscribe((res:any)=>{
      const{info,results}= res;
      this.characters=[...this.characters,...results];
      this.info=info;
    })
  }


}
