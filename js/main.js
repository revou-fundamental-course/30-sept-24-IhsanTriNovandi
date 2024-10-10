
function validation() {
    console.log();
    const inputsuhu = document.getElementById('input-suhu').value;

    if (inputsuhu == '') {
        alert('input terlebih dahulu')
    } else {
        calculation(inputsuhu)
    }
}


function calculation(value) {
    let result = parseInt(value) * 9 / 5 + 32;
    document.getElementById('hasil-suhu').value = result;
    document.getElementById('how-to-suhu').value = value + '℃ x (9/5) + 32 = ' + result +'℉';
}

function reset() {
    document.getElementById('input-suhu').value = '';
    document.getElementById('hasil-suhu').value = '';
    document.getElementById('how-to-suhu').value = '';
}

document
        .getElementById("Farenheit-ke-Celcius")
        .addEventListener('click', function (e) {
            e.preventDefault();
            

            const farenheitSection = document.getElementById('Farenheit-Section');
            if (farenheitSection.style.display === 'none') {
                farenheitSection.style.display = 'block';                
            } else {
                farenheitSection.style.display = 'none'
            }
        });

function validation2() {
    console.log();
    const inputsuhu2 = document.getElementById('input-suhu2').value;

    if (inputsuhu2 == '') {
        alert('input terlebih dahulu')
    } else {
        calculation2(inputsuhu2)
    }
}


function calculation2(value) {
    let result = (parseInt(value) - 32) * 5/9;
    document.getElementById('hasil-suhu2').value = result;
    document.getElementById('how-to-suhu2').value = '(' + value + '℉ - 32) x 5/9 = ' + result +'℃';
}

function reset2() {
    document.getElementById('input-suhu2').value = '';
    document.getElementById('hasil-suhu2').value = '';
    document.getElementById('how-to-suhu2').value = '';
}
