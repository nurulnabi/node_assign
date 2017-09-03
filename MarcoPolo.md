Marco Polo
This implementation of the logic is possibly the fastest way to do it.(as per my test)
The other implementation of it is to use modulo operator to find whether the numbers are divisible by 4,7 or by both. In this case as I know that the modulo operator is of O(m) complexity the whole program would then run in O(n×m) === O(n×n). Since in our case n = 1000000, the app will be really very slow as I tested the modulo implementation then it looks 3.5 seconds to complete. But the improved implementation just takes 0.5 seconds which is 7 fold faster than the previous one.

Note: the mentioned time was found on the computer having Dual core with 2 GHz.
