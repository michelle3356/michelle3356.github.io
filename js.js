let counter = localStorage.getItem('counter') || "0";
counter = +counter + 1;
localStorage.setItem('counter', counter);
document.getElementById('counter').innerText = counter;
