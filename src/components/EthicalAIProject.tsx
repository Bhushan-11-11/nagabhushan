
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Brain, Code, AlertTriangle, FileCode, Shield } from 'lucide-react';

const EthicalAIProject = () => {
  const [selectedTab, setSelectedTab] = useState<'primeChecker' | 'fibonacci'>('primeChecker');
  
  return (
    <section id="ethical-ai-project" className="py-24 bg-softGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-charcoal">
          Ethical AI in Code: Human vs AI Analysis
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Project Overview */}
          <div className="lg:col-span-5">
            <Card className="h-full overflow-hidden bg-white/95 backdrop-blur-sm border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-semibold text-charcoal">Research Initiative</h3>
                </div>
                
                <p className="text-charcoal/80 mb-4">
                  Under the guidance of <strong>Dr. Sulthana</strong>, this research project analyzes code quality, security, 
                  and ethical implications of AI-generated vs human-written code using SonarQube.
                </p>
                
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-2">Comparative Metrics:</h4>
                  <ul className="list-disc list-inside space-y-1 text-charcoal/70">
                    <li>Code Duplications</li>
                    <li>Maintainability</li>
                    <li>Reliability</li>
                    <li>Security Vulnerabilities</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-2">Workflow:</h4>
                  <div className="bg-softBlue/30 p-4 rounded-md">
                    <div className="flex flex-wrap justify-between items-center text-xs md:text-sm">
                      <div className="flex flex-col items-center w-1/4 p-2">
                        <div className="bg-softBlue w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <FileCode size={24} className="text-primary" />
                        </div>
                        <span className="text-center">Code Collection</span>
                      </div>
                      <div className="hidden md:block">→</div>
                      <div className="flex flex-col items-center w-1/4 p-2">
                        <div className="bg-softBlue w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Code size={24} className="text-primary" />
                        </div>
                        <span className="text-center">Categorization</span>
                      </div>
                      <div className="hidden md:block">→</div>
                      <div className="flex flex-col items-center w-1/4 p-2">
                        <div className="bg-softBlue w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Shield size={24} className="text-primary" />
                        </div>
                        <span className="text-center">SonarQube Analysis</span>
                      </div>
                      <div className="hidden md:block">→</div>
                      <div className="flex flex-col items-center w-1/4 p-2">
                        <div className="bg-softBlue w-12 h-12 rounded-full flex items-center justify-center mb-2">
                          <Brain size={24} className="text-primary" />
                        </div>
                        <span className="text-center">Results</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium text-primary mb-2">Ethical Takeaways:</h4>
                  <p className="text-charcoal/70 mb-2">
                    AI code is faster to produce but struggles with logic complexity; human code excels in maintainability and reliability.
                  </p>
                  
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <div className="flex items-center gap-2 text-orange-600 cursor-pointer">
                        <AlertTriangle size={16} />
                        <span className="text-sm font-medium">Ethical Concerns</span>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80">
                      <div className="space-y-2">
                        <h5 className="font-medium">Key Ethical Considerations:</h5>
                        <ul className="list-disc list-inside text-sm">
                          <li>Technical debt in AI-generated solutions</li>
                          <li>Plagiarism risks and copyright implications</li>
                          <li>Accountability for AI-written code failures</li>
                          <li>Over-reliance on AI without understanding</li>
                        </ul>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
                
                <Button className="w-full">
                  Interested in ethical AI development? Let's discuss!
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Code Comparison */}
          <div className="lg:col-span-7">
            <Card className="overflow-hidden bg-white/95 backdrop-blur-sm border-none shadow-lg h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-charcoal mb-4">Code Comparison Analysis</h3>
                
                {/* Tab Selection */}
                <div className="flex mb-4 bg-softBlue/30 rounded-md p-1">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      selectedTab === 'primeChecker'
                        ? 'bg-white text-primary shadow-sm' 
                        : 'hover:bg-white/50'
                    }`}
                    onClick={() => setSelectedTab('primeChecker')}
                  >
                    Prime Checker
                  </button>
                  <button 
                    className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                      selectedTab === 'fibonacci' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'hover:bg-white/50'
                    }`}
                    onClick={() => setSelectedTab('fibonacci')}
                  >
                    Fibonacci
                  </button>
                </div>
                
                {/* Code Comparison */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* AI Code */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Brain className="h-5 w-5 text-primary" />
                      <h4 className="font-medium">AI-Generated Code</h4>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
                      {selectedTab === 'primeChecker' ? (
                        <pre className="whitespace-pre-wrap">
{`public boolean isPrime(int n) {
  if (n <= 1) {
    System.out.println("Not prime");
    return false;
  }
  
  for (int i = 2; i < n; i++) {
    if (n % i == 0) {
      System.out.println("Not prime");
      return false;
    }
  }
  
  System.out.println("Is prime");
  return true;
}`}
                        </pre>
                      ) : (
                        <pre className="whitespace-pre-wrap">
{`public int fibonacci(int n) {
  if (n <= 0) {
    System.out.println("Invalid input");
    return 0;
  }
  if (n == 1 || n == 2) {
    return 1;
  }
  
  return fibonacci(n-1) + fibonacci(n-2);
}`}
                        </pre>
                      )}
                    </div>
                    
                    <div className="mt-3 p-3 bg-softBlue/30 rounded-md">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-sm text-primary font-medium">AI Code Issues:</TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-xs">Issues detected by SonarQube</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <ul className="list-disc list-inside text-xs text-charcoal/70 mt-1">
                        {selectedTab === 'primeChecker' ? (
                          <>
                            <li>Inefficient algorithm (checks all numbers)</li>
                            <li>Duplicate console outputs</li>
                            <li>Mixed concerns (calculation + output)</li>
                          </>
                        ) : (
                          <>
                            <li>Inefficient recursive implementation</li>
                            <li>Exponential time complexity O(2ⁿ)</li>
                            <li>System.out in business logic</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Human Code */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="h-5 w-5 text-orange-600" />
                      <h4 className="font-medium">Human-Written Code</h4>
                    </div>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-md text-sm font-mono overflow-x-auto">
                      {selectedTab === 'primeChecker' ? (
                        <pre className="whitespace-pre-wrap">
{`public boolean isPrime(int n) {
  if (n <= 1) {
    return false;
  }
  
  // Only check up to square root
  for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  
  return true;
}`}
                        </pre>
                      ) : (
                        <pre className="whitespace-pre-wrap">
{`public int fibonacci(int n) {
  if (n <= 0) {
    return 0;
  }
  
  int a = 0, b = 1;
  for (int i = 2; i <= n; i++) {
    int temp = a + b;
    a = b;
    b = temp;
  }
  
  return b;
}`}
                        </pre>
                      )}
                    </div>
                    
                    <div className="mt-3 p-3 bg-softBlue/30 rounded-md">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger className="text-sm text-primary font-medium">Human Code Strengths:</TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-xs">Benefits identified by SonarQube</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <ul className="list-disc list-inside text-xs text-charcoal/70 mt-1">
                        {selectedTab === 'primeChecker' ? (
                          <>
                            <li>Optimized algorithm (Math.sqrt)</li>
                            <li>Separation of concerns (no console output)</li>
                            <li>Better maintainability score</li>
                          </>
                        ) : (
                          <>
                            <li>Iterative approach (O(n) complexity)</li>
                            <li>Memory efficient implementation</li>
                            <li>No mixed responsibilities</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthicalAIProject;
