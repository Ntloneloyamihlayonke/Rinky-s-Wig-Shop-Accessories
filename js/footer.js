// Function to create and insert the footer
function createFooter() {
    // Footer HTML structure
    const footerHTML = `
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-row">
                <!-- Footer Column 1 -->
                <div class="footer-col">
                    <h4>Rinky's Wig Shop</h4>
                    <ul>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="products.html">Our Products</a></li>
                        <li><a href="contact.html">Contact us</a></li>
                    </ul>
                </div>
               
                <!-- Footer Column 2 -->
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul
                        <li><a href="contact.html"> Google Customer feedback form</a></li>
                        <li><a href="contact.html">Detailed customer information</a></li>
                    </ul>
                </div>
               
                <!-- Footer Column 3 -->
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="https://www.facebook.com/share/1EbwGeWzJR/?mibextid=wwXIfr"><i class='bxl bx-facebook-square'></i> </a>
                    </div>
                </div>
            </div>
                <p> <main align="center">Your perfect wig awaits- Contact Us:</main></p>
        <p> <main> 
            Phone: 083 386 5483<br>
            Email: <a href="norinkinkasayi@gmail.com">norinkinkasayi@gmail.com</a><br>
            Address: Terminus Building, Butterworth, king st, Gcuwa 4960
        </main> </p>
        <!-- Copyright -->
        <div class="footer-copyright">
            <p>&copy; ${new Date().getFullYear()} Rinky's Wig Shop & Accesories. All rights reserved.</p>
            </div>
        </div>
    </footer>
    `;
   
    // Insert the footer at the end of the body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
}
 
// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', createFooter);