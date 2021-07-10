
'''
    AUTHORS:
        Dinindu Thilakarathna [dininduwm@gmail.com]
'''

from csv import writer

def append_list_as_row(file_name, list_of_elem):
    # Open file in append mode
    with open(file_name, 'a+', newline='') as write_obj:
        # Create a writer object from csv module
        csv_writer = writer(write_obj)
        # Add contents of list as last row in the csv file
        csv_writer.writerow(list_of_elem)

# List of strings
row_contents = ['2021-06-30','20:00','Workflow test','TBA','TBA',0,'https://www.google.com/','workflow','Testing the workflow']
# Append a list as new line to an old csv file
append_list_as_row('data/data.csv', row_contents)