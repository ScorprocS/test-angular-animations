import { Component, inject } from '@angular/core';
import { RouterOutlet,RouterModule, ChildrenOutletContexts } from '@angular/router';
import { slideInAnimation } from './animations';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = 'test-annimation';
  readonly #contexts = inject(ChildrenOutletContexts);

  getRouteAnimationData() {
    return this.#contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
