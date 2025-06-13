
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Star, Search, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { cars } from "@/static/cars";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || car.category === categoryFilter;
    const matchesPrice = 
      priceFilter === "all" ||
      (priceFilter === "low" && car.price < 60) ||
      (priceFilter === "medium" && car.price >= 60 && car.price < 100) ||
      (priceFilter === "high" && car.price >= 100);
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <>
     <Helmet>
      <title> Cart</title>
    </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      {/* Page Header */}
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
            Our Vehicle Fleet
          </h1>
          <p className="text-xl opacity-90 animate-fade-in">
            Choose from our extensive collection of premium vehicles
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-6 bg-white shadow-sm">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="economy">Economy</SelectItem>
                  <SelectItem value="comfort">Comfort</SelectItem>
                  <SelectItem value="luxury">Luxury</SelectItem>
                  <SelectItem value="sports">Sports</SelectItem>
                  <SelectItem value="electric">Electric</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $60/day</SelectItem>
                  <SelectItem value="medium">$60-$100/day</SelectItem>
                  <SelectItem value="high">Over $100/day</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredCars.length} of {cars.length} vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCars.map((car) => (
              <Card key={car.id} className="hover-scale bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-t-lg"></div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{car.name}</h3>
                      <p className="text-blue-600 font-medium capitalize">{car.category}</p>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{car.rating}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mb-4 text-sm text-gray-600">
                    <div>Transmission: {car.transmission}</div>
                    <div>Fuel: {car.fuel}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {car.features.slice(0, 3).map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">${car.price}</span>
                      <span className="text-gray-600">/day</span>
                    </div>
                    <Link to={`/cars/${car.id}`}>
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCars.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No cars found matching your criteria.</p>
              <Button 
                className="mt-4" 
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                  setPriceFilter("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
    </>
  );
};

export default Cars;
