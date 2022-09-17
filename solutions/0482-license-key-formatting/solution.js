/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const num_chars = k;
    const str = s.replace(/-/g, '').toUpperCase();

    var length = str.length;
    const sub_str  = [];
    while (length > 0) {
        sub_str.push(str.substring(length - num_chars, length));
        length = length - num_chars;
    }
    
    return sub_str.reverse().join('-');
};
