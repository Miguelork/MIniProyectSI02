import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { take, filter } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { ApiRMService } from 'src/app/services/api-rm.service';


type RequestInfo = {
  next: string;
}

@Component({
  selector: 'app-listperson',
  templateUrl: './listperson.component.html',
  styleUrls: ['./listperson.component.scss']
})
export class ListpersonComponent implements OnInit {
  characters: Character[] = [];
  char:Character={
    id:0,
  name:'',
  location:{
    name:'',
    url:''
  },
  status:'',
  gender:'',
  species:'',
  origin: {
    name:'',
    url:''
  },
  image:'',
  url:'',
  type:'',
  created:''
  }
  info: RequestInfo = {
    next: null,
  }
  pageNum: 1;
  query: string;
  hideScroll = 200;
  showScroll = 500;
  showGU = false;

  constructor(@Inject(DOCUMENT) private doc: Document, private api: ApiRMService, private route: ActivatedRoute, private router: Router) {
    this.urlChange();
  }

  ngOnInit(): void {
  }

  private urlChange() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.characters = [];
      this.pageNum = 1;
      this.getCharactersByQ();
    }
    );
  }

  almacen(character){
    this.char=character;
  }

  getCharactersByQ() {
    this.route.queryParams.pipe(take(1)).subscribe((params: ParamMap) => {
      this.query = params['q'];
      this.getInfo();
    })
  }

  getInfo(): void {
    this.api.searchPersonajes(this.query, this.pageNum)
      .pipe(take(1))
      .subscribe((res: any) => {
          const { info, results } = res;
          this.characters = [...this.characters, ...results];
          this.info = info;
      })
  }


}
