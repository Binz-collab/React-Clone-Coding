import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import './App.css'


function detail() {
  return (
    <div className="Container">
        <div className="row">
            <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="Product Image" width="100%" />
            </div>
            <div className="col-md-6">
                <h2>Product Title</h2>
                <p>Description of the product goes here. It provides details about the features and benefits of the product.</p>
                <p>Price: 100,000원</p>
                <p>Rating: 4.5 (20 reviews)</p>
                <Button variant="primary">Add to Cart</Button>
            </div>
        </div>
        <div className="row mt-5">
            <h3>Related Products</h3>
            <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="Related Product 1" width="100%" />
                <h4>Related Product 1</h4>
                <p>Price: 80,000원</p>
            </div>
            <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes3.jpg" alt="Related Product 2" width="100%" />
                <h4>Related Product 2</h4>
                <p>Price: 90,000원</p>
            </div>
            <div className="col-md-4">
                <img src="https://codingapple1.github.io/shop/shoes4.jpg" alt="Related Product 3" width="100%" />
                <h4>Related Product 3</h4>
                <p>Price: 110,000원</p>
            </div>
        </div>
        <div className="row mt-5">
            <h3>Customer Reviews</h3>
            <p>Review 1: Great product! Highly recommend.</p>
            <p>Review 2: Good quality and fast shipping.</p>
            <p>Review 3: Satisfied with my purchase.</p>
        </div>
        <div className="row mt-5">
            <h3>Product Details</h3>
            <p>Material: 100% Cotton</p>
            <p>Size: Available in S, M, L, XL</p>
            <p>Care Instructions: Machine wash cold, tumble dry low.</p>
        </div>
        <div className="row mt-5">
            <h3>Frequently Asked Questions</h3>
            <p>Q: What is the return policy?</p>
            <p>A: You can return the product within 30 days for a full refund.</p>
            <p>Q: Do you offer international shipping?</p>
            <p>A: Yes, we ship worldwide.</p>
        </div>
        <div className="row mt-5">
            <h3>Contact Us</h3>
            <p>If you have any questions, feel free to contact us at
            <a href="mailto:">mail</a>
            or call us at <a href="tel:+1234567890">+1234567890</a>.</p>
        </div>
        <div className="row mt-5">
            <h3>Social Media</h3>
            <p>Follow us on <a href="#">Facebook</a>, <a href="#">Instagram</a>, and <a href="#">Twitter</a> for the latest updates and promotions.</p>
        </div>
        <div className="row mt-5">
            <h3>Newsletter Signup</h3>
            <p>Subscribe to our newsletter for exclusive offers and updates.</p>
            <input type="email" placeholder="Enter your email" />
            <Button variant="secondary">Subscribe</Button>
        </div>
        <div className="row mt-5">
            <h3>Related Articles</h3>
            <p>Check out our blog for tips and trends related to this product.</p>
            <ul>
                <li><a href="#">Article 1: How to style this product</a></li>
                <li><a href="#">Article 2: Top 10 uses for this product</a></li>
                <li><a href="#">Article 3: Customer stories and testimonials</a></li>
            </ul>
        </div>
        <div className="row mt-5">
            <h3>Product Videos</h3>
            <p>Watch our video tutorials and reviews to learn more about this product.</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameBorder="0" allowFullScreen></iframe>
        </div>
        <div className="row mt-5">
            <h3>Product Availability</h3>
            <p>This product is available in stock. Order now to get it delivered to your doorstep.</p>
        </div>
        <div className="row mt-5">
            <h3>Product Warranty</h3>
            <p>This product comes with a one-year warranty covering manufacturing defects.</p>
        </div>
        <div className="row mt-5">
            <h3>Product Customization</h3>
            <p>Customize this product with your choice of colors and sizes.</p>
            <Button variant="info">Customize Now</Button>
        </div>
        <div className="row mt-5">
            <h3>Product Bundles</h3>
            <p>Check out our bundles for great savings when you buy multiple products together.</p>
            <ul>
                <li><a href="#">Bundle 1: Product A + Product B</a></li>
                <li><a href="#">Bundle 2: Product C + Product D</a></li>
                <li><a href="#">Bundle 3: Product E + Product F</a></li>
            </ul>
        </div>
        <div className="row mt-5">
            <h3>Product Feedback</h3>
            <p>We value your feedback! Let us know your thoughts on this product.</p>
            <textarea placeholder="Your feedback here..." rows="4" cols="50"></textarea>
            <Button variant="secondary">Submit Feedback</Button>
        </div>
    </div>
  );
}

export default detail;