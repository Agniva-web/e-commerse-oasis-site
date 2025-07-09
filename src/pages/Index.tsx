import { Link } from "react-router-dom";
import { ArrowRight, Star, ShoppingBag, Truck, Shield, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const Index = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-coral via-mint to-lemon bg-clip-text text-transparent animate-pulse">
                  Zentrova
                </span>
              </h1>
              <p className="text-xl text-primary-foreground/90 max-w-lg leading-relaxed">
                Discover amazing products with vibrant design, seamless shopping experience, and innovative technology that brightens your day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/products">
                  <Button variant="hero" size="lg" className="group">
                    Shop Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about">
                  <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-4">
                  {featuredProducts.slice(0, 2).map((product, index) => (
                    <div
                      key={product.id}
                      className="bg-white/90 rounded-lg p-4 shadow-floating animate-scale-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-24 object-cover rounded-md mb-2"
                      />
                      <p className="text-sm font-medium text-foreground line-clamp-1">
                        {product.title}
                      </p>
                      <p className="text-primary font-bold">${product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              Why Choose Zentrova?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
              Experience shopping reimagined with vibrant design, seamless functionality, and products that spark joy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                description: "Free delivery on all orders over $50"
              },
              {
                icon: Shield,
                title: "Secure Payment",
                description: "Your payment information is safe and encrypted"
              },
              {
                icon: Star,
                title: "Premium Quality",
                description: "Only the highest quality products in our store"
              },
              {
                icon: Headphones,
                title: "24/7 Support",
                description: "Expert customer support whenever you need it"
              }
            ].map((feature, index) => (
              <Card
                key={feature.title}
                className="text-center group hover:shadow-card transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
              ✨ Featured Products
            </h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto leading-relaxed">
              Discover our carefully curated selection of amazing products, each chosen to bring joy and innovation to your life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="premium" size="lg">
                <ShoppingBag className="mr-2 h-5 w-5" />
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            🚀 Ready for an Amazing Experience?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of happy customers who've discovered the joy of shopping with Zentrova. Your perfect product is waiting!
          </p>
          <Link to="/products">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Shopping Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
