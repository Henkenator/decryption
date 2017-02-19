import { Injectable } from '@angular/core';
import { Letter } from '../shared/Letter';

@Injectable()
export class EncryptedCodeService {

  private encryptedText = 'BT JPX RMLX PCUV AMLX ICVJP ' +
    'IBTWXVR CI M LMT’R PMTN, MTN YVCJX CDXV ' +
    'MWMBTRJ JPX AMTNGXRJBAH UQCT JPX QGMRJXV ' +
    'CI JPX YMGG CI JPX HBTW’R QMGMAX; MTN JPX ' +
    'HBTW RMY JPX QMVJ CI JPX PMTN JPMJ YVCJX. ' +
    'JPXT JPX HBTW’R ACUTJXTMTAX YMR APMTWXN, ' +
    'MTN PBR JPCUWPJR JVCUFGXN PBL, RC JPMJ JPX ' +
    'SCBTJR CI PBR GCBTR YXVX GCCRXN, MTN PBR ' +
    'HTXXR RLCJX CTX MWMBTRJ MTCJPXV. JPX HBTW ' +
    'AVBXN MGCUN JC FVBTW BT JPX MRJVCGCWXVR, JPX ' +
    'APMGNXMTR, MTN JPX RCCJPRMEXVR. MTN JPX HBTW ' +
    'RQMHX, MTN RMBN JC JPX YBRX LXT CI FMFEGCT, ' +
    'YPCRCXDXV RPMGG VXMN JPBR YVBJBTW, MTN RPCY ' +
    'LX JPX BTJXVQVXJMJBCT JPXVXCI, RPMGG FX ' +
    'AGCJPXN YBJP RAM';

  private letterFrequencies = {
    'A': {frequency:0, decryptedLetter:null},
    'B': {frequency:0, decryptedLetter:null},
    'C': {frequency:0, decryptedLetter:null},
    'D': {frequency:0, decryptedLetter:null},
    'E': {frequency:0, decryptedLetter:null},
    'F': {frequency:0, decryptedLetter:null},
    'G': {frequency:0, decryptedLetter:null},
    'H': {frequency:0, decryptedLetter:null},
    'I': {frequency:0, decryptedLetter:null},
    'J': {frequency:0, decryptedLetter:null},
    'K': {frequency:0, decryptedLetter:null},
    'L': {frequency:0, decryptedLetter:null},
    'M': {frequency:0, decryptedLetter:null},
    'N': {frequency:0, decryptedLetter:null},
    'O': {frequency:0, decryptedLetter:null},
    'P': {frequency:0, decryptedLetter:null},
    'Q': {frequency:0, decryptedLetter:null},
    'R': {frequency:0, decryptedLetter:null},
    'S': {frequency:0, decryptedLetter:null},
    'T': {frequency:0, decryptedLetter:null},
    'U': {frequency:0, decryptedLetter:null},
    'V': {frequency:0, decryptedLetter:null},
    'W': {frequency:0, decryptedLetter:null},
    'X': {frequency:0, decryptedLetter:null},
    'Y': {frequency:0, decryptedLetter:null},
    'Z': {frequency:0, decryptedLetter:null}
  };

  constructor() { }

  getEncryptedCode(): string {
    return this.encryptedText;
  }

  getFrequencyAnalysis(): Object {
    this.analyzeText();
    return this.letterFrequencies;
  }

  private analyzeText(): void {
    for (let i=0; i<this.encryptedText.length; i++){
      if (typeof this.letterFrequencies[this.encryptedText.charAt(i)] !== 'undefined'){
        this.letterFrequencies[this.encryptedText.charAt(i)].frequency++;
      }
    }
  }

}
