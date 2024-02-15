import { Injectable } from '@angular/core';
import { Game } from '../models/Game.model';
import { Word } from '../models/Word.model';
import { Letter } from '../models/Letter.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  createNewGame(textCombat: string): Game {
    let game: Game = {
      WordSelected: 0,
      TextInputUser: [],
      TextCombat: [],
      TextShow: '',
      PrimaryTextCombat: textCombat,
    };


    return game;
  }


  BackspaceKeypress(game:Game):Game{


    return game;
  }
  SpaceKeypress(game:Game):Game{


    return game;
  }
  DefaultKeypress(key:string,game:Game):Game{
    this.AddLetterInGameInputUser(key, game);
    return game;
  }
  AddLetterInGameInputUser(key:string, game:Game):void{
    game.TextInputUser[game.WordSelected].value += key;
    let letter:Letter = {
        class: 'standard-letter',
        value:key
    }
    game.TextInputUser[game.WordSelected].value += key;
    game.TextInputUser[game.WordSelected].Letters.push(letter);
  }

  checkMatchAndConverToTextShow(game:Game) : Game{
    return game;
  }


}
