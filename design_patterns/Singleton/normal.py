from ultralytics import YOLO

class YOLOModel:
    def __init__(self):
        self.model = YOLO("yolo11n.pt")
        print("Calling YOLO.....")

class ImageService:
    def __init__(self):
        self.yolo = YOLOModel()

class VideoService:
    def __init__(self):
        self.yolo = YOLOModel()

img = ImageService()
vid = VideoService()

print(img.yolo.model is vid.yolo.model)