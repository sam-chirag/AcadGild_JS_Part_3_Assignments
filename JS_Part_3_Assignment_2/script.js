function func1() {
    var rows = document.querySelectorAll('body table tr'),i;

    for (i = 0; i < rows.length; i += 2){
        rows[i].style.display = 'none';
    }
}

var button = document.getElementById('oldrows');
button.addEventListener('click', func1, false);