

## Link
[Kata](https://www.codewars.com/kata/5bb148b840196d1be50000b1/train/javascript/5facedcb3895b90032817cc6)

## Task:

Your task is to write the word to number converter. Digits in the number should match letters in the word. Plus generated number should be the smallest possible number you can get.

 1) Words will contain of maximum 10 distinct letters, but word can be any length, even longer than 10 characters long.
 2) Number can NOT start with 0
 3) Same letters share the same digit regardless of case
 4) For empty string return 0

## Examples:

"A" -> 1 - OK

"ABA" -> 353 - WRONG ( number is OK, but it's not the smallest number )

"ABA" -> 333 - WRONG ( different letters map to same digits )

"ABA" -> 357 - WRONG ( same letters map to different digits )
