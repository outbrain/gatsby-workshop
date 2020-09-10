# GatsbyJS Workshop

A workshop for learning GatsbyJS by [![IMAGE ALT TEXT](http://danielsternlicht.com)](Daniel Sternlicht).

In this workshop we’re going to create a Gatsby website, and rely on data from a Medium based blog.

A quick intro to GatsbyJS:

[![IMAGE ALT TEXT](https://img.youtube.com/vi/S632nIS2WKo/0.jpg)](https://www.youtube.com/watch?v=S632nIS2WKo "Intro to GatsbyJS")

## Workshop Instructions

1. Clone this repository

`git clone https://github.com/outbrain/gatsby-workshop.git`

2. Install project dependencies

`npm i`

3. Run dev server

`npm start`

4. If everything worked as expected you should be able to see the app in your browser at:
http://localhost:8000

5. Another url you want to open is for the graphicql tool. We’re going to use it a lot.
http://localhost:8000/___graphql

6. Just so you won’t have to, this repo includes 3 plugins we installed in advance - `gatsby-plugin-sass`, `gatsby-plugin-typescript`, and `gatsby-source-medium`. You may understand yourself what’s the purpose of each one.

7. Now that we’re done with setups, my first task for you is to open Gatsby’s plugins library, look for the `gatsby-source-medium` plugin and add it to your `gatsby.config.js` file.
https://www.gatsbyjs.com/plugins/gatsby-source-medium/

8. If you set up everything correctly, try to restart the server by running `npm start`, then go to graphicql. You should see the new entities: mediumPost, mediumUser, allMediumPost, allMediumUser, etc.

9. Next thing you want to do is to build up a query in graphql that loads the most recent posts from our medium blog.

10. Now that we know how to build the query, my next task for you is to show all recent posts with their titles and images in the homepage.

11. Next, we want that after a user clicks an article the app redirects him to another page where he may access the content of the article. There are 2 things we need to do here. 

First, to create pages dynamically in build time, and secondly, to create a generic template for blog posts that will be used to display the post.

Hint: To create pages dynamically we’ll go to `gatsby-node.js` file, and use the createPage api.

There we want to fetch all blog posts, and for each one of them to create a static page based on its data.

12. Lastly, in the homepage, we’ll link each item to the dynamic pages we created.



## For Cheaters

See solutions in the `DONT_README.md` file :)