# SV-CommunityCentre-Checklist


## Purpose of this app
- This app will allow the user to check off the items they have collected/donated to the Community Centre bundles in Stardew Valley.

## Instructions for install and running the app
- Clone this repo onto your machine.
- Install the required packages by opening the terminal in the top-level folder and type `npm install` or `npm i`, this should install all dependencies across the backend and frontend locations due to necessary scripts being present.
- To run the mongo database, type `.\mongod.exe` in the terminal (windows users may need to navigate to the bin folder path of Mongo in the terminal first).
- To run the backend application, open another terminal within the backend path and type `npm run start-win` if on a windows based system, otherwise type `npm run start`.
- To run the frontend application, open another terminal within the frontend path and type `npm start`.

### Testing
- Backend tests - type `npm run test-win` for windows, else use `npm run test` while the terminal is pointing to the backend path.
- Frontend tests - type `npm test` while the terminal is pointing to the frontend path.


## Features I would like to include or add in the future
- Checkboxes to allow the user to tick off the items they have collected.
- Once the required number of slots have been filled in each bundle, the room relating to the bundle should display something to show that it has been completed.
- Information on where the user can find each item in-game.
- Remix bundles - user should be able to select which bundles that have been randomly assigned to their current play-through.
- Ability to log in to keep track of progress.