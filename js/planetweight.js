var multipliers = {
  mercury: 38,
  mars: 38,
  venus: 91,
  jupiter: 253,
  saturn: 107,
  neptune: 114,
  uranus: 91
},
  input,
  textContent,
  tmp;

tmp = document.createElement('div');
// Use innerText on internet explorer
textContent = tmp.textContent ? 'textContent' : 'innerText';
tmp = null;

input = document.getElementById('weight');
if (null === input) {
  throw new Error('Couldn\'t locate element with id: \'weight\'');
}

input.addEventListener('change', function() {
  if(!/^([0-9]+(\.[0-9]+)?|Infinity)$/.test(this.value)) {
    this.value = 0;
  }
});

function calculate(ev) {
  ev.preventDefault();
  if (null === input) {
    return;
  }

  if(/^([0-9]+(\.[0-9]+)?|Infinity)$/.test(input.value)) {
    var weight = parseFloat(input.value);
    var planets = Array.prototype.slice.call(document.getElementsByClassName('planet'));

    for (var i = 0, len = planets.length; i < len; i++) {
      var planet = planets[i];
      var identifier = planet.className.split(' ')[1];
      var extraTerrestrialWeight = weight / 100 * multipliers[identifier];
      // Note: toFixed is supposed to be buggy on internet explorer
      planet.getElementsByTagName('span')[0][textContent] = extraTerrestrialWeight.toFixed(2);
    }

  }

}

calculateBtn = document.getElementById('calculate');
if (null === calculateBtn) {
  throw new Error('Couldn\'t locate element with id: \'calculate\'');
}
calculateBtn.addEventListener('click', calculate);
