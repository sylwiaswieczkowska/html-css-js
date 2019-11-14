const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts() {
    const response = await fetch(url);
    if (response.status === 200) {
        response.json().then(logReceivedData);
    }
}

function logReceivedData(posts) {
    console.log(posts);
}

getPosts();
creatPost();

async function creatPost() {
    const body = {
        userId: 1,
        title: "New post",
        body: "Test"
    };
    const options = {
        method: "POST",
        body: JSON.stringify(body),// Json.parse()
        headers: {
            "content-type": "application/json"
        }
    };
    const response = await fetch(url, options);
    console.log(options);
    if (response.status === 201) {
        response.json().then(logReceivedData);
    }
}