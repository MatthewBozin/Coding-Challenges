# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55

def find_uniq(arr):
    arr.sort()

    if(arr[0] != arr[len(arr)-1] and arr[0] != arr[len(arr)-2]):
        n = arr[0]
    else:
        n = arr[len(arr)-1]

    return n