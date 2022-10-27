<div align="center">

<h3 align="center">Arduino HTML compiler</h3>

  <p align="center">
    Simple Nodejs script to convert a html file to a fully Arduino compatible string
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## About The Project
The main motivation for this project is to have a simple script that allows you to easily convert your html file into a fully compatible Arduino file.


<!-- GETTING STARTED -->
## Getting Started
You need to copy `package.json`, `compiler.js` and `index.html` somewhere in your project

### Installation
* Install dependecies
  ```sh
  npm install
  ```
* Change the `build` script under `package.json` to match your desired output file

<!-- USAGE EXAMPLES -->
## Usage
* Edit the index.html file to fit your needs
* Compile the file
  ```sh
  npm run build
  ```
It will generates an output file with the following content:
  ```c++
  String app = "your_compiled_html";
  ```
Now your can import the created file
  ```c++
  #include "output.h"
  ...
  server.send(200, "text/html", app);
  ```

<!-- LICENSE -->
## License

Distributed under the MIT License.
