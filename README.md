# Team 2984 Website Source

Source and content for the FRC Team 2984 website.

# Contributing

This site is compiled with [Metalsmith](http://www.metalsmith.io/), a static site generator. To use it, you'll need to install:

- [Git](https://git-scm.com/) for revision control;
- [Node.js](https://nodejs.org/en/) for language support;
- [Atom](https://atom.io/) or another text editor with syntax highlighting

Windows users will need to use [PowerShell](https://docs.microsoft.com/en-us/powershell/scripting/powershell-scripting?view=powershell-5.1), which is built into Windows 7+.

A better option is a Unix-based operating system such as Ubuntu or OSX. You'll have fewer problems with running the console, linefeeds, and installing software.

First, fork the team's [website repo](https://github.com/FRCTeam2984/website). This will create a copy in your own GitHub account.

Next, clone the repo from your github account. This command (use Terminal or PowerShell) will typically look like this:

```bash
git clone git@github.com:{username}/website.git
```

Where `{username}` is your GitHub username.

Change into the project directory:

```bash
cd website
```

Review changes:

```bash
git log
```

Open Atom and begin editing:

```bash
atom .
```

When done with your feature, commit changes:

```bash
git add .
git commit -m {message}
```

where `{message}` describes your changes.

Then, push to your own GitHub repository:

```bash
git push origin master
```

Finally, create a pull request by clicking the "New pull request" button on the [team's GitHub repo](https://github.com/FRCTeam2984/website).

After awhile, the team repo and your own will diverge. Update your local repository as follows.

First, add the team's repo as a remote:

```bash
# be sure you're in the website working directory!
git remote add team https://github.com/FRCTeam2984/website.git
```

Next, merge changes onto a newly-created branch.

```bash
# create a branch and check it out
git checkout -b upstream

# pull changes
git pull team master

# You may need to handle merge conflicts

# checkout master
git checkout master

# merge changes
git merge upstream

# delete branch
git branch -d upstream
```

# Tasks

Metalsmith can compile the site and serve it through `localhost`.

```bash
# clean the build directory
npm run clean

# compile
npm run compile

# start server, which serves content on localhost:3000
npm start
```

# Starting a New Post

1. Create a file called `src/posts/{title}`.md, where `{title}` is a [kebab-case](http://wiki.c2.com/?KebabCase) version of your post's title. For example, for a title of "Hello World," use the file `src/posts/hello-world.md`.
2. Front matter goes at the top of the file. Minimally, it should include: `title`; `date`; and `updated` fields.
3. Compile. The new post should be available at the path `/posts/{title}/`.

You can preview a post directly from Atom without running Metalsmith.

First, install [Atom Markdown Preview](https://github.com/atom/markdown-preview) if it isn't already. To preview, press ctrl-shift-m (or command-shift-m on OSX).
