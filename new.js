function ChangeColor(Element) {
	if (Element.style.color == 'blue') Element.style.color = 'red';
	else Element.style.color = 'blue';
	return false;
}
window.onload = function () {
    //получаем идентификатор элемента
    var a = document.getElementById('switch');
    //вешаем на него событие
    a.onclick = function() {
        //производим какие-то действия
        if (this.innerHTML=='On') this.innerHTML = 'Off';
        else this.innerHTML = 'On';
        //предотвращаем переход по ссылке href
        return false;
    }   
}
function messageWrite() {
   document.write('JavaScript Функция messageWrite');
}
//Использование анонимных функций Массив
function arrMap(arr,func){
   var res=new Array;
   for (var i=0;i<arr.length;i++)
      res[i]=func(arr[i]);
   return res;
}
var arr=new Array(3,5,1,4);
document.write('Массивы: ');
document.write(arrMap(arr,function(g){return g+1;})+"<br />");

function showMessage(from, text) { // параметры from, text
  from = "** " + from + " **"; // здесь может быть сложный код оформления
  alert(from + ': ' + text);
}
showMessage('Сергей Валерьевич', 'Здравствуйте!');
showMessage('Отпустите меня сегодня пораньше', 'за 30 минут до конца');


function showHide(element_id) {
 //Если элемент с id-шником element_id существует
if (document.getElementById(element_id)) {
 //Записываем ссылку на элемент в переменную obj
var obj = document.getElementById(element_id);
//Если css-свойство display не block, то:
if (obj.style.display != "block") {
obj.style.display = "block"; //Показываем элемент
}
else obj.style.display = "none"; //Скрываем элемент
}
 //Если элемент с id-шником element_id не найден, то выводим сообщение
else alert("Элемент с id: " + element_id + " не найден!");
            } 