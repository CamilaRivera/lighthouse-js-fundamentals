function loopyLighthouse(range, multiples, words) {
  let elm = "";
  for (let i = range[0]; i <= range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      elm = words[0] + words[1];
    } else if (i % multiples[0] === 0) {
      elm = words[0];
    }
    else if (i % multiples[1] === 0) {
      elm = words[1];
    }
    else {
      elm = i;
    }

    console.log(elm);
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);