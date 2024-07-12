// generate random color
const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};
// generate random hexcode colors
const randomHex = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let interval;
const startChangingColor = function(){
    if(!interval){
        interval = setInterval(colorchange,1000)}
        
    function colorchange(){
        document.body.style.backgroundColor = randomColor();
        }
    }
const stopChangingColor = function(){
    clearInterval(interval);
    interval = null;
//    console.log("stp");
}

document.querySelector("#start").addEventListener("click",startChangingColor)
document.querySelector("#stop").addEventListener("click",stopChangingColor)
