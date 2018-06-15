# Creating functions in Python

# Countdown - Create a function that accepts a number as an input.  Return a new array that counts down by one, from the number (as arrays 'zero'th element) down to 0 (as the last element).  For example countDown(5) should return [5,4,3,2,1,0].
def countdown(x):
    newarr = []
    for i in range(x, -1, -1):
        newarr.append(i)
    return newarr

# Print and Return - Your function will receive an array with two numbers. Print the first value, and return the second.
def print_return(a,b):
    print(a)
    return b

# First Plus Length - Given an array, return the sum of the first value in the array, plus the array's length.
def plus_length(list):
    return list[0] + len(list)

# Values Greater than Second - Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value.  Print how many values this is.  If the array is only element long, have the function return False
def greater_than_second(arr):
    newarr = []
    count = 0
    for i in arr:
        if i > arr[1]:
            newarr.append(i)
            count += 1
    return newarr
    print(count)

# This Length, That Value - Given two numbers, return array of length num1 with each value num2.  Print "Jinx!" if they are same.
def this_that(a,b):
    arr = []
    if a == b:
        print("Jinx!")
    for count in range(0,a,1):
        if count < a:
            arr.append(b)
    return arr
