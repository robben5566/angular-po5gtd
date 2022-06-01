import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// 1-1. 請使用source做出兩個按鈕A、B，按下去會在畫面顯示該type下的item(A1 A2 A3)或(B1 B2 B3)
// 1-2. item是可以按的，按一下會改變color至紅色，再按一下會恢復原來的color(黑色)
// 1-3. 製作一個按鈕，按了會額外在畫面顯示"被選取的item: (紅色的item)"

// 2. 用timer$做一個從0開始的計時器，有開始、暫停、清空三個按鈕功能
export class AppComponent implements OnInit {
  timer$ = timer(0, 1000);
  source = [
    { type: 'A', item: [{ name: 'A1' }, { name: 'A2' }, { name: 'A3' }] },
    { type: 'B', item: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }] },
  ];

  ngOnInit() {}
}
