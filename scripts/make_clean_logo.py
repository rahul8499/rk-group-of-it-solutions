from PIL import Image, ImageDraw, ImageFilter

# Load the original logo
img = Image.open("public/rk-logo-original.jpg").convert("RGBA")
width, height = img.size

# Create a mask for the outer white background
# Start with a mask image with 0 (black)
mask = Image.new("L", (width, height), 0)

# We can floodfill from (0, 0) on the original RGB image to find the white background
# Create an RGB copy
rgb_copy = img.convert("RGB")

# Floodfill on a copy with a distinct color, say (255, 0, 255) magenta
draw = ImageDraw.Draw(rgb_copy)
draw.bitmap((0, 0), mask) # just ensuring init
ImageDraw.floodfill(rgb_copy, (0, 0), (255, 0, 255), thresh=25)
ImageDraw.floodfill(rgb_copy, (width - 1, 0), (255, 0, 255), thresh=25)
ImageDraw.floodfill(rgb_copy, (0, height - 1), (255, 0, 255), thresh=25)
ImageDraw.floodfill(rgb_copy, (width - 1, height - 1), (255, 0, 255), thresh=25)

# Pixels that became (255, 0, 255) are background!
# Let's create an alpha channel
r, g, b, a = img.split()
rgb_r, rgb_g, rgb_b = rgb_copy.split()

# Where rgb_r == 255 and rgb_g == 0 and rgb_b == 255 -> background
alpha_pixels = []
for p_r, p_g, p_b in zip(rgb_r.getdata(), rgb_g.getdata(), rgb_b.getdata()):
    if p_r == 255 and p_g == 0 and p_b == 255:
        alpha_pixels.append(0)
    else:
        alpha_pixels.append(255)

alpha_channel = Image.new("L", (width, height))
alpha_channel.putdata(alpha_pixels)

# Apply a very gentle smooth to avoid jagged aliasing
alpha_smooth = alpha_channel.filter(ImageFilter.SMOOTH)

img.putalpha(alpha_smooth)

# Save full transparent image
img.save("public/rk-logo-full.png", "PNG")

# 1. High-Res Emblem Icon (Top 3D Monogram)
# Bounding box is (280, 105, 735, 652)
emblem = img.crop((280, 105, 735, 652))
emblem.save("public/rk-emblem.png", "PNG")

# 2. Complete Logo (Emblem + Text)
full_logo = img.crop((90, 105, 935, 930))
full_logo.save("public/rk-logo.png", "PNG")

print("Created public/rk-logo.png and public/rk-emblem.png successfully!")
