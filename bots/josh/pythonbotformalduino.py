import string
import random
#f = "0001.txt"
#f.open()
def charselect():
    symbols="\,./`#';][=-]'`"
    symbols = string.ascii_lowercase+string.digits+symbols
    return(symbols[random.randint(0,len(symbols))])

def delay():
    return(str(random.randint(1,50)))

def event():
    for i in range (0,50):
        print("STRING " + charselect())
        print("DELAY " + delay())
event()
#f.close()
