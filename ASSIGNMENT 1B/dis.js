let obj = JSON.parse(localStorage.getItem('user'))
document.getElementById('First').innerHTML = obj.a
document.getElementById('Last').innerHTML = obj.b
document.getElementById('Gender').innerHTML = obj.c
document.getElementById('Branch').innerHTML = obj.d