function myFunction() {
    var x = document.getElementById('video');
   if (x.style.display === 'none' || x.style.display === '') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

