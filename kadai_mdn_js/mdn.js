// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const [month, day, year] = [
  today.getMonth()+1,
  today.getDate(),
  today.getFullYear(),
];

// 日付を指定された形式で表示
let formattedDate = year + '年' + month + '月' + day + '日';

// 結果の表示
console.log(formattedDate);
