from PIL import Image, ImageChops
import os

# Folder where your logos are
input_folder = "raw_logos/"
output_folder = "cleaned_logos/"
os.makedirs(output_folder, exist_ok=True)

def trim_whitespace(image: Image.Image) -> Image.Image:
    bg = Image.new(image.mode, image.size, (0, 0, 0, 0))
    diff = ImageChops.difference(image, bg)
    bbox = diff.getbbox()
    if bbox:
        return image.crop(bbox)
    return image

# Set max width instead of height
max_width = 160

for filename in os.listdir(input_folder):
    if not filename.lower().endswith(('.png', '.jpg', '.jpeg')):
        continue

    img_path = os.path.join(input_folder, filename)
    img = Image.open(img_path).convert("RGBA")
    trimmed = trim_whitespace(img)

    # Resize to max width while maintaining aspect ratio
    w, h = trimmed.size
    if w > max_width:
        ratio = max_width / w
        trimmed = trimmed.resize((max_width, int(h * ratio)), Image.Resampling.LANCZOS)

    output_path = os.path.join(output_folder, filename)
    trimmed.save(output_path)

print("✅ Done. Logos saved to:", output_folder)
