MC02 CCAPDEV N01

# ccapdev-quicklinks

Quicklinks Tutorial for CCAPDEV2223T2





## Follow the steps below to set up the web app in your local machine:
Prerequsites: Node.js and MongoDB installed within your system, Start the mongodb server if its not running already before proceeding to the next step. Note that you may need to change the mongo uri in the .env file to the link of your local mongodb server.
1. Clone the repository either by going to this link[https://github.com/Lustre69/QUICKLINKS-FINAL-.git], and open with github desktop, or you can clone the file in your github desktop and paste the url above to clone, or using the command below (Note: git should be installed in your system for this to work).

```
git clone https://github.com/Lustre69/QUICKLINKS-FINAL-.git
```

2. Open Command Prompt
3. Navigate to the project folder or the root folder (QUICKLINKS-FINAL--master) - the folder containing the contents of the cloned or downloaded repository.
4. Run the command `npm install` to initialize and install all necessary modules used in the project.

5. Create a copy of the `.env.example` file and remove the `.example` extension from the copy. Change values for the given environment variables, if needed.
5. open the '.env' file and change value for the given environment variables, if needed. (The mongo uri after the equals)


6. We may now run our server. To do this, we run the command `node index`. Upon running the command, your Command Prompt should display statements that look similar to the following:

```
Connected to: mongodb://0.0.0.0:27017/quicklinks
app listening at port 3000
```

7. Let's test our web application. Go to the link below to access the web application:

```

http://localhost:3000/
```

Your web browser should display the screen below:


8. Press the sign up button on the top right or the get started button in the middle of the landing page, to make a user and enter the given fields (username, email and passowrd)



9. upon sinup, it will lead you to your profile page, you can edit the settings of your profile to add more information such as bio and links. 

10. upon saveing your settings, your profile should be all set displaying all your links! 

11. you can also search other people's profile by typing their username on the search bar on the top left of the screen.

12. a home button is located on the top left at all times. 

13. make sure to remember your username and passowrd, as you can log back in to your profile once you have signed up. 






