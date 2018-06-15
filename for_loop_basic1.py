# Basic for loops in Python

# 1 Basic - Print all the numbers/integers from 0 to 150.
for count in range(151):
    print(count)

# 2 Multiples of Five - Print all the multiples of 5 from 5 to 1,000,000.
for count in range(5,1000001):
    if count % 5 == 0:
        print(count)

# 3 Counting, the Dojo Way - Print integers 1 to 100.  If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".
for count in range(1,101):
    if count % 5 == 0 and count % 10 != 0:
        print("Coding")
    elif count % 5 == 0 and count % 10 == 0:
        print("Coding Dojo")
    else:
        print(count)


# 4 Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
totes = 0
for i in range(500001):
    if i % 2 == 1:
        totes += i
print(totes)

# 5 Countdown by Fours - Print positive numbers starting at 2018, counting down by fours (exclude 0).
for i in range(2018,0,-4):
    print(i)

# 6 Flexible Countdown - Based on earlier "Countdown by Fours", given lowNum, highNum, mult, print multiples of mult from lowNum to highNum, using a FOR loop.  For (2,9,3), print 3 6 9 (on successive lines)
def flex_count(lownum, highnum, mult):
    for x in range(lownum, highnum + 1):
        if x % mult == 0:
            print(x)
