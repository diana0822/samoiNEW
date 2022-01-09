let bt1, bt2, modal, modal2;

bt1 = document.querySelector("#MapDivButton")
bt2 = document.querySelector("#MapDivButton2")
modal = document.querySelector("#GoogleMap");
modal2 = document.querySelector("#ContectAbout");

bt1.onclick = show;
bt2.onclick = hide;

bt1.onmouseover = change;
bt2.onmouseover = change2;

bt1.onmouseout = change3;
bt2.onmouseout = change4;

function show() {
    // modal.hidden = false;
    modal.style.display = "block"
    modal2.style.display = "none"
    bt1.style.display = "none"
}

function hide() {
    //modal.hidden = true;
    modal2.style.display = "block"
    bt1.style.display = "block"

}

function change() {
    bt1.style.backgroundColor = '#C6BCA5'
    bt1.style.color = '#ffffff'
}

function change2() {
    bt2.style.backgroundColor = '#C6BCA5'
    bt2.style.color = '#ffffff'
}

function change3() {
    bt1.style.backgroundColor = '#F8EED4'
    bt1.style.color = '#000000'
}

function change4() {
    bt2.style.backgroundColor = '#F8EED4'
    bt2.style.color = '#000000'
}


hide();