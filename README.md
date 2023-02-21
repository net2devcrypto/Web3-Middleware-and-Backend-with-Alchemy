# Web3-Middleware-and-Backend-with-Alchemy
Implement a very straightforward middleware and backend for your Web3 apps with Alchemy-SDK


<a><img src="https://github.com/net2devcrypto/Alchemy-SDK-Quick-NFT-Market/blob/main/public/alchemy-white.png" width="260" height="60"></a>
##
Be sure to watch my Youtube video so you can learn and follow along!

** THE FILES ATTACHED TO THIS REPO ARE FOR EDUCATIONAL PURPOSES ONLY **

** NOT FINANCIAL ADVISE **

** USE IT AT YOUR OWN RISK** **I'M NOT RESPONSIBLE FOR ANY USE, ISSUES ETC.. **

Be sure to watch my Youtube video so you can learn and follow along!

<a href="https://youtu.be/W7Xt7nxkYNY" target="_blank"><img src="https://github.com/net2devcrypto/misc/blob/main/ytlogo2.png" width="150" height="40"></a> 

## Step 1

Download the three folders located under this repo.

## Step 2

Create a new NextJS Project:

```shell
npx create-next-app nftsearch
```

## Step 3

Copy/paste the files from the "frontend" folder in this repo to the nextjs project folder.
Replace files when prompted.

## Step 4

Navigate to the NextJS project folder and install all dependencies:

```shell
cd nftsearch
npm i
```

## Step 5

Copy/Paste the middleware folder from this repo to the pc that will act as the middleware.
NOTE: The middleware can run in the same server as your frontend for practice purposes but in
production this must run separate.

Then navigate to the middleware folder in your shell and install dependencies:

```shell
cd middleware
npm i
```

## Step 6

Copy/Paste the backend folder from this repo to the pc that will act as the backend.
NOTE: The backend can run in the same server as your frontend for practice purposes but in
production this must run separate and isolated from the frontend and the middleware.


Then navigate to the middleware folder in your shell and install dependencies:

```shell
cd backend
npm i
```

## Step 7

Edit the frontend  "component/interfaces.js" file and replace the middleware Ip address with the
ip of the pc that will run the middleware.


```shell
 const middlewareUrl = 'http://MIDDLEWARE-IP-ADDRESS:8081';
```

ctrl + s to save.

## Step 8

Edit the middleware  "interfaces.js" file and replace the backend Ip address with the
ip of the pc that will run the backend.

```shell
const backendUrl = 'http://BACKEND-IP-ADDRESS:8082';
```
ctrl + s to save.

## Step 9

Add the Alchemy API key to "interfaces.js" file in your backend.

```shell
const settings = {
    apiKey: "ENTER-ALCHEMY-API-KEY",
    network: Network.ETH_MAINNET
};
```

ctrl + s to save.

## Step 10

Navigate to the frontend project folder and run.

```shell
cd nftsearch
npm run dev
```

## Step 11

Navigate to the middleware folder and run.

```shell
cd middleware
node middleware.js
```

## Step 12

Navigate to the backend folder and run.

```shell
cd backend
node backend.js
```


## Step 13

Open the frontend in your browser and search wallets to display NFTs!

If everything works well, you should see the nft's in the browser and log messages in the backend console

<a><img src="https://github.com/net2devcrypto/misc/blob/main/outputbackend.png" width="960" height="400"></a>

Please watch tutorial video for additional information.
Enjoy!


