def fizzbuzz(num):
    if num % 3 == 0 and num % 5 != 0:
        return print("Fizz")
    elif num % 5 == 0 and num % 3 != 0:
        return print("Buzz")
    elif num % 5 == 0 and num % 3 == 0:
        return print("FizzBuzz")
    else:
        return print(num)

for x in range(100):
    fizzbuzz(x)
