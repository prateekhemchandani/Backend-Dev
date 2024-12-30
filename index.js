require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;
const githubDB = {
  "login": "prateekhemchandani",
  "id": 127222207,
  "node_id": "U_kgDOB5VBvw",
  "avatar_url": "https://avatars.githubusercontent.com/u/127222207?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/prateekhemchandani",
  "html_url": "https://github.com/prateekhemchandani",
  "followers_url": "https://api.github.com/users/prateekhemchandani/followers",
  "following_url": "https://api.github.com/users/prateekhemchandani/following{/other_user}",
  "gists_url": "https://api.github.com/users/prateekhemchandani/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/prateekhemchandani/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/prateekhemchandani/subscriptions",
  "organizations_url": "https://api.github.com/users/prateekhemchandani/orgs",
  "repos_url": "https://api.github.com/users/prateekhemchandani/repos",
  "events_url": "https://api.github.com/users/prateekhemchandani/events{/privacy}",
  "received_events_url": "https://api.github.com/users/prateekhemchandani/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Prateek",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 2,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2023-03-07T14:48:01Z",
  "updated_at": "2024-12-30T07:59:12Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/great', (req, res) => {
    res.send('prateek');
});

app.get('/github', (req,res)=>{
    res.json(githubDB);
})
  
app.get('/login', (req,res)=>{
    res.send('<h1>Welcome to my login page</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`This app is listening on port ${port}`);
});
