$(function() {
  //読み込まれた時
$(window).on('load', () => {
  console.log('loadイベントが発生しました');
});
　//スクロールした時
$(window).on('scroll', () => {
  console.log('scrollイベントが発生しました');
});
});
