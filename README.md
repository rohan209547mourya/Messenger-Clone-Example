# Messenger-Clone Web Application


## About Application

It's clone application of Messenger by Facebook. This application contains all basic feature that a messaging application contains.

 - Authentication using Google, Github and credentials.
 - Profile Settings
 - Realtime messaging service
 - User can start new chat with any user.
 - User can create with minimum number of 3 people
 - User can delete the conversation


## Built with

* ![Next.js](https://img.shields.io/badge/-Next.js-%23000000?style=flat-square&logo=Next.js&logoColor=white)
* ![React](https://img.shields.io/badge/-React-%23282C34?style=flat-square&logo=React)
* ![npm](https://img.shields.io/badge/-npm-%23cb3837?style=flat-square&logo=npm&logoColor=white)
* ![TypeScript](https://img.shields.io/badge/-TypeScript-%233178c6?style=flat-square&logo=TypeScript&logoColor=white)
* ![Pusher](https://img.shields.io/badge/-Pusher-%23332d2d?style=flat-square&logo=Pusher&logoColor=white)
* ![Prisma](https://img.shields.io/badge/-Prisma-%231b222d?style=flat-square&logo=Prisma&logoColor=white)
* ![MongoDB](https://img.shields.io/badge/-MongoDB-%2347A248?style=flat-square&logo=MongoDB&logoColor=white)





# How to use 


## Prerequisites

Before you can start the web application, you need to have the following installed:

- Node.js (version 14 or later)
- npm (version 6 or later)
- MongoDB
- Cloudinary Account
- PusherJs Account




## Setup project

**Let's first start by creating an account at [Cloudinary](https://cloudinary.com/) and [PusherJs](https://pusher.com/)**

**NOTE-** This step is very important, without this you wont be able to run the application at you local machine.



## Clone the Repository

To clone the repository, run the following command in your terminal:

```bash
git clone https://github.com/rohan209547mourya/Messenger-Clone-Example.git
```


## Install Dependencies

Next, navigate to the directory where the repository was cloned and install the dependencies:

```bash
cd repository
```
```bash
npm install
```

## Setting Environment Variables

You can find `.env` file in root of the application. Just replace all the environment veriables values with actual values.

```bash

DATABASE_URL=<YOUR_DATABASE_URL>
NEXTAUTH_SECRET=<YOUR_NEXTAUTH_SECRET>

GITHUB_ID=<YOUR_GITHUB_OAUTH_APP_ID>
GITHUB_SECRET=<YOUR_GITHUB_OAUTH_APP_SECRET>

GOOGLE_CLIENT_ID=<YOUR_GOOGLE_OAUTH_CLIENT_ID>
GOOGLE_CLIENT_SECRET=<YOUR_GOOGLE_OAUTH_CLIENT_SECRET>

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=<YOUR_CLOUDINARY_CLOUD_NAME>

NEXT_PUBLIC_PUSHER_APP_KEY=<YOUR_PUSHER_APP_KEY>
PUSHER_APP_ID=<YOUR_PUSHER_APP_ID>
PUSHER_SECERT=<YOUR_PUSHER_SECERT>
```
After added the environment variable your good to go with the application.


## Start the Development Server

To start the development server, run the following command:
```bash
npm run dev
```

This will start the development server at `http://localhost:3000`.


# Thank You

**Author** [Rohan Mourya](https://rohan209547mourya.github.io)
