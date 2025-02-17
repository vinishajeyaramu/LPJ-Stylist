import React from "react";
import "./Blogs.css";
import image1 from '../../Assets/Images/260959763_389194129652720_9074802248093225505_n.jpg'
import image2 from '../../Assets/Images/243736182_901041660543523_1430569172683620881_n.jpg'
import image3 from '../../Assets/Images/40337930_476255122892045_2995082009207898112_n.jpg'
import image4 from '../../Assets/Images/70748853_1398834400279144_6963165645478380164_n.jpg'
const blogPosts = [
    {
      id: 1,
      title: "Dominick Robinson",
      category: "Home Slider",
      date: "January 24, 2016",
      comments: "0 Comments",
      image: image1,
      content: "Campaigns blend fashion, beauty, and culture to create impactful stories. My styling campaigns focus on aesthetics and purpose, ensuring a compelling visual narrative for brands and individuals.",
      link: "#"
    },
    {
      id: 2,
      title: "Fashion Spotlight",
      category: "Style Guide",
      date: "February 5, 2024",
      comments: "3 Comments",
      image: image2,
      content: "Groom culture is about refining men’s style with confidence. From weddings to corporate looks, I help men embrace their unique fashion, blending tradition with modern trends.",
      link: "#"
    },
    {
        id: 3,
        title: "MISS & MRS BENGAL",
        category: "LifeStyle Giude",
        date: "January 24, 2018",
        comments: "10 Comments",
        image: image3,
        content: "This prestigious pageant celebrates beauty, confidence, and culture. I curate stunning looks for contestants, ensuring they shine with elegance while embracing Bengal’s rich heritage.",
        link: "#"
      },
      {
        id: 4,
        title: "Fashion Spotlight",
        category: "Personal Style Stories",
        date: "September 15, 2024",
        comments: "4 Comments",
        image: image4,
        content: "Personal styling is about curating looks that reflect your personality and lifestyle. Whether it's a wardrobe revamp, event styling, or everyday fashion advice, I help you dress with confidence and elegance, ensuring you always look and feel your best.",
        link: "#"
      }
  ];
  
  const categories = ["Fashion", "Home Slider", "Lifestyle", "Personal Style Stories", "Shopping"];
  const tags = ["Styling", "Modern Evolution", "Fashion", "Lifestyle", "Campaign", "Conceptualized direction", "Makeover"];
  const recentComments = [
    { name: "Cindy Jefferson", comment: "on Off-The-Shoulder Leather Dress" },
    { name: "Cindy Jefferson", comment: "on Pleated Coat With Flared Sleeves" },
    { name: "Martin Moore", comment: "on 3 Favorite Looks for Fall" }
  ];
  
  
const BlogPost = () => {
  return (
    <>
    <div className="blog-container">
      {/* Left Section - Blog Posts */}
      <div className="blog-content">
        {blogPosts.map((post) => (
          <div key={post.id} className="blog-post">
            <img src={post.image} alt={post.title} className="blog-image" />
            <h2>{post.title}</h2>
            <p className="meta">
              {post.category} / {post.date} / {post.comments}
            </p>
            <p className="content">{post.content}</p>
            <a href={post.link} className="read-more">Continue Reading</a>
          </div>
        ))}
      </div>

      {/* Right Section - Sidebar */}
      <div className="sidebar">
        {/* Categories */}
        <div className="widget">
          <h3 className="w3-cont">Categories</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>

        {/* Search Box */}
        <div className="widget-1">
          <h3 className="w3-cont-1">Search</h3>
          <input type="text" placeholder="Search..." />
        </div>

        {/* Tags */}
        <div className="widget-1">
          <h3 className="w3-cont-1">Tags</h3>
          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* Recent Comments */}
        <div className="widget-2">
          <h3 className="w3-cont-2">Recent Comments</h3>
          <ul>
            {recentComments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.name}</strong> {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </div>
    <div className="widget-3">
    <h3 className="w3-cont-3">Contact Now For Collaborations</h3>

        <a href="/contact"><button className="w-b-b">Contact</button></a>

  </div>
  </>
      
  );
};

export default BlogPost;
