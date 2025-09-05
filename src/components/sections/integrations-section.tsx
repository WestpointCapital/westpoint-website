import { Badge } from '@/components/ui/badge';
import { MessageSquare, Users, FileSpreadsheet, Presentation, Database, Cloud, Link, Video, CheckSquare, Target, FileText, Globe } from 'lucide-react';

const IntegrationsSection = () => {
  const integrations = [
    { name: 'Slack', icon: MessageSquare, color: 'bg-purple-500' },
    { name: 'Microsoft Teams', icon: Users, color: 'bg-blue-600' },
    { name: 'Office 365', icon: FileSpreadsheet, color: 'bg-orange-500' },
    { name: 'PowerPoint', icon: Presentation, color: 'bg-red-500' },
    { name: 'Excel', icon: FileSpreadsheet, color: 'bg-green-600' },
    { name: 'Salesforce', icon: Cloud, color: 'bg-blue-400' },
    { name: 'HubSpot', icon: Link, color: 'bg-orange-600' },
    { name: 'Zoom', icon: Video, color: 'bg-blue-500' },
    { name: 'Asana', icon: CheckSquare, color: 'bg-pink-500' },
    { name: 'Jira', icon: Target, color: 'bg-blue-700' },
    { name: 'Notion', icon: FileText, color: 'bg-gray-800' },
    { name: 'Google Workspace', icon: Globe, color: 'bg-blue-500' },
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Plasma gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Subtle plasma effect in corners */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-48 h-48 bg-violet-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-indigo-400/20 rounded-full blur-2xl"></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/5">
            Integrations
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Integrations catalog
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a diverse catalog of apps that seamlessly integrate with our platform to bring more value to your favorite tools.
          </p>
        </div>

        {/* Integration Icons Grid */}
          <div
            className="relative px-16"
            style={{
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)',
              maskImage: 'linear-gradient(to right, transparent, black 64px, black calc(100% - 64px), transparent)'
            }}
          >
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-8 py-4">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="group flex flex-col items-center"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon container with reflection effect */}
                <div className="relative p-4">
                  <div 
                    className={`w-16 h-16 ${integration.color} rounded-2xl flex items-center justify-center transform transition-all duration-300 group-hover:scale-105 shadow-2xl`}
                  >
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Reflection effect */}
                  <div 
                    className={`absolute top-full left-2 w-16 h-8 ${integration.color} rounded-b-2xl flex items-start justify-center opacity-20 transform scale-y-[-1] blur-sm`}
                  >
                    <integration.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                {/* Integration name */}
                <span className="mt-6 text-sm text-gray-400 group-hover:text-white transition-colors duration-300 text-center">
                  {integration.name}
                </span>
              </div>
            ))}
          </div>
          
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            And many more integrations available
          </p>
          <button className="bg-white/10 text-white px-8 py-3 rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm">
            View All Integrations
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;