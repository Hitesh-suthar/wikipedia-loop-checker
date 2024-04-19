# Wikipedia loop checker #

## Project description ##
The *Wikipedia Loop Checker* project is a web application/API designed to explore and demonstrate the *Wikipedia Loop* phenomenon. This phenomenon refers to the intriguing pattern where navigating through the first links of Wikipedia articles eventually leads to the *Philosophy* page.

## Features
1. **Input Wikipedia URL**: Users can input a Wikipedia URL into the application.
2. **Loop Detection**: The application follows the first link in the main body text of each Wikipedia page, recording each visited page along the way.
3. **Path Visualization**: It displays the list of visited Wikipedia pages in chronological order, allowing users to visualize the path taken from the initial page to the "Philosophy" page.
4. **Request Count**: The application counts the number of requests required to reach the "Philosophy" page and presents it to the user.
5. **Edge Case Handling**: It gracefully handles edge cases such as dead-end pages or pages without valid links, providing appropriate feedback to the user.
6. **Backend Implementation**: The backend is built using Node.js with Express, responsible for handling API requests, fetching Wikipedia pages, parsing HTML content, and determining the loop.
7. **Frontend Interface**: The frontend is developed using React, providing users with a user-friendly interface to input Wikipedia URLs and visualize the loop detection process.

## Technologies used 
* **MERN Stack**: `Express.js`, `React.js`, `Node.js`
* **Axios**: For making HTTP requests from both backend and frontend.
* **Cheerio**: For parsing HTML content on the backend.
* **Body-Parser**: Middleware for parsing request bodies in the Express backend.

## How to install and run the project
1. Clone repository to your local directory or download it.
   ```
   git clone https://github.com/Hitesh-suthar/wikipedia-loop-checker.git
   ```
2. Open project folder folder into terminal
3. Navigate to server folder and install modules
   ```
   cd server
   ```
   ```
   npm install
   ```
4. Navigate to client folder and install modules
   ```
   cd ../client
   ```
   ```
   npm install
   ```
5. Start react server
   ```
   npm start
   ```
6. Start node server
    ```
   cd ../server
   ```
   ```
   npm run dev
   ```
7. Open chrome to use

## How to use
1. Visit the web application.
2. Input a Wikipedia URL into the provided form.
3. The application fetches the Wikipedia page, follows the first link, and repeats the process until reaching the *Philosophy* page.
4. It displays the number of requests required and the list of visited pages to the user.
5. Users can explore different Wikipedia URLs and observe the *Wikipedia Loop* phenomenon in action.
   
