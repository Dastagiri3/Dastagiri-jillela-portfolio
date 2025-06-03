import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Mail, MapPin, User, Code, BarChart, Database, ExternalLink, Calendar, Users, Target } from 'lucide-react';

const Index = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const skills = [
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'SQL', level: 90, category: 'Database' },
    { name: 'Excel', level: 95, category: 'Tools' },
    { name: 'Power BI', level: 80, category: 'Visualization' },
    { name: 'Tableau', level: 75, category: 'Visualization' },
    { name: 'R', level: 50, category: 'Programming' },
    { name: 'Statistics', level: 85, category: 'Analytics' },
    { name: 'Machine Learning', level: 75, category: 'Analytics' },
  ];

  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Comprehensive Power BI dashboard analyzing quarterly sales performance across 15 regions with real-time KPI tracking, trend analysis, and predictive forecasting. Features include revenue tracking, sales rep performance metrics, product category analysis, customer acquisition costs, and automated alert systems for targets missed by >10%.',
      tech: ['Power BI', 'SQL Server', 'Excel', 'DAX', 'Power Query'],
      impact: '25% improvement in sales tracking efficiency, 15% increase in quarterly targets achievement',
      features: [
        'Real-time sales data visualization',
        'Interactive regional performance maps',
        'Automated KPI alerts and notifications',
        'Sales forecasting with 92% accuracy',
        'Customer segmentation analysis',
        'Product performance drill-down capabilities'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      link: '#',
      duration: '3 months',
      team: '4 members',
      client: 'Fortune 500 Retail Company',
      challenge: 'The company was struggling with fragmented sales data across multiple regions and systems, making it difficult to track performance and identify trends in real-time.',
      solution: 'Developed a comprehensive Power BI dashboard that consolidated data from 15 regional databases, implemented automated data refresh cycles, and created predictive models for sales forecasting.',
      results: [
        'Reduced report generation time from 2 days to 30 minutes',
        'Improved sales target achievement by 15% through better visibility',
        'Enabled data-driven decision making for 50+ sales managers',
        'Identified underperforming regions leading to targeted interventions'
      ]
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Python-based customer segmentation using K-means clustering to identify distinct customer groups for targeted marketing strategies.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib'],
      impact: 'Identified 5 key customer segments',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      link: '#',
      duration: '2 months',
      team: '2 members',
      client: 'E-commerce Platform',
      challenge: 'The marketing team was using broad, untargeted campaigns that resulted in low conversion rates and high customer acquisition costs.',
      solution: 'Applied K-means clustering algorithm on customer transaction data, demographics, and behavior patterns to identify distinct customer segments with similar characteristics.',
      results: [
        'Identified 5 distinct customer segments with unique behaviors',
        'Increased email campaign conversion rates by 35%',
        'Reduced customer acquisition cost by 20%',
        'Enabled personalized product recommendations'
      ],
      features: [
        'Automated data preprocessing pipeline',
        'Interactive cluster visualization',
        'Customer profile generation',
        'Segment performance tracking'
      ]
    },
    {
      title: 'Financial Fraud Detection',
      description: 'Machine learning model to detect fraudulent transactions using anomaly detection techniques with 94% accuracy rate.',
      tech: ['Python', 'TensorFlow', 'SQL', 'Tableau'],
      impact: '94% accuracy in fraud detection',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      link: '#',
      duration: '4 months',
      team: '3 members',
      client: 'Financial Services Company',
      challenge: 'Manual fraud detection was time-consuming and missed sophisticated fraud patterns, resulting in significant financial losses.',
      solution: 'Developed an ensemble machine learning model combining isolation forests and neural networks to detect anomalous transaction patterns in real-time.',
      results: [
        'Achieved 94% accuracy in fraud detection',
        'Reduced false positive rate by 40%',
        'Prevented $2M in potential fraud losses',
        'Decreased investigation time from hours to minutes'
      ],
      features: [
        'Real-time transaction monitoring',
        'Anomaly scoring and ranking',
        'Automated alert system',
        'Model performance dashboard',
        'Historical fraud pattern analysis'
      ]
    },
    {
      title: 'Inventory Optimization Study',
      description: 'Statistical analysis of inventory patterns to optimize stock levels and reduce carrying costs by 15% while maintaining service levels.',
      tech: ['R', 'Excel', 'Power BI', 'Statistics'],
      impact: '15% reduction in carrying costs',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
      link: '#',
      duration: '6 weeks',
      team: '2 members',
      client: 'Manufacturing Company',
      challenge: 'High inventory carrying costs and frequent stockouts were impacting profitability and customer satisfaction.',
      solution: 'Conducted comprehensive statistical analysis of inventory patterns, demand forecasting, and supply chain optimization to determine optimal stock levels.',
      results: [
        'Reduced inventory carrying costs by 15%',
        'Decreased stockout incidents by 30%',
        'Improved inventory turnover ratio by 25%',
        'Optimized reorder points for 500+ SKUs'
      ],
      features: [
        'Demand forecasting models',
        'Safety stock calculations',
        'Reorder point optimization',
        'Inventory performance metrics',
        'Seasonal trend analysis'
      ]
    }
  ];

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/10fc4b17-58e9-407a-a472-d812f517572b.png';
    link.download = 'Dastagiri_Jillela_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-600">
              Dastagiri Jillela
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Dastagiri Jillela
              <span className="text-blue-600 block">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transforming raw data into actionable insights through statistical analysis, 
              visualization, and machine learning techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
                onClick={handleDownloadResume}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900 text-center">
                Fresh Graduate with Passion for Data
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                Recent graduate with a strong foundation in data analysis, statistics, and programming. 
                Passionate about uncovering insights from complex datasets and translating them into 
                business value.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center max-w-2xl mx-auto">
                <div className="flex items-center justify-center space-x-3">
                  <User className="text-blue-600" size={20} />
                  <span className="text-gray-700">Dastagiri Jillela</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="text-blue-600" size={20} />
                  <span className="text-gray-700">Hyderabad, India</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="text-blue-600" size={20} />
                  <span className="text-gray-700">gurudastagiri3@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <Badge variant="secondary">{skill.category}</Badge>
                </div>
                <Progress value={skill.level} className="h-3" />
                <span className="text-sm text-gray-600 mt-2 block">{skill.level}% Proficiency</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={project.title} className="hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-blue-600 border-blue-600">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    {project.features && (
                      <div className="bg-blue-50 p-3 rounded-lg border border-blue-200">
                        <h4 className="font-semibold text-blue-800 mb-2">Key Features:</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          {project.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                      <span className="text-green-800 font-semibold">Impact: </span>
                      <span className="text-green-700">{project.impact}</span>
                    </div>
                    
                    <Dialog open={isDialogOpen && selectedProject?.title === project.title} onOpenChange={(open) => {
                      setIsDialogOpen(open);
                      if (!open) setSelectedProject(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                          onClick={() => handleViewDetails(project)}
                        >
                          View Project Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        {selectedProject && (
                          <>
                            <DialogHeader>
                              <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                                {selectedProject.title}
                              </DialogTitle>
                              <DialogDescription className="text-gray-600 text-base">
                                {selectedProject.description}
                              </DialogDescription>
                            </DialogHeader>
                            
                            <div className="space-y-6 mt-6">
                              {/* Project Overview */}
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Calendar className="text-blue-600" size={20} />
                                    <span className="font-semibold">Duration</span>
                                  </div>
                                  <p className="text-gray-700">{selectedProject.duration}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Users className="text-blue-600" size={20} />
                                    <span className="font-semibold">Team Size</span>
                                  </div>
                                  <p className="text-gray-700">{selectedProject.team}</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <div className="flex items-center space-x-2 mb-2">
                                    <Target className="text-blue-600" size={20} />
                                    <span className="font-semibold">Client</span>
                                  </div>
                                  <p className="text-gray-700">{selectedProject.client}</p>
                                </div>
                              </div>

                              {/* Challenge */}
                              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                                <h4 className="font-semibold text-red-800 mb-2">Challenge</h4>
                                <p className="text-red-700">{selectedProject.challenge}</p>
                              </div>

                              {/* Solution */}
                              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <h4 className="font-semibold text-blue-800 mb-2">Solution</h4>
                                <p className="text-blue-700">{selectedProject.solution}</p>
                              </div>

                              {/* Technologies */}
                              <div>
                                <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                  {selectedProject.tech.map((tech) => (
                                    <Badge key={tech} variant="outline" className="text-blue-600 border-blue-600">
                                      {tech}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              {/* Features */}
                              {selectedProject.features && (
                                <div>
                                  <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {selectedProject.features.map((feature, idx) => (
                                      <li key={idx} className="flex items-start">
                                        <span className="text-blue-500 mr-2">•</span>
                                        <span className="text-gray-700">{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Results */}
                              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                                <h4 className="font-semibold text-green-800 mb-3">Results & Impact</h4>
                                <ul className="space-y-2">
                                  {selectedProject.results.map((result, idx) => (
                                    <li key={idx} className="flex items-start">
                                      <span className="text-green-500 mr-2">✓</span>
                                      <span className="text-green-700">{result}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </>
                        )}
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8 text-blue-100">
            Ready to turn your data into actionable insights? Let's discuss how I can help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600"
              onClick={handleDownloadResume}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Data Analyst Portfolio. Built with React and modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
