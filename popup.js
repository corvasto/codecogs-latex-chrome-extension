let latexInput = document.getElementById('latexInput');
let latexOutput = document.getElementById('latexOutput');

latexInput.oninput = function(element) {
    let input = element.target.value;
    latexOutput.src = "https://codecogs.com/gif.latex?" + input;
};