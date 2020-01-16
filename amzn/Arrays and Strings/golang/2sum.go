package main

import (
	"fmt"
)

func main() {
	res := twoSum([]int{2, 7, 11, 15}, 9) // [0,1] 
	fmt.Printf("Hello, playground %+v", res)
}

func twoSum(nums []int, target int) []int {
	compliments := make(map[int]int,len(nums))
	
	for i, n := range nums {
		if j ,ok := compliments[target-n];ok {
			return []int{j,i}
		}
		compliments[n] = i 
	}
	return nil
}
