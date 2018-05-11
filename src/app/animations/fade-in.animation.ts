import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition('* => *', [

      query(':enter', stagger('300ms', [
        animate('.1s ease-in', keyframes([
          style({opacity: 0, transform: 'translateX(-75%)', offset: 0}),
          style({opacity: .5, transform: 'translateX(35px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0}),
        ]))]), {optional: true})
    ])
  ]);
