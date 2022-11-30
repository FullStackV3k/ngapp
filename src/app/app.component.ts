import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  length: number = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeIncludeLetters(){
    this.includeLetters = !this.includeLetters;
    console.log(this.includeLetters)
  }

  onChangeIncludeNumbers(){
    this.includeNumbers = !this.includeNumbers;
    console.log(this.includeNumbers)
  }
  onChangeIncludeSymbols(){
    this.includeSymbols = !this.includeSymbols;
    console.log(this.includeSymbols)
  }
  onUserInput(bantu : Event){
    // string to number conversion --> use '+' or parseIn()
    this.length =  +(bantu.target as HTMLInputElement).value;
    console.log(this.length)
  }

  genPass(){
    // use 'let' or 'const' for variable declarartion in typescript
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let validChars = '';

    // wht babu wants
    if(this.includeLetters) validChars += letters;

    if(this.includeNumbers) validChars += numbers;
    if(this.includeSymbols) validChars = validChars + symbols;

    console.log(validChars);

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random()*validChars.length)
      generatedPassword += validChars[index];

    }

    this.password=generatedPassword;
  }

}





































/*

length = 0;
  password='';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLetters(){
    this.includeLetters = !this.includeLetters;
  }

  onChangeNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(value: Event){
    const parseValue = parseInt((value.target as HTMLInputElement).value);
    if(!isNaN(parseValue)){
      this.length = parseValue;
         console.log(this.length)
    }
  }

  btnclick(){

    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()';

    let validChars='';

    console.log(`Included:
    letters: ${this.includeLetters}
    Numbers: ${this.includeNumbers}
    Symbols: ${this.includeSymbols}
    `);

    if(this.includeLetters) validChars += letters;

    if(this.includeNumbers) validChars += numbers;
    if(this.includeSymbols) validChars += symbols;

    this.password = validChars;
    let generatedPassword = '';

    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random()*validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;

  }

*/
