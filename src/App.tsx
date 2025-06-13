
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { Helmet,HelmetProvider } from "react-helmet-async";
const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>DriveAway Car Rentals | Best Cars in saudi arabia </title>
      <meta
        name="description"
        content="Discover luxury car rentals at competitive prices."
      />
      <meta
        name="keywords"
        content="car rental, luxury cars, affordable rentals"
      />
    </Helmet>
    
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
