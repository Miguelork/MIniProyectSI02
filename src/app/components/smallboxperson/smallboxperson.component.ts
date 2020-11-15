import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-smallboxperson',
  templateUrl: './smallboxperson.component.html',changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./smallboxperson.component.scss']
})
export class SmallboxpersonComponent implements OnInit {
@Input() character:Character;

  constructor() { }

  ngOnInit(): void {
  }

}
