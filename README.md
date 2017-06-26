# Running the Project
To run the project locally, simply open your project in a terminal window and run the following commands:

    npm run watch
    npm run start

This should open your project on port 8000, but you can change this in the bs-config.json file.

    
### What's Going On Here?
1.  TypeScript compiles the typescript files in the /src folder to JavaScript in the /dist folder
2.  Webpack bundles the /dist folder into the bundle.js file in the /public folder
3.  Lite-Server serves the index.html file in the /public folder with the components from bundle.js rendered into the DOM