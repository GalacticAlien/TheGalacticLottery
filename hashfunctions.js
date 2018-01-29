
function hex2a(hex) {
    var str = '';
    for (var i = 0; i < hex.length; i += 2) str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}


function SHA256(s){
    var chrsz   = 8;
    var hexcase = 0;

    function safe_add (x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }

 


    function S (X, n) { return ( X >>> n ) | (X << (32 - n)); }
    function R (X, n) { return ( X >>> n ); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }

 


    function core_sha256 (m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for ( var i = 0; i<m.length; i+=16 ) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
            for ( var j = 0; j<64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }

 


    function str2binb (str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for(var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i%32);
        }
        return bin;
    }

 


    function Utf8Encode(string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }

 
    function binb2hex (binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for(var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8+4)) & 0xF) +
            hex_tab.charAt((binarray[i>>2] >> ((3 - i%4)*8  )) & 0xF);
        }
        return str;
    }


    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}


var RMDsize   = 160;
var X = new Array();

function ROL(x, n){
    return new Number ((x << n) | ( x >>> (32 - n)));
}

function F(x, y, z){
    return new Number(x ^ y ^ z);
}

function G(x, y, z){
    return new Number((x & y) | (~x & z));
}

function H(x, y, z){
    return new Number((x | ~y) ^ z);
}

function I(x, y, z){
    return new Number((x & z) | (y & ~z));
}

function J(x, y, z){
    return new Number(x ^ (y | ~z));
}

function mixOneRound(a, b, c, d, e, x, s, roundNumber){
    switch (roundNumber){
        case 0 : a += F(b, c, d) + x + 0x00000000; break;
        case 1 : a += G(b, c, d) + x + 0x5a827999; break;
        case 2 : a += H(b, c, d) + x + 0x6ed9eba1; break;
        case 3 : a += I(b, c, d) + x + 0x8f1bbcdc; break;
        case 4 : a += J(b, c, d) + x + 0xa953fd4e; break;
        case 5 : a += J(b, c, d) + x + 0x50a28be6; break;
        case 6 : a += I(b, c, d) + x + 0x5c4dd124; break;
        case 7 : a += H(b, c, d) + x + 0x6d703ef3; break;
        case 8 : a += G(b, c, d) + x + 0x7a6d76e9; break;
        case 9 : a += F(b, c, d) + x + 0x00000000; break;
        default : document.write("Bogus round number"); break;
    }  
    a = ROL(a, s) + e;
    c = ROL(c, 10);
    a &= 0xffffffff;
    b &= 0xffffffff;
    c &= 0xffffffff;
    d &= 0xffffffff;
    e &= 0xffffffff;
    var retBlock = new Array();
    retBlock[0] = a;
    retBlock[1] = b;
    retBlock[2] = c;
    retBlock[3] = d;
    retBlock[4] = e;
    retBlock[5] = x;
    retBlock[6] = s;
    return retBlock;
}

function MDinit (MDbuf){
    MDbuf[0] = 0x67452301;
    MDbuf[1] = 0xefcdab89;
    MDbuf[2] = 0x98badcfe;
    MDbuf[3] = 0x10325476;
    MDbuf[4] = 0xc3d2e1f0;
}

var ROLs = [
 [11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8],
 [ 7,  6,  8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12],
 [11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5],
 [11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12],
 [ 9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6],
 [ 8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6],
 [ 9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11],
 [ 9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5],
 [15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8],
 [ 8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11]
];
var indexes = [
 [ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15],
 [ 7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8],
 [ 3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12],
 [ 1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2],
 [ 4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13],
 [ 5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12],
 [ 6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2],
 [15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13],
 [ 8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14],
 [12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]
];

