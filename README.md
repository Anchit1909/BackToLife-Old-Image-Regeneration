<a href="https://back-to-life-old-image-regeneration.vercel.app/">
  <img alt="BackToLife – Regenerate old images" src="/public/screenshot.png">
  <a href="https://back-to-life-old-image-regeneration.vercel.app/">
    <h1 align="center">BackToLife</h1>
  </a>
</a>

<p align="center">
  Regenerate old images with the help of AI
</p>

<p align="center">
  <a href="https://twitter.com/anchit1909">
    <img src="https://img.shields.io/twitter/follow/anchit1909?style=flat&label=anchit1909&logo=twitter&color=0bf&logoColor=fff" alt="Anchit SinhaTwitter follower count" />
  </a>
  <a href="https://github.com/Anchit1909/BackToLife-Old-Image-Regeneration">
    <img src="https://img.shields.io/github/stars/Anchit1909/BackToLife-Old-Image-Regeneration?label=Anchit1909%2FBackToLife" alt="BackToLife repo star count" />
  </a>
</p>

<p align="center">
  <a href="#introduction"><strong>Introduction</strong></a> ·
  <a href="#how-it-works"><strong>How It Works</strong></a> ·
  <a href="#tech-stack"><strong>Tech Stack</strong></a> ·
  <a href="#running-locally"><strong>Running Locally</strong></a> ·
  <a href="#author"><strong>Author</strong></a>
</p>
<br/>

## Introduction

BackToLife is a modern day image regeneration app that allows users to restore old photos by removing scratches and other damage. The app leverages Microsoft's powerful "Bring old images back to life" machine learning model, which is hosted on ReplicateAI.

## How it works

It uses an ML model from Microsoft "Bring old images back to life" on Replicate to remove scratches from old images. This application gives you the ability to submit link of any photo, which will send it through this ML Model using a Next.js API route, and return your restored photo.

## Tech Stack

- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Replicate](https://replicate.com) (AI API)

## Running Locally

### Cloning the repository to the local machine.

```bash
git clone
```

### Creating an account on Replicate to get an API key.

1. Go to [Replicate](https://replicate.com/) to make an account.
2. Click on your profile picture in the top right corner, and click on "Dashboard".
3. Click on "Account" in the navbar. And, here you can find your API token, copy it.

### Storing API key in .env file.

Create a file in root directory of project named **.env.local**. And store your API key in it, as shown in the .example.env file.

### Installing the dependencies.

```bash
npm install
```

### Running the application.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## Author

- Anchit Sinha ([@anchit1909](https://twitter.com/anchit1909))
