'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '中吉', '小吉', '吉', '凶', '大吉', '大吉'];
    const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[n];

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '小吉';
    //     break;
    //   case 3:
    //     btn.textContent = '吉';
    //     break;
    //   case 4:
    //     btn.textContent = '凶';
    //     break;
    // }
    // 配列を使って表すこともできる！
  });
}
