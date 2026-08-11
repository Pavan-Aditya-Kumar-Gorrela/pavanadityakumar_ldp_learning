from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates

app = FastAPI()

templates = Jinja2Templates(directory='templates')

posts: list[dict] = [
    {
        "id" : 1,
        "author" : "Christopher Nolan",
        "title" : "Odessey",
        "content" : "My new film Odessey is a benchmark movie",
        "date_posted" : "12th August 2026"
    },
    {
        "id": 2,
        "author": "S.S Rajamouli",
        "title": "Varanasi",
        "content": "My new film Varanasi is a benchmark movie",
        "date_posted": "20th June 2027"
    }
]

@app.get("/", response_class= HTMLResponse)
@app.get("/posts", response_class= HTMLResponse, include_in_schema=False)
async def root():
    return f"<h1>{posts[0]["author"]}</h1>"

@app.get("/home", include_in_schema=False)
async def home(request: Request):
    return templates.TemplateResponse(request, "home.html", {"posts": posts, "title": "Home" })


@app.get("/api/posts")
async def get_posts():
    return posts