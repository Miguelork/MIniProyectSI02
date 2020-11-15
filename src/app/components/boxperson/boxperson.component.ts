import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character';
import { ApiRMService } from 'src/app/services/api-rm.service';

@Component({
  selector: 'app-boxperson',
  templateUrl: './boxperson.component.html',
  styleUrls: ['./boxperson.component.scss']
})
export class BoxpersonComponent implements OnInit {
  @Input() character:Character;

  constructor(private route:ActivatedRoute,private api:ApiRMService) { 
    
  }

  ngOnInit(): void {
  }

}
