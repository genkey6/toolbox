import os

from beanie import init_beanie
from dotenv import load_dotenv
from motor.motor_asyncio import AsyncIOMotorClient
from server.database.model import Zoo

load_dotenv()
USERNAME = os.environ.get("MONGODB_USERNAME")
PASSWORD = os.environ.get("MONGODB_PASSWORD")
DB_URL = os.environ.get("MONGODB_URL")
DB_NAME = os.environ.get("MONGODB_DATABASE_NAME")


async def init_mongodb() -> None:
    client = AsyncIOMotorClient(f"mongodb+srv://{USERNAME}:{PASSWORD}@{DB_URL}/{DB_NAME}?retryWrites=true&w=majority")
    await init_beanie(database=client[DB_NAME], document_models=[Zoo])
