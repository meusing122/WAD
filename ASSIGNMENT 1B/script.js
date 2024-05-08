function Submit() {
    let a = document.getElementById('First').value;
    let b = document.getElementById('Last').value;
    let c = document.querySelector('input[name="Gender"]:checked').value;
    let d = document.querySelector('select[name="Branch"]').value;
    let obj = { a, b, c, d }
    console.log(obj);
    localStorage.setItem('user', JSON.stringify(obj));
    window.location.href = "http://127.0.0.1:5500/display.html"
}
