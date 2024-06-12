// Longest Substring Without Repeating Characters
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seen = {};

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        if (seen[char] !== undefined && seen[char] >= start) {
            start = seen[char] + 1;
        }

        seen[char] = end;
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}