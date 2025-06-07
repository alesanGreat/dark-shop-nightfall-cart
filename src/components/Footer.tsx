
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold text-foreground mb-4">Premium Store</h3>
            <p className="text-muted-foreground mb-4">
              Your one-stop destination for premium products. We offer quality items 
              with exceptional service and fast delivery.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Mail size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="/cart" className="text-muted-foreground hover:text-primary">Shopping Cart</a></li>
              <li><a href="/about" className="text-muted-foreground hover:text-primary">About Us</a></li>
              <li><a href="/contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground uppercase mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Shipping Info</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Returns</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Premium Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
