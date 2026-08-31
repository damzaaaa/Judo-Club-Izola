// Deep key-parity check across sl/en/it dictionaries
const fs = require('fs');
const path = require('path');


function load(file) { return require(file); }

const base = '/tmp/';
const sl = load(base + 'sl.cjs');
const en = load(base + 'en.cjs');
const it = load(base + 'it.cjs');

function paths(obj, prefix = '', acc = []) {
  if (Array.isArray(obj)) {
    acc.push(prefix + '[len=' + obj.length + ']');
    obj.forEach((v, i) => {
      if (v && typeof v === 'object') paths(v, prefix + '[' + i + ']', acc);
    });
    return acc;
  }
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((k) => {
      const p = prefix ? prefix + '.' + k : k;
      if (obj[k] && typeof obj[k] === 'object') paths(obj[k], p, acc);
      else acc.push(p);
    });
    return acc;
  }
  acc.push(prefix);
  return acc;
}

const slP = new Set(paths(sl));
let fail = false;
for (const [name, dict] of [['en', en], ['it', it]]) {
  const p = new Set(paths(dict));
  const missing = [...slP].filter((x) => !p.has(x));
  const extra = [...p].filter((x) => !slP.has(x));
  console.log(`\n=== ${name} vs sl ===`);
  console.log('missing in ' + name + ' (' + missing.length + '):', missing.slice(0, 40));
  console.log('extra in ' + name + ' (' + extra.length + '):', extra.slice(0, 40));
  if (missing.length || extra.length) fail = true;
}

// Check untranslated (identical to Slovenian) leaf strings
function leaves(obj, prefix = '', map = {}) {
  if (Array.isArray(obj)) {
    obj.forEach((v, i) => leaves(v, prefix + '[' + i + ']', map));
    return map;
  }
  if (obj && typeof obj === 'object') {
    Object.keys(obj).forEach((k) => leaves(obj[k], prefix ? prefix + '.' + k : k, map));
    return map;
  }
  map[prefix] = obj;
  return map;
}
const slL = leaves(sl);
for (const [name, dict] of [['en', en], ['it', it]]) {
  const dl = leaves(dict);
  const same = Object.keys(slL).filter(
    (k) => typeof slL[k] === 'string' && slL[k] === dl[k] && slL[k].length > 25
  );
  console.log(`\n${name}: identical-to-SL long strings (${same.length}):`, same.slice(0, 30));
}
console.log('\nPARITY_OK=' + !fail);
