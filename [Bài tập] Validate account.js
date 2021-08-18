function checkacc(src) {
    src = prompt("nhập account");
    rexp = /^[_a-z0-9]{6}/;
    if (rexp.test(src)){
        alert("account hợp lệ")
    }else {
        alert("account không hợp lệ")
    }
}