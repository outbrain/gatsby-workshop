# Gatsby Workshop Hints

## gatsby.config.js

```
{
  resolve: `gatsby-source-medium`,
  options: {
    username: `outbrain-engineering`, // Or: @danielsternlicht
  },
},
```

## src/components/pages/index.tsx

### GraphQL Query

```
export const query = graphql`
  query {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          id
          slug
          title
          virtuals {
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`
```

### Code

```
{
  (data?.allMediumPost?.edges || []).map(post => {
    const { id, slug, title, virtuals, author } = post.node;
    
    return (
      <Link key={`post_${id}`} to={`/post/${slug}`} style={{ display: 'flex', alignItems: 'center' }}>
        {
          virtuals?.previewImage?.imageId &&
          <img style={{ width: '150px', marginRight: '20px' }} src={`https://miro.medium.com/max/700/${virtuals.previewImage.imageId}`} />
        }
        <h4>
          {title} / <span>{author.name}</span>
        </h4>
      </Link>
    );
  })
}
```

## gatsby-node.js

```
const BlogPostTemplate = path.resolve("./src/templates/post.tsx");
  
return graphql(`
  {
    allMediumPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          slug
          id
        }
      }
    }
  }
`).then(result => {
  if (result.errors) {
    throw result.errors
  }

  // Create blog-list pages
  const posts = result.data.allMediumPost.edges;

  // Create single post page
  posts.forEach(post => {
    createPage({
      path: `/post/${post.node.slug}`,
      component: BlogPostTemplate,
      context: {
        slug: post.node.slug,
      },
    })
  })
});
```

## src/components/templates/post.tsx

### GraphQL
```
export const query = graphql`
  query($slug: String) {
    mediumPost(slug: { eq: $slug }) {
      title
      createdAt
      content {
        subtitle
      }
      author {
        name
      }
      virtuals {
        previewImage {
          imageId
        }
      }
    }
  }
`
```

### Code
```
<SEO
  title={data.mediumPost.title}
  description={data.mediumPost.content.subtitle}
/>
<div style={{ textAlign: 'left' }}>
  <Link to="/">Back</Link>
  <h1>{data.mediumPost.title}</h1>
  <p>
    Written by {data.mediumPost.author.name} on {data.mediumPost.createdAt}
  </p>
  <h4>{data.mediumPost.content.subtitle}</h4>
</div>
{
  data.mediumPost.virtuals?.previewImage?.imageId && 
  <img
    src={`https://miro.medium.com/max/700/${data.mediumPost.virtuals.previewImage.imageId}`}
    alt={data.mediumPost.title}
    style={{ maxHeight: 450 }}
  />
}
```