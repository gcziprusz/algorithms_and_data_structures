package main

import (
	"fmt"
)


func lengthOfLongestSubstring(s string) int {
	maxLen :=0
	stash := make(map[byte]bool)
	for l,r:=0,0; r < len(s); r++ {
		if _, ok := stash[s[r]];ok {
			l++
			delete(stash,s[r])
		} else {
		   stash[s[r]] = true
		   maxLen = max(maxLen, r-l)
		}
	}
    return maxLen
}

func max(a,b int) int{
	if a > b {
		return a
	}
	return b
}
func lengthOfLongestSubstring(s string) int {
    // making a map the go way
    m := make(map[byte]int)
    res := 0

    for l, r := 0, 0; r < len(s); r++ {
        if index, ok := m[s[r]]; ok {
            // only update the left pointer if 
            // it's behind the last position of the visited character
            l = max(l, index)
        }
        res = max(res, r-l+1)
        m[s[r]] = r + 1
    }
    return res
}

func main() {
	fmt.Println(lengthOfLongestSubstring("abcabcbb")==3) 
	fmt.Println(lengthOfLongestSubstring("bbbbb") ==1)
	fmt.Println(lengthOfLongestSubstring("pwwkew")==3)
	fmt.Println(lengthOfLongestSubstring("")==0)
}
