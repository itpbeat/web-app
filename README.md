# Planet Beat
## Development Guidline
1. clone the repo and cd into it

2. `$ npm install`

3. to start the app(without login component), run `$ npm start`. The page will be running on `localhost: 8080`

4. if you want to modify the code, open another terminal window and navigate to the same directory, run `$ npm run dev`

5. refresh the page, the new code will be loaded.

6. to include the login component, you need to install MongoDB. Please follow the tutorial [here](https://docs.mongodb.com/manual/installation/)

## Contribution Guideline
To change video content, navigate to Video.jsx file, and change the videoId to your youtube video id

## Setup and Push to heroku
1. go to the root folder of the project
2. login to heroku using `heroku auth:login` 
3. add a new git remote to the project which points to the heroku app 
`heroku git:remote -a planet-beat`
4. Now push whatever changes you have made to your code to the master branch and then run
`git push heroku master`
5. You should see the updates in [the app](https://planet-beat.herokuapp.com)

## References

* [react setup Reference](https://www.codementor.io/tamizhvendan/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr)
* [yet another react referece](http://andrewhfarmer.com/build-your-own-starter/#8-done)
* [another reference](https://scotch.io/tutorials/react-on-the-server-for-beginners-build-a-universal-react-and-node-app)
* [eslint reference](https://www.robinwieruch.de/react-eslint-webpack-babel/)
* [For audio recording](https://www.npmjs.com/package/react-mic)
