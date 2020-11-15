import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Character } from 'src/app/models/character';
import { ApiRMService } from 'src/app/services/api-rm.service';

@Component({
  selector: 'app-boxperson',
  templateUrl: './boxperson.component.html',
  styleUrls: ['./boxperson.component.scss']
})
export class BoxpersonComponent implements OnInit {
  character$: Observable<Character>;

  constructor(private route:ActivatedRoute,private api:ApiRMService) { }

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe((params)=>{
      const id=params['id'];
      this.character$ = this.api.getDetails(id);
    });
  }

}
