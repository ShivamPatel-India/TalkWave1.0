This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# TalkWave

TalkWave is a dynamic communication platform built using NextJS, providing users with a versatile and real-time collaborative experience. Similar to Discord, it includes features such as server creation, membership management, various chat options, and advanced media sharing capabilities.

## Key Features

- **Server Creation and Membership Management:**
  - Easily create servers and manage memberships for seamless collaboration.

- **Versatile Chat Options:**
  - Supports both dark and light modes.
  - Group chat and direct messaging features for personalized communication.

- **Channel Creation and Media Sharing:**
  - Create different channels within a server.
  - Share various media files, including audio and video channels implemented using Socket.IO.

- **Audio and Video Calls:**
  - Robust solution for audio and video calls using Livekit, overcoming notable development challenges.

![image](https://github.com/ShivamPatel-India/TalkWave1.0/assets/70719016/1c4e1048-6ae9-4cd9-b61e-d5243b4d7cd3)


## Technologies Used

- NextJS
- Tailwind CSS
- Shards UI
- TypeScript
- Prisma
- Third-Party Services:
  - Clerk.com for authentication
  - Planetscale for database management
  - UploadThing for media storage
  - Livekit for audio and video calls

## Challenges Overcome

The project encountered significant challenges during the development of audio and video calls, which were successfully overcome to deliver a robust and reliable feature. Additionally, meticulous effort was invested in managing different user roles and tailoring access to various features based on these roles.

## Getting Started

To get started with TalkWave, follow these steps:

1. Clone the repository: `git clone https://github.com/ShivamPatel-India/TalkWave1.0.git`
2. Install dependencies: `npm install`
3. Update the .env file with enviroment variables.
   ```
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=#
    CLERK_SECRET_KEY=#
    
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
    DATABASE_URL=#
    
    UPLOADTHING_SECRET=#
    UPLOADTHING_APP_ID=#
    
    LIVEKIT_API_KEY=#
    LIVEKIT_API_SECRET=#
    NEXT_PUBLIC_LIVEKIT_URL=#```
5. Run the application: `npm run dev`

## Deployment

Deployment of this project is pending as Vercel does not support functionality built using Sockets. Therefore, I am looking for some open-source alternative. Any suggestions are highly appreciated!

