// What is dynamic programming ? Write a program to find the nth fibonacci number (1, 1, 2, 3, 5, 8 ….).
// Very common question . Almost always asked . This is often your first chance to impress the interviewer with some Dynamic Programming swag .

// As Js Safe number range is between 2^-53 to 2⁵³. 
// Fibonacci beyond 85 will give errorneous result
var fibo = function(computed, number) {
if (number < 3) {
 return 1;
 }
 // If fibonacci for this this position is calculated just return.
 // This is called memoization (Dynamic Programming)
 if (computed[number]) {
 return computed[number]
 } else {
 computed[number — 1] = fibo(computed, number — 1);
 computed[number — 2] = fibo(computed, number — 2);
 return computed[number — 1] + computed[number — 2];
 }
}
