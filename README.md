# WDI Game Project
## Tic-tac-toe

This repo contains the code for a tic-tac-toe game that includes user authentication and game tracking via an API. Included below is a link to the game:

['Mark Smets Tic-Tac-Toe'](https://mjs6745.github.io/MJS6745-game-project/)

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

## Wireframes and User Stories

Included below are links to my wireframes as well as my user stories. Note that I tried multiple times to flip the image and push it to github but for some reason it was continuing to be uploaded upside down. I apologize for any inconvenience

- Wireframe:
['wireframe'](https://git.generalassemb.ly/MJS6745/game-project-scope-study/blob/response/images/Initial_wireframe.jpg)

- User stories:
1. As an existing player I want to login so that my games can be tracked
2. As an existing player I want to login so that I can view my game history
3. As an existing player I want to log out so that my games are no longer tracked
4. As a new player I want to create an account so that I can track the games I play
5. As a player I want to be able to make a selection so that the selection can be applied and the opponent can take a turn
6. As a player I want to know when I have made a move that has won the game so that I can count the game as a win
7. As a player I want to view my game statistics so that I can know who many games I have played
8. As an existing user, I want to be able to change my password so that I can have a new password
9. As a player I want a message on the screen informing me who has the current turn (X or O) so that I can know if its my turn
