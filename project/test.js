function a() {
    return document.getElementById("result");
}

function set_num(num) {
    x += num;
    a('result').value = x;
}

function ketqua() {
    a("result").value = eval(a, ("result").value);
}