
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Star, Users, Fuel, Settings, Calendar, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

const CarDetails = () => {
  const [bookingData, setBookingData] = useState({
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    driverAge: "",
  });

  const car = {
    id: 1,
    name: "BMW 3 Series",
    category: "Luxury",
    price: 89,
    image: "/placeholder.svg",
    rating: 4.8,
    reviews: 127,
    features: ["Automatic Transmission", "5 Seats", "Premium Audio", "Navigation", "Leather Seats", "Climate Control"],
    specifications: {
      engine: "2.0L Turbo",
      transmission: "8-Speed Automatic",
      fuel: "Gasoline",
      seats: 5,
      luggage: "Large",
      fuelConsumption: "7.5L/100km",
    },
    description: "Experience luxury and performance with the BMW 3 Series. This premium sedan combines elegant design with cutting-edge technology to deliver an exceptional driving experience.",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!bookingData.pickupDate || !bookingData.returnDate || !bookingData.pickupLocation) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Calculate days
    const pickup = new Date(bookingData.pickupDate);
    const returnDate = new Date(bookingData.returnDate);
    const days = Math.ceil((returnDate.getTime() - pickup.getTime()) / (1000 * 3600 * 24));
    
    if (days <= 0) {
      toast({
        title: "Invalid Dates",
        description: "Return date must be after pickup date.",
        variant: "destructive",
      });
      return;
    }

    const totalPrice = days * car.price;
    
    toast({
      title: "Booking Initiated!",
      description: `Total: $${totalPrice} for ${days} days. You'll be redirected to payment.`,
    });
  };

  return (
    <>
    <Helmet>
      <title> Cart Details</title>
    </Helmet>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Breadcrumb */}
      <section className="py-6 px-6 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <Link to="/cars" className="inline-flex items-center text-blue-600 hover:text-blue-700">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cars
          </Link>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Car Images */}
            <div className="space-y-4">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-gray-500">
                  Main Car Image
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {car.images.map((image, index) => (
                  <div key={index} className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg cursor-pointer hover-scale">
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                      Image {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Car Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{car.name}</h1>
                <p className="text-xl text-blue-600 font-medium mb-4">{car.category}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-lg font-medium">{car.rating}</span>
                  </div>
                  <span className="ml-2 text-gray-600">({car.reviews} reviews)</span>
                </div>

                <p className="text-gray-700 leading-relaxed">{car.description}</p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Features</h3>
                <div className="grid grid-cols-2 gap-2">
                  {car.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <Settings className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Engine</p>
                      <p className="font-medium">{car.specifications.engine}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Seats</p>
                      <p className="font-medium">{car.specifications.seats}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Fuel Type</p>
                      <p className="font-medium">{car.specifications.fuel}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                    <div>
                      <p className="text-sm text-gray-600">Transmission</p>
                      <p className="font-medium">{car.specifications.transmission}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-center">
                  <span className="text-3xl font-bold text-gray-900">${car.price}</span>
                  <span className="text-gray-600 ml-1">/day</span>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="mt-12">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Book This Car</h2>
                <form onSubmit={handleBooking} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pickupDate">Pickup Date</Label>
                      <Input
                        id="pickupDate"
                        type="date"
                        value={bookingData.pickupDate}
                        onChange={(e) => setBookingData({...bookingData, pickupDate: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="returnDate">Return Date</Label>
                      <Input
                        id="returnDate"
                        type="date"
                        value={bookingData.returnDate}
                        onChange={(e) => setBookingData({...bookingData, returnDate: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="pickupLocation">Pickup Location</Label>
                    <Input
                      id="pickupLocation"
                      placeholder="Enter pickup location"
                      value={bookingData.pickupLocation}
                      onChange={(e) => setBookingData({...bookingData, pickupLocation: e.target.value})}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="driverAge">Driver Age</Label>
                    <Input
                      id="driverAge"
                      type="number"
                      placeholder="Age (minimum 21)"
                      min="21"
                      value={bookingData.driverAge}
                      onChange={(e) => setBookingData({...bookingData, driverAge: e.target.value})}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                    Book Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default CarDetails;
