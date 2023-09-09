# Digital hype test challenge (Node.js + Jest) 💻

This is a repo where I present my solutions for the test challenge given from the Digitalhype company to be able to aspire to the position of fullstack developer

## Project setup 📝

After you clone the repo you need to install the corresponding packages of the `package.json` file

```bash
# npm
npm install
```

## How to run the challenges

You can run the test suites that I prepared with Jest, that basically puts the examples of the PDF plus some other that I created, each test run also generate a coverage for these. To run the tests suites execute the following command

```bash
npm run test
```

### How to use the challenge API

In order to use the API you need to make a request to `https://digital-hype-challenge-production.up.railway.app/directoryTree` as a POST method, were you must provide a json body that contains the `roothPath` (as a string) and the `maxDepth` (as a number).
Then, if everything goes ok the API will answer you with the corresponding directory tree structure!

If you want the server locally you need to add an `.env` file adding the port that the server will listen like in the `.env_example` file. Once that you set up that yo can execute the following command and the server will run

```bash
npm run dev
```

### Aditional info

I have also created other two branches, one called `raw-code` were I placed just the function with a test suite to review it.
And in the second branch, called `terminal-app` I developed a simple terminal application where you can test the application locally entering whatever values you want and generating a json file of the tree.
If you want to know more about these approachs switch to one of these branches and read the README of each for more info!

### Happy review! 🚀
