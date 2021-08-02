import csv
import json

# csv file name
csvPath = 'FormResponses.csv'
jsonPath = 'events_011.json'

keys = ["tags", "date", "time", "description", "additional_info", "registration", "link"]

  
def makeJSON(csvPath, jsonPath):
    
    data = {} 

    # initializing the titles and rows list
    fields = []
    rows = []
    
    # reading csv file
    with open(csvPath, 'r', encoding='utf-8') as csvfile:
        # creating a csv reader object
        csvreader = list(csv.DictReader(csvfile))
        # print(csvreader)
      
        for i in range(1,8):
            key = keys[i-1]
            data[key] = list(csvreader[0].values())[i]
    
    with open(jsonPath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data))



     
        print(csvreader)
    

makeJSON(csvPath, jsonPath)
    

 

