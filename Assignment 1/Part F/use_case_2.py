from PIL import Image, ImageFilter

def process_image(input_image_path, output_image_path):
    image = Image.open(input_image_path)
    processed_image = image.filter(ImageFilter.BLUR)
    processed_image.save(output_image_path)

if __name__ == '__main__':
    input_image_path = 'input.jpg'
    output_image_path = 'output.jpg'
    process_image(input_image_path, output_image_path)