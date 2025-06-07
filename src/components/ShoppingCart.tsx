import React from 'react';
import { ShoppingCart as CartIcon, Plus, Minus, Trash2, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/types';
import { incrementQuantity, decrementQuantity, removeFromCart } from '@/store/cartSlice';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { toast } = useToast();
  const dispatch = useDispatch();
  const { items, totalItems, totalCost } = useSelector((state: RootState) => state.cart);
  const handleIncreaseQuantity = (plantId: number) => {
    dispatch(incrementQuantity(plantId));
  };

  const handleDecreaseQuantity = (plantId: number) => {
    dispatch(decrementQuantity(plantId));
  };

  const handleRemoveItem = (plantId: number) => {
    dispatch(removeFromCart(plantId));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart.",
    });
  };

  const handleCheckout = () => {
    toast({
      title: "Coming Soon",
      description: "Checkout functionality will be available soon!",
    });
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center py-16">          <CardContent>
            <CartIcon className="mx-auto h-24 w-24 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">Add some beautiful plants to get started!</p><Link to="/products">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-2xl">
            <CartIcon className="mr-3 h-6 w-6" />
            Shopping Cart
          </CardTitle>
        </CardHeader>
        <CardContent>          {/* Cart Summary */}
          <div className="bg-muted p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-semibold">Total Items:</span>
              <span className="text-lg font-bold text-primary">{totalItems}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total Cost:</span>
              <span className="text-2xl font-bold text-primary">${totalCost.toFixed(2)}</span>
            </div>
          </div>

          {/* Cart Items */}
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.plant.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.plant.image}
                    alt={item.plant.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.plant.name}</h3>
                    <p className="text-muted-foreground text-sm">{item.plant.description}</p>
                    <p className="text-primary font-bold">${item.plant.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDecreaseQuantity(item.plant.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleIncreaseQuantity(item.plant.id)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={() => handleRemoveItem(item.plant.id)}
                      className="ml-4"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="mt-2 text-right">
                  <span className="text-lg font-semibold">
                    Subtotal: ${(item.plant.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between">
            <Link to="/products">
              <Button variant="outline" className="w-full sm:w-auto">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </Link>            <Button 
              onClick={handleCheckout}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Checkout - ${totalCost.toFixed(2)}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ShoppingCart;
