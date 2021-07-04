
function myAtob(encoded) {
  if(encoded.length % 4 !== 0) {
    throw new Error();
  }

  const b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

  const chunks = encoded.match(/.{1,4}/g) ?? [];

  let binary = ''
  for (let chunk of chunks) {
    const paddingCount = (chunk.match(/=/g) || []).length

    let chunkBinary = chunk.split('').map(c => b64.indexOf(c).toString(2).padStart(6, '0')).join('');

    switch(paddingCount) {
      case 1: 
        chunkBinary = chunkBinary.substr(0, 16)
      case 2:
        chunkBinary = chunkBinary.substr(0, 8)
    }

    binary += chunkBinary;
  }

  const chunkedBinary = binary.match(/.{1,8}/g) ?? [];

  let value = '';
  for(const binary of chunkedBinary) {
    const charValue = parseInt(binary, 2)
    value += String.fromCharCode(charValue)
  }

  return value;
}
