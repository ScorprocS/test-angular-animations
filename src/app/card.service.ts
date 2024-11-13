import { Injectable, signal } from '@angular/core';
export interface CardData{
  id:number,
  title:string,
  description:string;

}

@Injectable({
  providedIn: 'root'
})
export class CardService {
  public cards = signal<CardData[]>([]);
  public cardAnimationEnambled = signal<boolean>(true);

  constructor() {
    setTimeout(()=>{
      this.cards.set(this.buildCards());

    },1000)
   }

   buildCards(): CardData[]{
    let cards: CardData[]= [];
    for(let i = 1; i<10;i++){
      cards.push({id:i,
        title:'Simple Card - ' + i,
        description:'Description '+i+ 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu quam sit amet velit placerat mollis a sit amet nulla. Ut finibus mollis ultricies. Mauris nibh lectus, lacinia ac dui facilisis, sollicitudin lacinia purus. Mauris pellentesque tellus venenatis commodo aliquet. Vivamus eget diam hendrerit, tempor lacus non, sagittis libero. Donec placerat laoreet auctor. Proin pretium urna nec nibh porttitor finibus. Cras vel lorem dignissim, mattis enim a, fringilla nisi. Sed lobortis diam elit. Phasellus lacinia ligula ac ipsum feugiat porttitor. Nunc ullamcorper, libero vitae luctus scelerisque, nibh magna vehicula risus, eget molestie massa mauris imperdiet arcu.Donec mollis magna vitae ullamcorper rutrum. Integer tristique leo quis risus iaculis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a luctus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In malesuada convallis molestie. Maecenas efficitur ante eu lacinia sodales. Aliquam vehicula neque a feugiat gravida. Praesent interdum mi ac dictum volutpat. Pellentesque eu ante id justo maximus auctor vitae sit amet ante.'});
    }

    return cards;

    
   
  }

}
