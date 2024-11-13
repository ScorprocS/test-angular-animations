import { animate, animateChild, group, query, stagger, style, transition, trigger } from "@angular/animations";

export const CARD_LIST_ANITION= trigger('listAnimation',[
    transition('* => *', [
       /* query(':leave', [stagger(200, [animate('0.5s', style({ opacity: 0 }))])], {
          optional: true,
        }),*/
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(150, [animate('0.4s', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
    ])
]);

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('CardListPage => CardDetailPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ], { optional: true }),
        query(':enter', [
          animate('200ms ease-out', style({ left: '0%' }))
        ], { optional: true }),
      ]),
    ])
  ]);