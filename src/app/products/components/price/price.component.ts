import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  standalone: false,

  templateUrl: './price.component.html',
  styleUrl: './price.component.scss',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;

  interval$?: Subscription;

  ngOnInit(): void {
    this.interval$ = interval(1000).subscribe((value) => {
      console.log(`Tick ${value}`);
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });

    console.log('PriceComponent ngOnChan');
  }
  ngOnDestroy(): void {
    console.log('PriceComponent ngOnDest');
    this.interval$?.unsubscribe();
  }
}
