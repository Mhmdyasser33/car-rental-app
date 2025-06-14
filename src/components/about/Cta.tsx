import { Link } from "lucide-react";
import { Button } from "../ui/button";

export const Cta = ()=>{
    return (
      <section className="py-16 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Experience the DriveAway difference with our premium fleet and
            exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cars">
              <Button
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                Browse Vehicles
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-700"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    );
}