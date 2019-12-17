/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!needle) {
        return 0;
    }

    const lastIndex = haystack.length - (needle.length - 1);
    for (let i = 0; i < lastIndex; i++) {
        let doContinue = false;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                doContinue = true;
                break;
            }
        }

        if (!doContinue) {
            return i;
        }
    }

    return -1;
};
