import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/types';
import { addToCart } from '@/store/cartSlice';
import { plantsData, categories } from '@/data/plants';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/Layout';

const Products = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const isPlantInCart = (plantId: number) => {
    return cartItems.some(item => item.plant.id === plantId);
  };

  const handleAddToCart = (plant: any) => {
    dispatch(addToCart(plant));
  };

  const getPlantsByCategory = (category: string) => {
    return plantsData.filter(plant => plant.category === category);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-background">        {/* Header Section */}
        <div className="bg-muted/30 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-foreground mb-4">
              Our Plant Collection
            </h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Discover our carefully curated selection of houseplants to transform your living space
            </p>
          </div>
        </div>

        {/* Products by Category */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {categories.map((category) => (
            <div key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold text-foreground">{category}</h2>
                <Badge variant="secondary" className="ml-4">
                  {getPlantsByCategory(category).length} plants
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {getPlantsByCategory(category).map((plant) => (
                  <Card key={plant.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <img 
                        src={plant.image} 
                        alt={plant.name}
                        className="w-full h-64 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-xl mb-2">{plant.name}</CardTitle>
                      <p className="text-muted-foreground mb-4 text-sm line-clamp-2">
                        {plant.description}
                      </p>                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-primary">
                          ${plant.price.toFixed(2)}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {plant.category}
                        </Badge>
                      </div>
                      <Button 
                        className={`w-full ${
                          isPlantInCart(plant.id) 
                            ? 'bg-muted cursor-not-allowed text-muted-foreground' 
                            : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                        }`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isPlantInCart(plant.id)}
                      >
                        {isPlantInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Products;
