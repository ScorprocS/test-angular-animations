import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardActions, MatCardContent } from '@angular/material/card';
import { CARD_LIST_ANITION } from '../animations';
import { CardService } from '../card.service';
import { RouterModule } from '@angular/router';
import { AnimationEvent } from '@angular/animations';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CommonModule,MatCard,MatButton,MatCardActions, MatCardContent,RouterModule
  ],
  animations: [CARD_LIST_ANITION],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {



  readonly #cardService = inject(CardService);


  items = this.#cardService.cards;
  annimationEnambled = this.#cardService.cardAnimationEnambled;

  onAnimationEndEvent($event: AnimationEvent) {
    console.log($event)
    //RUN the animation only the first time
    if($event.totalTime > 1000){
      this.annimationEnambled.set(false);

    }    
  }


}
