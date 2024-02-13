// btnというidを持つHTML要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// HTML要素がクリックされたときにイベント処理を実行する
btn.addEventListener('click', () => {

  // ボタンがクリックされたら、2秒後にテキストを書き換える
  setTimeout(() => {
  document.getElementById('text').innerHTML = 'ボタンがクリックされました！';
}, 2000);
});

