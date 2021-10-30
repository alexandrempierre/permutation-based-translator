/* Z E N I T
 * P O L A R
 */

const ZENIT_POLAR = Object.freeze({
  'A':'I', 'Á':'Í', 'Ã':'Ĩ', 'Â':'Î', 'À':'Ì',
  'I':'A', 'Í':'Á', 'Ĩ':'Ã', 'Î':'Â', 'Ì':'À',
  'O':'E', 'Ó':'É', 'Õ':'Ẽ', 'Ô':'Ê',
  'E':'O', 'É':'Ó', 'Ẽ':'Õ', 'Ê':'Ô',
  'Z':'P', 'P':'Z',
  'T':'R', 'R':'T',
  'N':'L', 'L':'N'
});

const permutate = (text, cipher=ZENIT_POLAR) => Array.prototype.map.call(
  text, (symbol) => cipher[symbol] || symbol).join('');

console.log(permutate('ZENIT'));
console.log(permutate(permutate('ZENIT')));