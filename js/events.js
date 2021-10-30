function onInput() {
  const text_in = document.getElementById('text-in');
  const text_out = document.getElementById('text-out');

  const text = text_in.value.toUpperCase();
  const permutated = permutate(text);

  text_out.value = permutated;
}

function load() {
  document.getElementById('text-in').addEventListener('input', onInput, false);
}

(function() {
  document.addEventListener('DOMContentLoaded', load, false);
})();