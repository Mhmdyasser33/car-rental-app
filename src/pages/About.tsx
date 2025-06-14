
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { stats } from "@/static/stats";
import { values } from "@/static/values";
import { team } from "@/static/team";
import { Hero } from "@/components/about/Hero";
import { Stats } from "@/components/about/Stats";
import { Story } from "@/components/about/Story";
import { Values } from "@/components/about/Values";
import { Team } from "@/components/about/Team";
import { Cta } from "@/components/about/Cta";
const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
     <Hero/>
     <Stats/>
     <Story/>
     <Values/>
     <Team/>
     <Cta/>
      <Footer />
    </div>
  );
};

export default About;
