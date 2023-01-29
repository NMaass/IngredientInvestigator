from PIL import Image
import pytesseract as pyt
from PIL import Image
import openai
import json

openai.api_key = "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"

#Functions
def hazard_description(ingredient):
    ''' Shows the hazard description '''
    response = openai.Completion.create(
    engine="text-davinci-002",
    prompt='What is {}? Write a paragraph on why it is dangerous and how it affects the human body in about 100 words'.format(ingredient),
    max_tokens=1024)

    # Extracting the hazard level from the response
    hazard_d = response.choices[0].text
    return hazard_d

def get_response(ingredients):
    '''  '''
    response = openai.Completion.create(
        engine="text-davinci-002",
        prompt=f'''For the list of ingredients:{ingredients}
                    list out the ingredients from the list above and for each ingredient in the list, rate the risk from 0 - 5 based on how good for health it is and the Safer Choice Criteria and the FDA regulations and give a short description on the ingredient
                    Give the answer in this format - (Ingredient name) (risk value) (Short Description) (new line character) ''',
        max_tokens=1024
    )
# Extracting the hazard level number
    # assuming that it's the last element of the response string
    dictionary = response.choices[0].text

    return dictionary

#Get Image
image_file = 'image2.jpeg'
im = Image.open(image_file)
im = im.convert('L')
text = pyt.image_to_string(im) #Plain text which was translated from the image
text = get_response(text)
ing = text
ingredient_dict = {}
hazard_total = 0
hazard_count = 0

ing = ing.split('\n')
hazard_lvl = ''
for sentence in ing:
    for char in sentence:
        if char.isdigit():
            hazard_lvl = int(char)
            if hazard_lvl == 5:
                ingredient_dict["Hazard Value"] = 5
                ingredient_dict["Hazard Text"] = "Extreme Risk!"
                average=-1
                break
            elif hazard_lvl == 4:
                ingredient_dict["Hazard Value"] = 4
                ingredient_dict["Hazard Text"] = 'Very High Risk'
                average=-1
                break
            else:
                hazard_total += hazard_lvl
                hazard_count += 1
    if hazard_lvl in [4,5]:
        break
if hazard_count != 0 and hazard_total != 0:
    average = round(hazard_total/hazard_count)
    ingredient_dict["Hazard Value"] = average

if round(average) == 0:
    ingredient_dict["Hazard Text"] = "Safe"
elif round(average) == 1:
    ingredient_dict["Hazard Text"] = "Low Risk"
elif round(average) == 2:
    ingredient_dict["Hazard Text"] = "Moderate Risk"
elif round(average) == 3:
    ingredient_dict["Hazard Text"] = "High Risk"

#To get the description
description = []
for sentence in ing:
    if sentence.strip() == '':
        continue
    description.append(sentence)

ingredient_dict["Ingredients"] = description #Final Dictionary
print(ingredient_dict)

#To convert the dictionary into a json file
with open("ingredients.json", "w") as outfile:
    json.dump(ingredient_dict, outfile)


