---
title: Git Basics Training
layout: page.hbs
---

For those wishing to get somewhat proficient with Github this explanation can give you the very basics.

Git is a Distributed VCS, on Github there is a remote repository that acts as the main version of the project a group of people are working on.

When you work on Github you _pull_ from the remote repository, this acts as the local _repository_. Changes you make to the code will change the local repository and not the main _repository_. This allows many people to work on the same project without changing the original it also allows mistakes to be easily found since updates are restricted to limited changes and can always be rolled back.

Make sure to use **Ubuntu**/**Linux** this will allow you to be on the same level of expertise as the rest of the team and allow people to help you easily.

To start open the _Terminal_ you can do so by opening the Application finder in the bottom left corner.

Some basic commands that can help you often are:

git config --help..........This refers to the manual page that can explain all other commands  
Git help _____..........This allows you to learn the different things you can do with a certain command. The command you enter into the underlined zone will be the command you learn more about.

Do these commands when you start using the Terminal
git config --global user.name..........This refers to your _name_ so you can change computers and people can tell what you did  
git config --global user.email..........This refers to your _email_ so you can change computers and people can tell what you did  

The way your local repository will work:
**Working Directory**-
Where you make changes to the code (Does not affect the main repository)
**Staging Area**-
The place before it the changes are committed
**Commit to Repository**-
Changes your local repository which can be pushed to the main repository

When you want to make a new project:
Note a word it is italicized it means that is the name of the thing you must enter
So the command cd ____ has the description | Move to _directory_ | so you type in the Terminal cd name-of-directory

ls..........See what is in the directory you are currently in  
cd ____..........Move to a certain _directory_  
mkdir_____..........Create a _directory_  
git init..........Creates a file that is necessary to work with Git  
git remote _____ <url>..........Create a repository with the _nickname_ and the url of the repository on github. Use the Https link  
rm -rf..........Get rid of file  

- 1 Open Github and create an account. Make your username and password simple because you will need to repeatedly enter this info when you make commits.
- 2 Create a Directory, by typing mkdir _____  in the future make it descriptive but for now call it test. Don’t change any of the preset settings.
- 3 Click back on Terminal. Use ls to see what is in the folder.
- 4 You most likely have a Documents folder we will be using that one. If you don’t have one you can just make a folder. Use cd Documents to move into the documents directory.
- 5 Use cd test to get into the test folder.
- 6 Now use git init to create a file that will allow you to ‘push’ with Git
- 7 To create the Repository use git remote ______ <url> name it origin
- 8 Now you have an empty repository on your computer and a repository on Github

To Write some files and push to Repository:
git add _____..........Add a file from Working Directory to Staging Area. Note you must type the pathway to that file /home/username/Documents...  
git add -A..........Add all files from Working Directory to Staging Area  
git status..........See where files are  
git reset _____..........Take out the _file_  
git reset..........Take out all the files  
git commit -m “_____”..........Commit to Directory write a _description_ of what your commit does  
Git log..........See what commits have been made  
Git pull _____ ______..........Take the up to date version of the project from the website using the nickname_ of the repository and the branch_  

- 1 Write something on Leafpad/Notepad
- 2 Save it to the Directory named Test
- 3 Click on the Terminal. Type git add -A
- 4 Type git commit -m “First Commit”
- 5 Type git push origin master
- 6 Click on GitHub you know just changed the main version
