import { Star, ShoppingCart, Eye, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/types/product";
import { useCart } from "@/hooks/useCart";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (product.quantity > 0) {
      addToCart(product);
      toast({
        title: "✨ Added to cart",
        description: `${product.title} has been added to your cart.`,
      });
    } else {
      toast({
        title: "😕 Out of stock",
        description: "This product is currently out of stock.",
        variant: "destructive",
      });
    }
  };

  return (
    <Link to={`/product/${product.id}`}>
      <Card className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-floating hover:-translate-y-4 hover:rotate-1 bg-gradient-card border-2 border-transparent hover:border-primary/20 rounded-2xl">
        <div className="relative overflow-hidden rounded-t-2xl">
          <img
            src={product.image}
            alt={product.title}
            className="h-64 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
          />
          
          {/* Floating Action Buttons */}
          <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
            <Button
              variant="coral"
              size="icon"
              className="rounded-full shadow-glow"
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
            <Button
              variant="mint"
              size="icon"
              className="rounded-full shadow-glow"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              variant="lavender"
              size="icon"
              className="rounded-full shadow-glow"
            >
              <Heart className="h-4 w-4" />
            </Button>
          </div>

          {/* Category Badge */}
          {product.category && (
            <Badge className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground border-none shadow-glow">
              {product.category}
            </Badge>
          )}

          {/* Stock Warning Badge */}
          {product.quantity < 10 && product.quantity > 0 && (
            <Badge variant="destructive" className="absolute bottom-3 left-3 shadow-glow">
              Only {product.quantity} left!
            </Badge>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        <CardContent className="p-6">
          <div className="space-y-3">
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {product.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3 leading-relaxed">
              {product.description}
            </p>
            
            {/* Rating */}
            {product.rating && (
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 bg-lemon/20 px-3 py-1 rounded-full">
                  <Star className="h-4 w-4 fill-lemon text-lemon" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="p-6 pt-0 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-sm text-muted-foreground font-medium">
              {product.quantity > 0 ? `${product.quantity} in stock` : "Out of stock"}
            </p>
          </div>
          
          <Button
            variant="hero"
            size="lg"
            onClick={handleAddToCart}
            disabled={product.quantity === 0}
            className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            {product.quantity > 0 ? "Add to Cart" : "Out of Stock"}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}