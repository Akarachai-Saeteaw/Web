/*let = 75;
if (x = 80) 
{
    console.log('Grade A');
}*/

/*for (let i = 1; i <= 12; i+=1) 
{
    if (i % 10 == 0) {
        break;
    }
    if (i % 2 == 0) {
        continue;//โปรแกรมจะไม่ทำโค๊ดข้างล่างต่อ
    }
    let answer = i ** 2
    console.log(answer);
}

function getPyramid(weight, height) {
    let baseArea = weight * height;
    return baseArea;
}
let area1 = getPyramid(10, 20);
console.log('area1 = ' + area1)*/

let content = document.getElementById('content-1');//ตัวแทนลงใน html
let text = '<b>เกิดมาไม่เคยเจอ</b>';
text += '<b>ใครเหมือนเธอ</b>'
content.innerHTML = text;

let discountbotton = document.getElementById('discount-button');
let message = document.getElementById('massage');

function showmassage() {
    message.innerHTML = 'หมดเวลาสนุกแล้ว';
}
discountbotton.addEventListener('dblclick', showmassage);