import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CardData, CardService } from '../card.service';

@Component({
  selector: 'app-card-details',
  standalone: true,
  imports: [
    CommonModule,MatCard,MatButton,MatCardContent,MatCardHeader,MatIconModule,RouterModule,MatCardTitle,MatIconButton
  ],
  template: `<mat-card>
    <mat-card-header><button mat-icon-button [routerLink]="['/list']"><mat-icon>keyboard_arrow_left</mat-icon></button>
      <mat-card-title>{{card().title}}</mat-card-title>
  </mat-card-header>
    <mat-card-content>{{card().description}}



    </mat-card-content>


  </mat-card>`,
  styleUrl: './card-details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDetailsComponent { 
  readonly #cardService = inject(CardService);
  id = input.required<number>();

  card = computed<CardData>(()=>{
    return this.#cardService.cards()[this.id()-1];
  });
}
