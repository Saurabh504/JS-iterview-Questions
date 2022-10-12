def fizzbuzz(cont):
    if cont % 3 == 0 and cont % 5 != 0:
        return print("Fizz")
    elif cont % 5 == 0 and cont % 3 != 0:
        return print("Buzz")
    elif cont % 5 == 0 and cont % 3 == 0:
        return print("FizzBuzz")
    else:
        return print(cont)

for x in range(100):
    fizzbuzz(x)
