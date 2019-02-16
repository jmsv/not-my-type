import random
import string
import json
keypress = {}
events= []
'''
json
{"events": [{"key": "r","time": 0,"event": "keydown"},
        {
            "key": "r",
            "time": 24,
            "event": "keyup"
        },
        {
            "key": "j",
            "time": 67,
            "event": "keydown"
        },
        {
            "key": "j",
            "time": 81,
            "event": "keyup"
        }
    ]
}
'''

def fullgen(data, count):
    data['key'] = genkey()
    data['time'] = gentime(count)
    data['type'] = gentype()
    return(json.dumps(data))

def gentime(lasttime):
    increment = 0.2
    return (lasttime + increment)

def genkey():
    keys = list(string.ascii_lowercase)
    return(keys[random.randint(0,25)])

def gentype():
    if random.randint(0,1)==1:
        return("keyup")
    else:
        return("keydown")

count = 0
while count < 10:
    events.append(fullgen(keypress,count))
    count+=1
print(events)
