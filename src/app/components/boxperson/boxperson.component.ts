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
  @Input() character:Character={
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
    };
  constructor(private route:ActivatedRoute,private api:ApiRMService) { 
    console.log(this.character);
  }

  ngOnInit(): void {
  }

}
