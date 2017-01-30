import { Component, OnInit } from '@angular/core';
import { EncryptedCodeService } from './encrypted-code.service'

@Component({
  moduleId: module.id,
  selector: 'app-mono-alphabetic',
  templateUrl: './mono-alphabetic.component.html',
  styleUrls: ['./mono-alphabetic.component.css'],
  providers: [EncryptedCodeService]
})
export class MonoAlphabeticComponent  implements OnInit {

  //TODO

  // skriv ut mellanslag istället för '-'
  // Lägg dropdowns till höger om frekvensgrafen
  // Skriv ut en liten lathund om vilka bokstäver som förekommer med vilken procentuell fördelning. Jämför med det
  // fått ut och skriv förslag på vilka bokstäver som ska mappas mot vilka (skriv kanske ut en text baserad på
  // sannolikhet)

  //committa !!!!

  encryptedText: string;
  decryptedArray: string[] = [];

  public letterFrequencies;
  public allLetters: Array<string> = [];
  public remainingLetters: Array<string> = [];
  options: Object;

  constructor(private encryptedCodeService: EncryptedCodeService){

  }


  ngOnInit(){
    this.getCode();
    this.letterFrequencies = this.getFrequencyAnalysis();
    this.options = {
      title : { text : 'Frequenzy Analysis' },
      series: [
        {
          name: 'Encrypted letter',
          data: [
            this.letterFrequencies['A'].frequency,
            this.letterFrequencies['B'].frequency,
            this.letterFrequencies['C'].frequency,
            this.letterFrequencies['D'].frequency,
            this.letterFrequencies['E'].frequency,
            this.letterFrequencies['F'].frequency,
            this.letterFrequencies['G'].frequency,
            this.letterFrequencies['H'].frequency,
            this.letterFrequencies['I'].frequency,
            this.letterFrequencies['J'].frequency,
            this.letterFrequencies['K'].frequency,
            this.letterFrequencies['L'].frequency,
            this.letterFrequencies['M'].frequency,
            this.letterFrequencies['N'].frequency,
            this.letterFrequencies['O'].frequency,
            this.letterFrequencies['P'].frequency,
            this.letterFrequencies['Q'].frequency,
            this.letterFrequencies['R'].frequency,
            this.letterFrequencies['S'].frequency,
            this.letterFrequencies['T'].frequency,
            this.letterFrequencies['U'].frequency,
            this.letterFrequencies['V'].frequency,
            this.letterFrequencies['W'].frequency,
            this.letterFrequencies['X'].frequency,
            this.letterFrequencies['Y'].frequency,
            this.letterFrequencies['Z'].frequency,

          ]
        }
      ],
      xAxis: {
        categories: [
          'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
        ],
        crosshair: true
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Frequency in text'
        }
      },
      chart: {
        type: 'column'
      },
    };

    for (let prop in this.letterFrequencies){
      this.allLetters.push(prop);
      this.remainingLetters.push(prop);
    }
    //console.log(this.allLetters);

  }

  getCode() : void {
    this.encryptedText = this.encryptedCodeService.getEncryptedCode();
    for (let i=0; i<this.encryptedText.length; i++){
      this.decryptedArray[i] = this.encryptedText.charAt(i);
    }
  }

  getFrequencyAnalysis(): Object {
    return this.encryptedCodeService.getFrequencyAnalysis();
  }

  updateDecryptedText(Object): void {
    for (let i=0; i<this.encryptedText.length; i++){
      if (this.encryptedText.charAt(i)===Object.encryptedLetter ){
        //console.log('hit')
        if (Object.selectedLetter===''){
          this.decryptedArray[i] = Object.encryptedLetter;
        }
        else{
          this.decryptedArray[i] = Object.selectedLetter.toLowerCase();
        }
      }
    }
  }

  onSelected(Object): void {
    //console.log(Object)


    var index = this.remainingLetters.indexOf(Object.selectedLetter);
    console.log(this.remainingLetters);
    console.log(Object.selectedLetter);
    console.log('index: ' + index);
    if (index >= 0) {
      console.log('tar bort: ' + Object.selectedLetter);
      this.remainingLetters.splice(index, 1 );
      this.letterFrequencies[Object.encryptedLetter].decryptedLetter = Object.selectedLetter.toLowerCase();
    }
    if (Object.selectedLetter === ''){
      console.log('väljer ingen');
      this.letterFrequencies[Object.encryptedLetter].decryptedLetter = null;
    }
    if (Object.previousLetter !== ''){
      console.log('Ångrar mig! ' + Object.encryptedLetter + ' var inte ' + Object.previousLetter);
      if (this.remainingLetters.indexOf(Object.previousLetter) === -1) {
        console.log('finns inte')
        this.remainingLetters.push(Object.previousLetter);
        this.remainingLetters.sort();
      }
    }

    //console.log(this.letterFrequencies);
    this.updateDecryptedText(Object);

  }

}