function compress (MDbuf, X){
    blockA = new Array();
    blockB = new Array();
    var retBlock;
    for (var i=0; i < 5; i++){
        blockA[i] = new Number(MDbuf[i]);
        blockB[i] = new Number(MDbuf[i]);
    }
    var step = 0;
    for (var j = 0; j < 5; j++){
        for (var i = 0; i < 16; i++){
            retBlock = mixOneRound(
            blockA[(step+0) % 5],
            blockA[(step+1) % 5],   
            blockA[(step+2) % 5],   
            blockA[(step+3) % 5],   
            blockA[(step+4) % 5],  
            X[indexes[j][i]], 
            ROLs[j][i],
            j
            );
            blockA[(step+0) % 5] = retBlock[0];
            blockA[(step+1) % 5] = retBlock[1];
            blockA[(step+2) % 5] = retBlock[2];
            blockA[(step+3) % 5] = retBlock[3];
            blockA[(step+4) % 5] = retBlock[4];
            step += 4;
        }
    }
step = 0;
for (var j = 5; j < 10; j++){
    for (var i = 0; i < 16; i++){  
        retBlock = mixOneRound(
        blockB[(step+0) % 5], 
        blockB[(step+1) % 5], 
        blockB[(step+2) % 5], 
        blockB[(step+3) % 5], 
        blockB[(step+4) % 5],  
        X[indexes[j][i]], 
        ROLs[j][i],
        j
        );
        blockB[(step+0) % 5] = retBlock[0];
        blockB[(step+1) % 5] = retBlock[1];
        blockB[(step+2) % 5] = retBlock[2];
        blockB[(step+3) % 5] = retBlock[3];
        blockB[(step+4) % 5] = retBlock[4];
        step += 4;
    }
}
blockB[3] += blockA[2] + MDbuf[1];
MDbuf[1]  = MDbuf[2] + blockA[3] + blockB[4];
MDbuf[2]  = MDbuf[3] + blockA[4] + blockB[0];
MDbuf[3]  = MDbuf[4] + blockA[0] + blockB[1];
MDbuf[4]  = MDbuf[0] + blockA[1] + blockB[2];
MDbuf[0]  = blockB[3];
}

function zeroX(X)
{
  for (var i = 0; i < 16; i++) { X[i] = 0; }
}

function MDfinish (MDbuf, strptr, lswlen, mswlen)
{
  var X = new Array(16);
  zeroX(X);

  var j = 0;
  for (var i=0; i < (lswlen & 63); i++)
  {
    X[i >>> 2] ^= (strptr.charCodeAt(j++) & 255) << (8 * (i & 3));
  }

  X[(lswlen >>> 2) & 15] ^= 1 << (8 * (lswlen & 3) + 7);

  if ((lswlen & 63) > 55)
  {
    compress(MDbuf, X);
    var X = new Array(16);
    zeroX(X);
  }

  X[14] = lswlen << 3;
  X[15] = (lswlen >>> 29) | (mswlen << 3);

  compress(MDbuf, X);
}

function BYTES_TO_DWORD(fourChars)
{
  var tmp  = (fourChars.charCodeAt(3) & 255) << 24;
  tmp   |= (fourChars.charCodeAt(2) & 255) << 16;
  tmp   |= (fourChars.charCodeAt(1) & 255) << 8;
  tmp   |= (fourChars.charCodeAt(0) & 255);  

  return tmp;
}

function RMD(message)
{
  var MDbuf   = new Array(RMDsize / 32);
  var hashcode   = new Array(RMDsize / 8);
  var length;  
  var nbytes;

  MDinit(MDbuf);
  length = message.length;

  var X = new Array(16);
  zeroX(X);

  var j=0;
  for (var nbytes=length; nbytes > 63; nbytes -= 64)
  {
    for (var i=0; i < 16; i++)
    {
      X[i] = BYTES_TO_DWORD(message.substr(j, 4));
      j += 4;
    }
    compress(MDbuf, X);
  }

  MDfinish(MDbuf, message.substr(j), length, 0);

  for (var i=0; i < RMDsize / 8; i += 4)
  {
    hashcode[i]   =  MDbuf[i >>> 2]   & 255;
    hashcode[i+1] = (MDbuf[i >>> 2] >>> 8)   & 255;
    hashcode[i+2] = (MDbuf[i >>> 2] >>> 16) & 255;
    hashcode[i+3] = (MDbuf[i >>> 2] >>> 24) & 255;
  }

  return hashcode;
}

