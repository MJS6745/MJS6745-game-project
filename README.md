[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# WDI Game Project
## Tic-tac-toe

This repo contains the code for a tic-tac-toe game that includes user authentication and game tracking via an API

## Installation

1.  [Download](../../archive/master.zip) this template.
1.  Unzip and rename the template directory.
1.  Empty [`README.md`](README.md) and fill with your own content.
1.  Replace all instances of `ga-wdi-boston.browser-template` with the name of your project.
1.  Move into the new project and `git init`
1.  Add all of the files in your project with the command `git add -A`
  -   *Note:* THIS IS THE ONLY TIME YOU SHOULD RUN THIS COMMAND
1.  Commit all of your files with the command `git commit`
  -   Your commit title should read `Initial commit`
1.  Install dependencies with `npm install`.

## Technologies Used

- HTML
- CSS
- JavaScript
- jQuery
- API interaction (via AJAX)

## My Planning and Development Process

My intial planning for the project began with basic wireframes for how I wanted the game front end to be deisgned. It included the basic layout of the main page. As this is a single page application, the wireframe was fairly simple given that there were a limited number of actions the user could have at any given time.

From there, I really started to pick apart the game requirements. I wanted to ensure that I had a full understanding of exactly what the game was meant to include. This served as a very useful step as I had previously made some assumptions about the requirements that proved to be incorrect on further review.

With my understanding of the requirements complete, I began to map out the file structure I planned to use. As I saw it, there were three primary groups of functionality that I used for the structure:
1. Game board and front end messaging/event handling. This included:
- HTML and CSS for front end
- Modals for user interaction and notification
- jQuery for event handling (button clicks/form submits)
2. User authentication
- This included the jQuery event handling for form submits on sign up, sign in, sign out, and change password
- A file for the AJAX methods that would submit requests to the API for a given interaction
- A UI file to handle the success or failure of any given API request and present the necessary feedback/messaging to the user
3. Game API
- This used a similar structure to the user authentication
- An events file was used to invoke the createGame and updateGame methods when a user would start a new game or make a move on an existing game, respectively.
- An API file for the AJAX methods that would create, update, and read games from the server
- A UI file that was used primarily for presenting game data as total games played, total games finished, wins, losses, and ties for the user who was currently logged in.

I then proceeded to build the application in the order I defined above (game board/front end, user auth, game api). To ensure that I stayed methodical as well as limit risk, I created branches for each of the three areas of work. Within a given branch I would commit for each change that I could consider to be small enough to be tested. Granted, some commits conatined larger pieces of functionality than others, but I stuck to an approach where I would commit and push each time I had successfully created some piece of functionality. When I deemed that high level area/branch (as defined by the three points above) complete, I merged the branch with master and then created a new branch for the next piece.

Obviously, issues would come up during development where something did not work correctly. My primary method of troubleshooting was using console log to "tell myself a story" in the console as to what was happening. This included logging exactly what data was being passed from function to function, which proved very useful. In addition, I used the Chrome console to drill down to specific areas of code that weren't working correctly when, for example, a property could not be read. This approach gave me the info I needed to troubleshoot and I was able to resolve the issues.

At a more "mental" level, I tried to constantly make myself slow down when completing a particular piece of functionality. It is very tempting to constantly jump around from function to function and add things in. However, whenever I felt myself "shaving the yak" (as Chris would say), I would slow down, pull myself back a bit, and remind myself of the piece of functionality that I started in the first place.

When I considered the core requirements met, I prepared a full test plan consisting of 50(ish) test cases so I could ensure that all core functionality was present and that there were not any bugs present. This led to the discovery of a few minor bugs that I addressed.

Once the bug fixes were in place, I retested with the full suite of test cases to make sure I had not inadvertently broken a piece of funcionality that was previously working.

Once all that was done, I considered the app functional and proceeded to deploy it.

## Unsolved Problems

As mentioned above, I believe that I caught any major bugs present with the app. In terms of additiona functionality, I would have liked to include a little more front end info to the user like the name of who was logged in and perhaps some more jQuery styling on the board itself.

However, this was turning into a little bit of a "rabbit hole" for me as I would continue to find minor tweaks I wanted to make during development. I had to stop myself at some point and consider the game's "1.0" version complete.

## Structure

Developers should store JavaScript files in [`assets/scripts`](assets/scripts).
The "manifest" or entry-point is
[`assets/scripts/index.js`](assets/scripts/index.js). In general, only
application initialization goes in this file. It's normal for developers to
start putting all code in this file, but encourage them to break out different
responsibilities and use the `require` syntax put references where they're
needed.

Developers should set `config.apiOrigins.production` (and
`config.apiOrigins.development` if it differs from the default).  With
`apiOrigins` set, developers may rely on `config.apiOrigin` as the base for API
URLs.

Developers should store styles in [`assets/styles`](assets/styles) and load them
from [`assets/styles/index.scss`](assets/styles/index.scss).

Developers should use [getFormFields](forms.md) to retrieve form data to send to
an API.

To deploy a browser-template based SPA, run `grunt deploy`.

## Tasks

Developers should run these often!

-   `grunt nag` or just `grunt`: runs code quality analysis tools on your code
    and complains
-   `grunt make-standard`: reformats all your code in the JavaScript Standard Style
-   `grunt <server|serve|s>`: generates bundles, watches, and livereloads
-   `grunt test`: runs any automated tests, depends on `grunt build`
-   `grunt build`: place bundled styles and scripts where `index.html` can find
    them

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
