# Team 2984 Website Source

Source and content for the FRC Team 2984 website.

# Tasks

```bash
# clean the build directory
npm run clean

# compile
npm run compile

# run the site locally on port 3000
npm start
```
# Starting a New Post

1. Create a file called `src/posts/{title}`.md, where `{title}` is a [kebab-case](http://wiki.c2.com/?KebabCase) version of your post's title. For example, for a title of "Hello World," use the file `src/posts/hello-world.md`.
2. Front matter goes at the top of the file. Minimally, it should include: `title`; `date`; and `updated` fields.
3. Compile. The new post should be available at the path `/posts/{title}/`.
