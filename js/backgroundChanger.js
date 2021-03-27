let containerBG = document.getElementById('rightSection');
let counter = 1;

setInterval(function()
{
  if(counter === 1)
    containerBG.style.backgroundImage = 'url(\'../images/cookie4.jpg\')';
  if(counter === 2)
    containerBG.style.backgroundImage = 'url(\'../images/cookie2.jpg\')';
  if(counter === 3)
    containerBG.style.backgroundImage = 'url(\'../images/cookie3.jpg\')';
  if(counter === 4)
    containerBG.style.backgroundImage = 'url(\'../images/cookie1.jpg\')';
  if(counter === 5)
    containerBG.style.backgroundImage = 'url(\'../images/cookie5.jpg\')';
  counter++;
  if(counter>5)
    counter=1;
},4000);



let orderForm = document.getElementById('orderForm');
let cont = document.getElementById('overlay');
function order()
{
  // let cont = document.getElementById('over');
  // console.log(cont);
  cont.style.display='block';
  // let orderForm = document.getElementById('orderForm');
  orderForm.style.display = "block";

}

orderForm.addEventListener('submit', submitOrder());

function submitOrder()
{
  cont.style.display='none';
  orderForm.style.display = 'none';
}
