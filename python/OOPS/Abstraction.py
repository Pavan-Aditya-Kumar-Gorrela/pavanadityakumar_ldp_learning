# from abc import ABC, abstractmethod
#
# class Person(ABC):
#
#     @abstractmethod
#     def show_role(self):
#         pass
#
#
# class Coach(Person):
#
#     def show_role(self):
#         return "Coach"
#
# rahul_dravid = Coach()
# # ravi_shastri = Person()
#
# print(f"Rahul Dravid is Indian {rahul_dravid.show_role()}")















from abc import ABC , abstractmethod

class CloudStorage(ABC):
    @abstractmethod
    def file_upload(self, file_name:str, data: bytes)-> bool:
        pass
    @abstractmethod
    def generate_url(self, file_name:str, expiryInseconds:int)->str:
        pass

class AwsS3Bucket(CloudStorage):
    def __init__(self, bucket_name:str, region:str):
        self.bucket_name = bucket_name
        self.region = region

    def file_upload(self, file_name:str, data: bytes) -> bool:
        if not file_name:
            raise ValueError("file name cannot be empty")
        if not data:
            raise ValueError("cannot upload empty file")

        try:
            print(f"[AWS S3] Uploading {len(data)} bytes to bucket '{self.bucket_name}' via multi-part upload...")
            return True
        except Exception as e:
            print(f"Upload Failed - {e}")
            raise

    def generate_url(self, file_name:str, expiryInseconds:int) ->str:
        if expiryInseconds <= 0:
            raise ValueError("Expiry time must be greater than 0.")
        return f"https://{self.bucket_name}.s3.{self.region}.amazon.aws.com/{file_name}?expires={expiryInseconds}"

def backup_user_avatar(storage: CloudStorage, user_id :str):
    image_bytes = b"\x89PNG\r\n\x1a\n"
    try:
        if storage.file_upload(f"avatar/{user_id}.png", image_bytes):
            return storage.generate_url(f"avatar/{user_id}.png", 3600)
    except ValueError as e:
        print(f"Validation Error: {e}")
    except ConnectionError as e:
        print(f"Connection error: {e}")
    except RuntimeError as e:
        print(f"Runtime error: {e}")

s3 = AwsS3Bucket("user-media-upload", "us-east-1")
print(backup_user_avatar(s3,"pavan_630422"))