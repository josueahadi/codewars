def descending_order(num):
    string_num = str(num)
    sorted_digits = sorted(string_num, reverse=True)
    reversed_num =  int("".join(sorted_digits))
    return reversed_num