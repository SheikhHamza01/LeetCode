class Solution {
public:
    bool isPalindrome(int x) {
        if (x < 0) return false; // negative numbers are not palindromes

        string s = to_string(x);
        string rev = s;
        reverse(rev.begin(), rev.end());
        return s == rev;
    }
};
