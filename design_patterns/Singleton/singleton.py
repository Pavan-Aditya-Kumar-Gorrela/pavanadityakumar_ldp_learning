from ultralytics import YOLO

class YOLOModel:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            print("Calling YOLO...")
            cls._instance = super().__new__(cls)
            cls._instance.model = YOLO("yolo11n.pt")
        return cls._instance

class ImageService:
    def __init__(self):
        self.yolo = YOLOModel()

class VideoService:
    def __init__(self):
        self.yolo = YOLOModel()

img = ImageService()
vid = VideoService()

print(img.yolo.model is vid.yolo.model)