const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");


buttons.forEach(function (b){
    console.log(b);
    b.addEventListener("click", function(e){
      switch(e.target.id){
        case "grey":
          body.style.backgroundColor = "grey";
          break;
        case "blue":
          body.style.backgroundColor = "blue";
          break;
        case "white":
          body.style.backgroundColor = "white";
          break;
        case "yellow":
          body.style.backgroundColor = "yellow";
          break;
        default:
          break;
      }
    });
});
