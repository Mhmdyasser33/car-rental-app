import { ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";

export const Story = ()=>{
    return(
        <section className="py-16 px-6 bg-gray-50">
<div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
        <div className="space-y-4 text-gray-700">
        <p>
            Founded in 1999, DriveAway began as a small family business with
            just five vehicles and a simple mission: to provide reliable,
            affordable transportation solutions for our community.
        </p>
        <p>
            Over the years, we've grown into one of the region's most trusted
            car rental companies, expanding our fleet to over 500 premium
            vehicles while maintaining our commitment to personalized service
            and customer satisfaction.
        </p>
        <p>
            Today, we serve thousands of customers annually, from business
            travelers and tourists to local residents in need of temporary
            transportation. Our success is built on the trust and loyalty of our
            customers.
        </p>
        </div>
        <Link to="/cars">
        <Button className="mt-6 bg-blue-600 hover:bg-blue-700">
            Explore Our Fleet <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        </Link>
    </div>
    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">
        <img src="/" alt="company image" />
        </span>
    </div>
    </div>
</div>
</section>

    )
}