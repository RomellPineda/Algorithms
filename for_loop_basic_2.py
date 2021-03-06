# Writing functions in Python

# Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big". Example: makeItBig([-1, 3, 5, -5]) returns that same array, changed to [-1, "big", "big", -5].
def biggie(arr):
    for i in range(len(arr)):
        if arr[i] > 0:
            arr[i] = "big"
    return arr

# Count Positives - Given an array of numbers, create a function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.  (Note that zero is not considered to b a positive number).
def positives(arr):
    count = 0
    for i in arr:
        if i > 0:
            count += 1
    arr[len(arr) - 1] = count
    return arr

# SumTotal - Create a function that takes an array as an argument and returns the sum of all the values in the array.  For example sumTotal([1,2,3,4]) should return 10
def sum_total(arr):
    total = 0
    for i in arr:
        total = total + i
    return total

# Average - Create a function that takes an array as an argument and returns the average of all the values in the array.  For example multiples([1,2,3,4]) should return 2.5
def average(arr):
    total = 0
    for i in arr:
        total += i
return total / len(arr)

# Length - Create a function that takes an array as an argument and returns the length of the array.  For example length([1,2,3,4]) should return 4
def length(arr):
    return len(arr)

# Minimum - Create a function that takes an array as an argument and returns the minimum value in the array.  If the passed array is empty, have the function return false.  For example minimum([1,2,3,4]) should return 1; minimum([-1,-2,-3]) should return -3.
def minimum(arr):
    if arr == []:
        return "false"
    low = arr[0]
    for i in arr:
        if i < low:
            low = i
    return low

# Maximum - Create a function that takes an array as an argument and returns the maximum value in the array.  If the passed array is empty, have the function return false.  For example maximum([1,2,3,4]) should return 4; maximum([-1,-2,-3]) should return -1.
def max(arr):
    if arr == []:
        return "false"
    high = arr[0]
    for i in arr:
        if i > high:
            high = i
    return high

# UltimateAnalyze - Create a function that takes an array as an argument and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the array.
def ultimate_analyze(arr):
    total = 0
    low = arr[0]
    high = arr[0]
    for i in arr:
        if i < low:
            low = i
        if i > high:
            high = i
        total += i
    ave = total / len(arr)
    new = {"sum_total":total, "average":ave, "minimum":low, "length_of_array":len(arr)}
    return new

# ReverseList - Create a function that takes an array as an argument and return an array in a reversed order.  Do this without creating an empty temporary array.  For example reverse([1,2,3,4]) should return [4,3,2,1]. This challenge is known to appear during basic technical interviews.
def reverse(arr):
    for i in range(int(len(arr) / 2)):
        temp = arr[i]
        arr[i] = arr[len(arr) - 1 - i]
        arr[len(arr) - 1 - i] = temp
    return arr