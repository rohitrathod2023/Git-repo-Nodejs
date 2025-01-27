# GitHub Repository with Node.js and Redis

This project is a Node.js application that uses Redis to cache the star count of a GitHub repository. The app allows you to enter the GitHub repository in the format `owner/repo` (e.g., `facebook/react`), and it will fetch the star count of that repository. The first time a repository's star count is requested, the app will fetch the data from GitHub. Subsequent requests for the same repository will return the cached star count from Redis.

## Features

- Enter the GitHub repository name in the format: `owner/repo`
- The app will show the number of stars for the repository.
- The first request will fetch data from the GitHub API, while subsequent requests will fetch data from Redis for faster response times.
- Displays the time it took to retrieve the data (both from GitHub and Redis).

## Tech Stack

- **Node.js** for the backend server
- **Express** for routing and handling HTTP requests
- **Redis** for caching GitHub repository data
- **GitHub API** to fetch repository star count
- **HTML/CSS** and **JavaScript** for the frontend interface

## Prerequisites

Before you run this project, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v12 or higher)
- [Redis](https://redis.io/) (running on localhost or a remote server)
- [npm](https://www.npmjs.com/) (Node Package Manager)

## Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/rohitrathod2023/Git-repo-Nodejs.git
   cd Git-repo

![Screenshot first time loading](/before.png)

![Screenshot Second time loading](/after.png)


