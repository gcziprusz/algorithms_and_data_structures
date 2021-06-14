/**
 * @param { any } data
 * @param { Object } command
 */
const keyMap = ["$push", "$set", "$merge", "$apply"];
function update(data, command) {
  return walk(data, command);
}

function walk(data, command, pdata, commandkey) {
  // your code here
  for (let k in command) {
    if (keyMap.indexOf(k) !== -1) {
      switch (k) {
        case "$push":
          if (data instanceof Array) {
            data.push(...command[k]);
          } else {
            throw Error("no array");
          }
          break;
        case "$set":
          pdata[commandkey] = command[k];
          break;
        case "$merge":
          if (data instanceof Object) {
            pdata[commandkey] = Object.assign(data, command[k]);
          } else {
            throw Error("no Object");
          }
          break;
        case "$apply":
          pdata[commandkey] = command[k].call(null, pdata[commandkey]);
          break;
      }
    } else {
      if (command[k]) {
        walk(data[k], command[k], data, k);
      }
    }
  }
  return data;
}
