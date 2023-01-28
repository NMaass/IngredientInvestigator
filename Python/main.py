import cv2
import pytesseract

# Read the image file
image = cv2.imread("image.png")

# Run tesseract OCR on the image
text = pytesseract.image_to_string(image)

# Print the extracted text
print(text)
