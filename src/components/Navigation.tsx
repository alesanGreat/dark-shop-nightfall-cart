
import { ShoppingCart, Home, Leaf, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/types';

const Navigation = () => {
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);

  return (
    <nav className="bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-foreground">GreenLeaf Gardens</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                to="/" 
                className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Home size={16} />
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-muted-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
              >
                <Leaf size={16} />
                Plants
              </Link>
            </div>
          </div>
          
          <Link to="/cart">
            <Button variant="outline" size="sm" className="relative">
              <ShoppingCart size={16} className="mr-2" />
              Cart
              {totalItems > 0 && (
                <Badge 
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground min-w-[20px] h-5 flex items-center justify-center text-xs rounded-full"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
