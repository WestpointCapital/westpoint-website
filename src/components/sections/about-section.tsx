import { Target, Users, Lightbulb, Award } from 'lucide-react';
import { Button } from '../ui/button';

const AboutSection = () => {
  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Mission-Driven",
      description: "We're committed to transforming how businesses operate through innovative technology solutions."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Client-Focused",
      description: "Every solution is tailored to meet your specific business objectives and challenges."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Innovation First",
      description: "We stay ahead of technological trends to deliver cutting-edge solutions that future-proof your business."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Excellence Guaranteed",
      description: "Our track record of successful implementations speaks to our commitment to quality and results."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="mx-auto px-6 sm:px-8 w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="font-bold">Westpoint Capital</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Founded with a vision to bridge the gap between traditional business operations 
              and modern technology, Westpoint Capital has emerged as a trusted partner for 
              enterprises seeking digital transformation.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our team of experienced professionals combines deep industry knowledge with 
              cutting-edge technical expertise to deliver solutions that not only meet today's 
              needs but anticipate tomorrow's challenges.
            </p>
            
            <div className="mb-8">
              <Button size="lg" className="hero-button">
                Read more About Us
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">500M+</div>
                <div className="text-sm text-muted-foreground">Data Points Processed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 gap-6">
            {values.map((value, index) => (
              <div key={index} className="glass-container rounded-xl p-6 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="text-primary group-hover:scale-110 transition-transform duration-300 mt-1">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;