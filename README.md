# ToDo List
A simple ToDo List made using React.js and Material-UI. **Click [*here*](https://prempreetbrar.github.io/To-Do-List/) to 
try it out!** Or, watch a quick gif of me using it below:

![](To-Do-List-Demo.gif)

## Features

- Add as many tasks as you want
- Click on a unfinished task to toggle it complete; click on a finished task to toggle it incomplete (you'll see
  the task get crossed out and uncrossed out when you complete/uncomplete it)
- You can edit an existing task to change it; there is no limit on the amount of text you can include for one task
- You can toggle to have all unfinished tasks at the end of the list; any new completed tasks will automatically shift
  to the end of the list if this setting is on
- Your tasks are saved in local storage; you can safely close the tab, browser, turn off your computer, etc; tasks only
  get erased if you clear your cookies
  
## Limitations/Design Choices

- Functional components and React hooks are used, however, in the process of making this I ensured I had a deep understanding of class components (in case I am ever working with an older codebase).
- I rarely use arrow functions; I want to be as explicit as I can when possible, and only use arrow functions for callbacks or when necessary (like the ToDo component where I needed to use *forwardRef*). In a class component, I would use an arrow function so I don't have to explicitly bind ```this```, but this is not a concern in a functional component.
- The adding new task bar is at the bottom which can be a bit annoying (given that it moves down as you add tasks). I was debating adding it to the top and can easily switch this in the future.
- I used primitive HTML elements where I could, and only used Material UI (MUI) where it made sense. Certain MUI
  styles are specified in-line rather than on the stylesheet; this is only in the places where it was an MUI requirement.
- A lot of the CSS is based on a CodePen I found. However, I made many improvements to make the CSS more modern and changed it to add the following visual changes:
  - Crossing out multi-line tasks
  - Re-sizing the ToDo edit and new ToDo forms
  - Custom resizer on all browsers except FireFox
- The React code is my own; the features mentioned in the features section above were implemented by myself.

&nbsp;

### If you are on Windows and want to start up the project on your local machine:

1. Ensure you have **Node.js 16.13.0 and npm (any version)** or above installed by writing ```node --version``` and ```npm --version``` in the terminal; if either Node or npm are missing, [install Node.js and npm](https://nodejs.org/en/download/) (ensure you click *Windows Installer* on the LTS tab for your installation), open the .msi file and follow the steps.
<ul>
  <li><u>There will be a custom setup tab that says you can "click the icons in the tree" to change the installation. DO NOT click any of the icons; simply click next.</u></li>
  <li>There will be a screen that says "Tools for Native Modules." Ensure you check the box that says <u>"Automatically install the necessary tools."<u></li>
</ul>
  
  
2. A terminal called "Install Additional Tools for Node.js" will pop up, prompting you to ```Press any key to continue . . . ```. Continue pressing keys until you are prompted to open Powershell.

3. Powershell will open and begin installing packages; it may look like the terminal has "frozen"; this is simply the installation taking its time, DO NOT close the Powershell terminal (if it has still not finished after 20 minutes then hit the enter key to see if it will display any message, as the confirmation message may be stuck in a backlog). 

4. The Powershell terminal will eventually say ```Type ENTER to exit``` (or immediately after you pressed the enter key); type ENTER and hit the enter key.

5. Check if you have node installed by running ```node --version``` in the terminal. If not, open the .msi installation package and click "repair." Follow the steps.

6. Click on the green button on the top right that says "Code". Click download ZIP, unzip the file, right click on the *To-do-list-master* folder and select *copy as path*. Open up a terminal and write

```
cd <putThePathYouCopiedHereUsingControlV (without the angle brackets)>
npm install
npm start
```
This will open up the ToDo List using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).

&nbsp;
    
### If you are on MacOS and want to start up the project on your local machine:
    
1. Ensure you have **Node.js 16.13.0 and npm (any version)** or above installed by writing ```node --version``` and ```npm --version``` in the terminal; if either Node or npm are missing, write ```brew --version``` in the terminal. If brew is not missing, continue to step 2. If brew is missing, first install it by writing 
    ```/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"```
in the terminal. 
2. In the terminal, write
    
    ```
    brew update
    brew install node
    ```

3. Check if you have node and npm installed by running ```node --version``` and ```npm --version``` in the terminal. If not, repeat step 2.
    
4. Click on the green button on the top right that says "Code". Click download ZIP, right click on the *To-do-list-master* folder, click *Get Info*, copy the path (the text beside *Where*): 
<img width="396" alt="Screen Shot 2022-07-11 at 9 35 16 PM" src="https://user-images.githubusercontent.com/89614923/178403232-ecdc241b-42fa-4c87-ba6b-3d8981adbefd.png">

    
5. Open up a terminal and write

```
cd <putThePathYouCopiedHereUsingControlV (without the angle brackets)>
npm install
npm start
```
This will open up the ToDo List using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).
    
&nbsp;    

### If you are on Linux and want to start up the project on your local machine:
    
1. Open up a terminal and write ```sudo apt-get install build-essential curl git m4 ruby texinfo libbz2-dev libcurl4-openssl-dev libexpat-dev libncurses-dev zlib1g-dev``` if you have a **Ubuntu** or **Debian**  based Linux distribution; write ```sudo yum groupinstall 'Development Tools' && sudo yum install curl git m4 ruby texinfo bzip2-devel curl-devel expat-devel ncurses-devel zlib-devel``` if you have a **Fedora** based Linux distribution. It will prompt you to type in Y/N, make sure you type in Y (yes to the installation).

2. Open up a terminal (or use the same one) and write ```homebrew --version```. If you are missing homebrew, write ```ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/linuxbrew/go/install)"``` to install it (if you have homebrew skip to step 3).
    
3. Open up a terminal (or use the same one) and write ```vim ~/.bashrc```. Add the following three lines of code to the file:
    
    ```
    export PATH="$HOME/.linuxbrew/bin:$PATH"
    export MANPATH="$HOME/.linuxbrew/share/man:$MANPATH"
    export INFOPATH="$HOME/.linuxbrew/share/info:$INFOPATH"
    ```
    
4. Open up a terminal (or use the same one) and write ```brew install node```. Wait for the installation to finish.

5. Open up a terminal (or use the same one) and write ```node --version``` and ```npm --version```. If either node or npm are missing, repeat steps 1-4.

6. Click on the green button on the top right that says "Code". Click download ZIP, and then unzip the *To-do-list-master* folder. Open up a terminal (or use the same one) and write
    
    ```
    cd ~/<Your Username>/Downloads/To-do-list-master
    npm install
    npm start
    ```

This will open up the ToDo List using your computer as a host in your default browser. (It may take up to a minute to load when starting the app up initially).
