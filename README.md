# note-taker 

 Version 1.0.0 

 [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![Website shields.io](https://img.shields.io/website-up-down-green-red/http/lit-wildwood-45547.herokuapp.com.svg)](https://img.shields.io/website-up-down-green-red/http/lit-wildwood-45547.herokuapp.com.svg)  [![GitHub last commit](https://img.shields.io/github/last-commit/jiberjiber/note-taker)](https://github.com/jiberjiber/note-taker/graphs/commit-activity) 

 ## Description 
 Note-taker is a simple web application that allows you to create, save, and delete personal notes. Written using [Node.js](https://nodejs.org/en/) and run on an [Express](https://expressjs.com/) web server. 

 <details>
<summary>TABLE OF CONTENTS</summary>
<p>

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributions)
- [Tests](#tests)
- [Questions](#questions)

</p>
</details> 

 ## Installation 
 To install this program, you have a couple options. 
1. Install program using `npm i`
2. Download the repo and use node to run the index.js file 

 ## Usage 
 ## Installation steps

1. Download or clone the entire repo to your local machine.
2. Navigate to the folder you installed to and open your terminal of choice.
3. Use the command ```npm i``` referenced in [Installation](#installation) to install required dependencies.
4. Run the server using either ```node server.js``` or ```start``` while still in the installation folder.


## App usage
**You are only able to save notes when there is both a title and description**
* To save a note
    * Write your note's title and description then click the save icon in the top right.
* To delete a note
    * Click the red delete icon next to the note you wish to delete.

## API Usage
The /api/notes directory can receive POST, GET, and DELETE methods. (The DELETE API request requires an id in the form of ```/api/notes/:id```
* To access the application's API
    * Navigate to the /api/notes directory in your web browser to recieve a raw JSON array of note objects.
    * The note object's paramters are structured as follows: 
        * ```title```
        * ```text```
        * ```id``` 

 ## License 
 Copyright 2020 Evan Boswood

            Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
            
            The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
            
            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE. 

 ## Contributions 
 To contribute to the application, [contact me](#contact). 

 ## Tests 
 N/A 

 ## Questions 
 [jiberjiber's GitHub profile](http://www.github.com/jiberjiber)

If you have any questions or want to say hi, you can contact me at evan@boswood.net 

