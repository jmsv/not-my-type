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

def datagen(data, count):
    data = {}
    data['key'] = genkey()
    data['time'] = gentime(count)
    data['type'] = gentype()
    return(data)

def gentime(count):
    increment = 20
    return (count*increment)

def genkey():
    keys = list(string.ascii_lowercase)
    return(keys[random.randint(0,25)])

def gentype():
    if random.randint(0,1)==1:
        return("keyup")
    else:
        return("keydown")

def eventgen():
    num = 100
    count = 0
    while count < num:
        events.append(datagen(keypress,count))
        count+=1
    return(events)

def datasetgen(num):
    count = 0
    data = []
    while count < num:
        data.append(eventgen())
        count+=1
    return(data)

filename = "dataone.txt"
f = open(filename, "w+")
jsondata=json.dumps(datasetgen(10))
print(jsondata)
f.write(jsondata)
f.close()
