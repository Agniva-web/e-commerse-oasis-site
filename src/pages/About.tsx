import { ArrowRight, ShoppingBag, Shield, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20" />
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              About
              <span className="block bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
                TechStore
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Welcome to TechStore – your one-stop destination for discovering and purchasing quality tech products with ease. 
              Our goal is to make online shopping as simple and enjoyable as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Mission Statement */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TechStore, we believe that technology should enhance your life, not complicate it. 
                From browsing detailed product listings with high-quality images and transparent pricing 
                to experiencing our seamless checkout process, everything is designed with you in mind. 
                We're committed to providing an efficient, reliable, and intuitive shopping experience 
                that puts your needs first.
              </p>
            </div>

            {/* What We Offer */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <ShoppingBag className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">For Customers</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Explore our curated collection of premium tech products with detailed descriptions, 
                    competitive prices, and authentic images. Add items to your cart and enjoy a 
                    streamlined checkout experience with real-time inventory tracking.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center">Secure & Reliable</h3>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    Behind the scenes, our platform ensures accurate stock tracking, secure transactions, 
                    and automatic inventory management. Every purchase reduces product quantities in real-time, 
                    maintaining transparency and preventing overselling.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Our Values */}
            <div className="text-center space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Customer-Centric</h3>
                  <p className="text-muted-foreground">
                    Every feature and design decision is made with our customers' convenience and satisfaction in mind.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Transparency</h3>
                  <p className="text-muted-foreground">
                    We believe in honest pricing, clear product information, and transparent business practices.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Quality</h3>
                  <p className="text-muted-foreground">
                    We carefully curate our product selection to ensure you receive only the best technology has to offer.
                  </p>
                </div>
              </div>
            </div>

            {/* Admin Information */}
            <div className="bg-muted/30 rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold text-center">For Store Administrators</h2>
              <p className="text-muted-foreground text-center leading-relaxed">
                Our secure admin panel empowers store owners with comprehensive product management capabilities. 
                Add new products, update existing listings, modify prices and descriptions, manage inventory levels, 
                and upload product images – all through an intuitive interface designed for efficiency and ease of use.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="text-center space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're a customer looking for great products or an admin managing the store, 
                our platform provides a seamless experience built on simplicity, transparency, and reliability. 
                Join our community of satisfied customers and discover the perfect tech products for your needs.
              </p>
              <Link to="/products">
                <Button variant="premium" size="lg" className="group">
                  Start Shopping
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}