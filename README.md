# yearbook-app

master: only the react front side of project which works with json-server
  to start json server:
    cd data && npx json-server --watch db.json --port 8000
  to start react client: 
    cd client/yearbook-app/ && npm start

backandfront: react and node.js express application 
  open chrome with 
  open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security
  to start react client:
    cd client/yearbook-app/ && npm start
  to start express server:
    npx nodemon server
