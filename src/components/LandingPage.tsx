
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Truck, Shield, Star } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {  const features = [
    {
      icon: ShoppingBag,
      title: "Premium Plants",
      description: "Hand-selected healthy houseplants from trusted nurseries"
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Secure packaging ensures your plants arrive healthy and thriving"
    },
    {
      icon: Shield,
      title: "Plant Guarantee",
      description: "30-day guarantee on all plants with care instructions included"
    },
    {
      icon: Star,
      title: "Expert Care Tips",
      description: "Get personalized plant care advice from our horticulture experts"
    }
  ];  const products = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: "$45",
      image: "/assets/monstera-deliciosa-leaf-scaled.jpg",
      rating: 5
    },
    {
      id: 2,
      name: "Snake Plant",
      price: "$29",
      image: "/assets/snake-plants.jpg",
      rating: 5
    },
    {
      id: 3,
      name: "Peace Lily",
      price: "$35",
      image: "/assets/Peace Lily.jpeg",
      rating: 4
    }
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}      <section 
        className="bg-gradient-dark text-white py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/assets/golden-pothos-care-image1-scaled.webp')"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-gradient">GreenLeaf Gardens</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Transform your home into a green oasis with our carefully curated collection of premium houseplants. 
            We specialize in bringing nature indoors with plants that purify your air and beautify your space.
          </p>
          <div className="space-x-4">            <Link to="/products">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started
              </Button>
            </Link>
            <Link to="/cart">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                View Cart
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Featured Plants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <div className="flex items-center">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <Button className="w-full mt-4">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
