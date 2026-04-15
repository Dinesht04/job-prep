# Binary Search

Searching Algorithm

time -> O(log n)
space -> o(1);

start, end, middle.

while start is smaller than equal to end
    calculate mid by -> start + (end-start)/2
    if target > nums[mid]
        s = mid + 1
    if target < nums[mid]
        e = mid - 1
    if target === nums[mid]
        return
