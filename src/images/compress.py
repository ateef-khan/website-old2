from glob import iglob
from PIL import Image

for file in iglob('**/*.jpg', recursive=True):
    print(file)
    im = Image.open(file)
    im.save(file, optimize=True, quality=85)