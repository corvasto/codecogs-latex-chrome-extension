let latexInput = document.getElementById('latexInput');
let latexOutput = document.getElementById('latexOutput');

document.addEventListener('DOMContentLoaded', function() {
    loadLastInputValue();
});

latexInput.oninput = function(element) {
    let val = element.target.value;
    setLastInputValue(val);

    latexOutput.src = val ? 'https://latex.codecogs.com/svg.image?' + val : '';
}

function loadLastInputValue() {
    chrome.storage.local.get(['ccLastValue'], function(val) {
        if (val.ccLastValue) {
            latexInput.value = val.ccLastValue;
            latexInput.dispatchEvent(new Event("input"))
        }
    });
}

function setLastInputValue(val) {
    chrome.storage.local.set({'ccLastValue': val }, function(){});
}
