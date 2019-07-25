/**
 * @returns {string}
 * @param {string} key
 */
function fixKey(key) {
  if (/[^\w]/.test(key) || /\d/.test(key)) {
    return `"${key}"`;
  }
  return key;
}

/**
 * @returns {string}
 * @param {string} str 
 */
function addTab(str) {
  let res = str.replace(/\r\n/g, '\n');
  res = res.replace(/\r/g, '\n');
  const res2 = res.split('\n');
  for (let i = 0; i < res2.length; i++) {
    if (!(i === (res2.length - 1) || i === 0)) {
      res2[i] = '   ' + res2[i];
    }
    if (i === (res2.length - 1)) {
      res2[i] = `  ${res2[i]}`;
    }
  }
  return res2.join('\n');
}

function toStr(thing) {

  if (thing === null) {
    return 'null';
  }

  if (Array.isArray(thing)) {
    let toReturn = '[';

    for (let i = 0; i < thing.length; i++) {
      toReturn += `${toStr(thing[i])}${i === (thing.length - 1) ? '' : ','}`;
    }

    toReturn += ']';
    return toReturn;
  }

  if (typeof thing === 'number') {
    return thing.toString();
  }

  if (typeof thing === 'function') {
    return thing.toString();
  }

  if (typeof thing === 'object') {
    let toReturn = '{';
    const keys = Object.keys(thing);

    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      let val = toStr(thing[key]);

      if (typeof thing[key] === 'object') {
        val = addTab(toStr(thing[key]));
      }

      toReturn += `\n  ${fixKey(key)}: ${val}${i === (keys.length - 1) ? '\n' : ','}`;
    }

    toReturn += '}';
    return toReturn;
  }

  if (typeof thing === 'string') {
    thing = thing.replace(/"/g, '\\"');
    return `"${thing}"`;
  }

  return String(thing);
}

exports.toStr = toStr;
