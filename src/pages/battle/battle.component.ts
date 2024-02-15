import { Component, ElementRef, HostListener, Renderer2, AfterViewChecked, ViewEncapsulation, Input, OnInit } from '@angular/core';
import { Word } from '../../models/Word.model';
import { Letter } from '../../models/Letter.model';
import { Game } from '../../models/Game.model';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BattleComponent implements OnInit  {
  _verifyPossiblesLetters:RegExp = /^[a-zA-Z\s!@#$%^&*(),.?":{}|<>]$/;
  @Input() textCombat:string = 'Lorem';
  game!: Game;

  constructor(private el: ElementRef, private renderer: Renderer2, private gameService: GameService) {
    this.game = {
      WordSelected:0,
      TextInputUser: [],
      TextCombat: [],
      TextShow:'',
      PrimaryTextCombat: 'Standard Text, Lorem',
    };
  }

  ngOnInit(): void {
    this.game = this.gameService.createNewGame(this.textCombat);

  }


  keyHandlers: { [key: string]: (key: string) => void } = {
    'Backspace': () => {
      this.gameService.SpaceKeypress(this.game);
    },
    ' ':(key: string)=>{
      this.gameService.SpaceKeypress(this.game);
    },
    'default': (key: string) => {
      this.gameService.DefaultKeypress(key ,this.game);
    }
  };
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    const handler = this.keyHandlers[event.key] || this.keyHandlers['default'];
    handler(event.key);
  }
 }
