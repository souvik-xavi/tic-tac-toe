import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tic-tac-toe';
  winMessage: string="";
  isCross:boolean=false;
  itemArray : string[] = new Array(9).fill('empty');
  x:number=0;


  constructor(private toastr: ToastrService) {}

  handleClick(itemNumber :number):any{
    if(this.winMessage){
      return this.toastr.success(this.winMessage);
    }
    if(this.itemArray[itemNumber]==='empty'){
      this.itemArray[itemNumber] = this.isCross ? 'cross':'circle';
      this.isCross=!this.isCross;
    }else{
      return this.toastr.error('Aready fillrd');
    }
    this.checkIsWinner()

  }

  
  checkIsWinner = () => {
    //  checking  winner of the game
    this.x=0;
    for(let item of this.itemArray){
      if(item==='empty'){
        this.x=1;
        break;
      }

    }
    if(this.x==0){
      this.winMessage="Match Draw"
    }
    if (
      this.itemArray[0] === this.itemArray[1] &&
      this.itemArray[0] === this.itemArray[2] &&
      this.itemArray[0] !== 'empty'
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[3] !== 'empty' &&
      this.itemArray[3] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[5]
    ) {
      this.winMessage = `${this.itemArray[3]} won`;
    } else if (
      this.itemArray[6] !== 'empty' &&
      this.itemArray[6] === this.itemArray[7] &&
      this.itemArray[7] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[6]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[3] &&
      this.itemArray[3] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[1] !== 'empty' &&
      this.itemArray[1] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[7]
    ) {
      this.winMessage = `${this.itemArray[1]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[5] &&
      this.itemArray[5] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } else if (
      this.itemArray[0] !== 'empty' &&
      this.itemArray[0] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[8]
    ) {
      this.winMessage = `${this.itemArray[0]} won`;
    } else if (
      this.itemArray[2] !== 'empty' &&
      this.itemArray[2] === this.itemArray[4] &&
      this.itemArray[4] === this.itemArray[6]
    ) {
      this.winMessage = `${this.itemArray[2]} won`;
    } 
  };

  reloadGame=()=>{
    this.winMessage="";
    this.isCross=false;
    this.itemArray=new Array(9).fill('empty');
  }
}
