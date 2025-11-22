# Blog Posts Management

This folder contains the blog posts data for your portfolio website.

## How to Add/Update Blog Posts

Simply edit the `blogs.json` file in this folder. Each blog post should have the following structure:

```json
{
  "id": 1,
  "title": "Your Blog Post Title",
  "summary": "A brief 2-3 line summary of your blog post that will appear on the card",
  "date": "2025-11-19",
  "readTime": "5 min read",
  "link": "https://medium.com/@namratha343/your-article-url",
  "image": "https://your-image-url.com/image.jpg",
  "tags": ["Tag1", "Tag2", "Tag3"]
}
```

## Field Descriptions

- **id**: Unique identifier (increment for each new post)
- **title**: The title of your blog post
- **summary**: 2-3 lines describing what the post is about (keep it concise!)
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time (e.g., "5 min read")
- **link**: Full URL to your Medium article or blog post
- **image**: Cover image URL (use Unsplash or your own hosted images)
- **tags**: Array of relevant tags/topics

## Finding Free Images

You can use free stock photos from:
- [Unsplash](https://unsplash.com) - `https://images.unsplash.com/photo-xxx?w=800&q=80`
- [Pexels](https://pexels.com)
- Your own uploaded images in the `/public` folder

## Example Workflow

1. Write your blog post on Medium
2. Get the published article URL
3. Find a relevant cover image
4. Open `blogs.json`
5. Add your new blog post entry
6. Save the file
7. Your portfolio will automatically display the new post!

## Medium Profile

Update your Medium profile URL in the Blog page header. The current profile is:
`https://medium.com/@namratha343`

You can change this by editing `/src/pages/Blog.jsx` if needed.
