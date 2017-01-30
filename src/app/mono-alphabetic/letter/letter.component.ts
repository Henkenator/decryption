import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-letter',
  templateUrl: 'letter.component.html',
  styleUrls: ['letter.component.css']
})
export class LetterComponent implements OnInit {

  @Input() letter:string;
  @Input() remainingLetters:Array<string>;

  @Output() onSelected = new EventEmitter<{}>();

  selectedLetter:string;
  previousLetter:string = '';

  constructor() { }

  ngOnInit() {
  }

  onChange($event) {
    //console.log(this.letter + ' is '+this.selectedLetter);

    this.onSelected.emit({encryptedLetter:this.letter, selectedLetter:this.selectedLetter, previousLetter:this.previousLetter});


    //console.log(this.letter + ' is '+this.selectedLetter+'. Previous choice was '+this.previousLetter);

    this.previousLetter = this.selectedLetter


  }

}
