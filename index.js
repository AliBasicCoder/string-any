
function fixKey(key) {
  if (/[^\w]/.test(key) || /\d/.test(key)) {
    return `"${key}"`;
  }
  return key;
}

function addTab(str) {
  let res = str.replace(/\r\n/g, '\n');
  res = res.replace(/\r/g, '\n');
  const arr = res.split('\n');

  const callback = (item, i) => {
    if (!(i === (arr.length - 1) || i === 0)) {
      item = '   ' + item;
    }
    if (i === (arr.length - 1)) {
      item = `  ${item}`;
    }
    return item;
  }

  return arr.map(callback).join('\n');
}

function toStr(thing) {

  if (thing === null) {
    return 'null';
  }

  if (Array.isArray(thing)) {
    let toReturn = '[';

    thing.forEach(
      (value, i) => {
        const comma = i === (thing.length - 1) ? '' : ',';
        toReturn += `${toStr(value)}${comma}`;
      }
    );

    toReturn += ']';
    return toReturn;
  }

  if (typeof thing === 'number' || typeof thing === 'function') {
    return thing.toString();
  }

  if (typeof thing === 'object') {
    let toReturn = '{';
    const keys = Object.keys(thing);

    keys.forEach(
      (key, i) => {
        const elm = thing[key];
        let val = toStr(elm);

        if (typeof elm === 'object') {
          val = addTab(toStr(elm));
        }

        const comma = i === (keys.length - 1) ? '\n' : ',';

        toReturn += `\n  ${fixKey(key)}: ${val}${comma}`;
      }
    );

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