function toHex32(x)
{
  var hexChars = "0123456789abcdef";
  var hex = "";

  for (var i = 0; i < 2; i++)
  {
    hex = String(hexChars.charAt(x & 0xf)).concat(hex);
    x >>>= 4;
  }

  return hex;
}

function toRMDstring(hashcode)
{
  var retString = "";

  for (var i=0; i < RMDsize/8; i++)
  {
    retString += toHex32(hashcode[i]);
  }  

  return retString;  
}


function RMDstring(message)
{
  var hashcode = RMD(message);
  var retString = "";

  for (var i=0; i < RMDsize/8; i++)
  {
    retString += toHex32(hashcode[i]);
  }  

  return retString;  
}


    
    function enc64_58(entrada) {
      var test_max_val = 0;
      var ALPHABET_16 = '0123456789ABCDEF';
      var ALPHABET_58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      var ALP_16_MAP = {};
      var array_64 = [];
      var array_58 = [];
      for (var i = 0; i < ALPHABET_16.length; i++) ALP_16_MAP[ALPHABET_16.charAt(i)] = i; // Ini alphabet map array
      entrada = entrada.toUpperCase();

      for (var t = entrada.length - 1; t >= 0; t = t - 3) {
        if (t > 1) var hex1 = ALP_16_MAP[entrada.charAt(t - 2)]; else var hex1 = 0;
        if (t > 0) var hex2 = ALP_16_MAP[entrada.charAt(t - 1)]; else var hex2 = 0;
        var tiple_hex = (hex1 * 256) + (hex2 * 16) + ALP_16_MAP[entrada.charAt(t)];
        var low_val = tiple_hex % 64;
        var hig_val = tiple_hex >> 6; 
        array_64.unshift(low_val);
        if (hig_val > 0 || t > 2) array_64.unshift(hig_val);
      }
      array_64.reverse(); 
      var output_base = 58;
      for (var base = 63; base >= output_base; base--) {
        
        array_58 = []; for (var t = 0; t < array_64.length; t++) array_58.push(0);
        var buffer_mult = $.extend(true, [], array_58);
        buffer_mult[0] = 1;
      
        for (var cdig = 0; cdig < buffer_mult.length; cdig++) {
          
          for (var t = cdig; t > 0; t--) buffer_mult[t] += (buffer_mult[t - 1] || 0);
         
          for (var t = 0; t < cdig; t++) {
            if (buffer_mult[t] >= base) {
              var carry_v = 0;
              var q = t;
              do {
                buffer_mult[q] += carry_v;
                if (q < cdig - 1) { 
                  carry_v = Math.floor(buffer_mult[q] / base);
                  buffer_mult[q] %= base;
                } else { carry_v = 0; }
                q++;
              } while (carry_v > 0);
            }
          }
         
          for (var t = 0; t < buffer_mult.length; t++) {
            var carry_v = buffer_mult[t] * (array_64[cdig] || 0); 
            var q = t;
            while (carry_v > 0) { 
              if (q >= array_58.length) array_58.push(0);
              array_58[q] += carry_v;
              carry_v = Math.floor(array_58[q] / base);
              array_58[q] %= base;
              q++;
            }
          }
        }
        array_64 = $.extend(true, [], array_58);
      }
      array_58.reverse();
      var string_result = '';
      for (var t = 0; t < array_58.length; t++) string_result += ALPHABET_58.charAt(array_58[t]);
      return string_result;
    }
    function set_random_val(long_bytes) {
      var res = '';
      for (var t = 0; t < long_bytes; t++) {
        val_byte = Math.floor(Math.random() * 256);
        if (val_byte < 16) res += '0';
        res += val_byte.toString(16);
      }
      $('#id_input_addres').val(res);
    }
