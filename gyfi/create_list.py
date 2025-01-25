import os
import json

gif_folder = './gifs'

gifs = [f for f in os.listdir(gif_folder) if f.endswith('.gif')]

with open('gif-list.json', 'w') as json_file:
    json.dump(gifs, json_file)

print(f'Vygenerovaný seznam GIFů: {gifs}')
