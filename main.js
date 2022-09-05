let currentVal = 0;
let result = 0;
let isClickSymbol = false;
let isClickNumber = false;
let selectSymbol = 0;

function ClickNumber(val) {
    if (isClickSymbol && !isClickNumber) {
        $('#inputValue').text(0);
    }

    let inputVal = $('#inputValue').text();

    if (inputVal == 0) {
        $('#inputValue').text(val);
    } else {
        $('#inputValue').text(inputVal + '' + val);
    }
    isClickNumber = true;

}

function ClickSymbol(val) {
    let inputVal = $('#inputValue').text();
    switch (val) {
        case 1:
            currentVal = 0;
            result = 0;
            $('#inputValue').text(0);
            break;
        case 2:
            inputVal = (-1) * inputVal;
            $('#inputValue').text(inputVal);
            break;
        case 3:
            selectSymbol = 3;
            inputVal = inputVal / 100;
            $('#inputValue').val(inputVal);
            break;
        case 4:
            selectSymbol = 4;
            if (!isClickSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) / parseFloat(inputVal);
                currentVal = result;
                $('#inputValue').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 5:
            selectSymbol = 5;
            if (!isClickSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) * parseFloat(inputVal);
                currentVal = result;
                $('#inputValue').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 6:
            selectSymbol = 6;
            if (!isClickSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) - parseFloat(inputVal);
                currentVal = result;
                $('#inputValue').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 7:
            selectSymbol = 7;
            if (!isClickSymbol) {
                currentVal = inputVal;
            } else if (isClickSymbol && isClickNumber) {
                result = parseFloat(currentVal) + parseFloat(inputVal);
                currentVal = result;
                $('#inputValue').text(result);
            }
            isClickSymbol = true;
            isClickNumber = false;
            break;
        case 8:
            ClickSymbol(selectSymbol);
            break;
        case 9:
            if (!inputVal.includes('.')) {
                inputVal = inputVal + '.';
                $('#inputValue').text(inputVal);
            }
            break;
    }
}