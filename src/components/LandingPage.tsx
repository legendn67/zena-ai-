import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Cpu, Zap, BarChart3, Users, MessageSquare, ShieldCheck, Clock, DollarSign, Handshake, Database, TrendingUp } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <div className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">ZenaAI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-muted">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#process" className="hover:text-white transition-colors">Process</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export const Preloader = ({ onComplete }: { onComplete: () => void, key?: string }) => {
  const text = "Automate the Future of Work.";
  
  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-brand-bg flex flex-col items-center justify-center p-6"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 radial-gradient-bg opacity-30" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-center tracking-tighter text-gradient">
          {text.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, filter: "blur(20px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: i * 0.04,
                ease: [0.2, 0.65, 0.3, 0.9]
              }}
              className="inline-block"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
        
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          onAnimationComplete={onComplete}
          className="h-[1px] bg-white/20 mt-8 max-w-xs mx-auto overflow-hidden"
        >
          <motion.div 
            className="h-full bg-white"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  const line1 = "Automate the Future";
  const line2 = "of Work.";
  
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 radial-gradient-bg pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 max-w-6xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-brand-muted mb-8">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          Next-Gen AI Automation for Scale
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] md:leading-[0.9] tracking-tighter text-gradient">
          <div className="block md:whitespace-nowrap">
            {line1.split("").map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, filter: "blur(15px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5 + i * 0.03,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <div className="block md:whitespace-nowrap">
            {line2.split("").map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, filter: "blur(15px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 0.5 + (line1.length + i) * 0.03,
                  ease: [0.2, 0.65, 0.3, 0.9]
                }}
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
        </h1>
        
        <p className="text-lg md:text-xl text-brand-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          ZenaAI builds intelligent workflows and custom AI agents that transform your business operations into a high-performance engine.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group bg-white text-black px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all">
            Book a Strategy Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 transition-colors">
            View Case Studies
          </button>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-20 relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
      >
        <img 
          src="https://picsum.photos/seed/zena/1200/800?blur=2" 
          alt="Dashboard Preview" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="glass p-8 rounded-2xl max-w-md text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold">Workflow Active</h3>
                <p className="text-xs text-brand-muted">Processing 1.2k tasks/min</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "75%" }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-white"
                />
              </div>
              <div className="h-2 w-2/3 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "45%" }}
                  transition={{ duration: 1.5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="h-full bg-white/50"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export const Features = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Increased Productivity",
      description: "Gain actionable insights with AI-driven analytics to improve decision-making and strategy."
    },
    {
      icon: <Handshake className="w-5 h-5" />,
      title: "Better Customer Experience",
      description: "Personalized AI interactions improve response times, customer engagement, and overall satisfaction."
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "24/7 Availability",
      description: "AI-powered systems operate around the clock, ensuring seamless support and execution without downtime."
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Cost Reduction",
      description: "AI automation minimizes manual work, cuts operational costs, and optimizes resource allocation for better profitability."
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data-Driven Insights",
      description: "Leverage AI to analyze vast data sets, identify trends, and make smarter, faster, and more accurate business decisions."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Scalability & Growth",
      description: "AI adapts to your business needs, allowing you to scale efficiently without increasing workload or costs."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="features" 
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-4 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-widest font-bold mb-6"
        >
          Benefits
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight"
        >
          The Key Benefits of AI <br /> for Your Business Growth
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-brand-muted max-w-2xl mx-auto text-lg font-light"
        >
          Discover how AI automation enhances efficiency, reduces costs, and drives business growth with smarter, faster processes.
        </motion.p>
      </div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden bg-white/[0.03] border border-white/10 p-10 rounded-2xl transition-all hover:border-white/20"
          >
            {/* Subtle purple glow effect */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-colors" />
            
            <div className="text-white mb-8">
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">{f.title}</h3>
            <p className="text-brand-muted leading-relaxed text-sm font-light">{f.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export const Process = () => {
  const steps = [
    { number: "01", title: "Discovery", description: "We analyze your current workflows to identify high-impact automation opportunities." },
    { number: "02", title: "Architecture", description: "Our engineers design a custom AI roadmap tailored to your specific business goals." },
    { number: "03", title: "Implementation", description: "We deploy and integrate AI agents and workflows into your existing tech stack." },
    { number: "04", title: "Optimization", description: "Continuous monitoring and fine-tuning to ensure maximum efficiency and ROI." }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      id="process" 
      className="py-24 px-6 bg-white/2"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Our Modular <br /> Approach.</h2>
            <p className="text-brand-muted">A structured methodology designed for seamless integration and rapid scaling.</p>
          </motion.div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-brand-muted">←</div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">→</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-8 border border-white/5 hover:bg-white/5 transition-colors group"
            >
              <span className="text-6xl font-bold opacity-5 mb-8 block group-hover:opacity-10 transition-opacity">{s.number}</span>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-brand-muted text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "ZenaAI didn't just automate our tasks; they reimagined our entire operational flow. We've seen a 40% reduction in overhead.",
      author: "Marcus Thorne",
      role: "CTO at NexaCorp",
      image: "https://picsum.photos/seed/ceo1/100/100"
    },
    {
      quote: "The custom AI agents they built for our support team have handled 70% of inquiries autonomously. Truly game-changing.",
      author: "Sarah Chen",
      role: "COO at FlowState",
      image: "https://picsum.photos/seed/ceo2/100/100"
    },
    {
      quote: "Implementation was seamless. Their team understood our complex legacy systems and bridged them with modern AI perfectly.",
      author: "David Miller",
      role: "VP of Engineering at CloudScale",
      image: "https://picsum.photos/seed/ceo3/100/100"
    },
    {
      quote: "The ROI was evident within weeks. Our data processing speed increased by 10x without adding a single headcount.",
      author: "Elena Rodriguez",
      role: "Founder at DataPulse",
      image: "https://picsum.photos/seed/ceo4/100/100"
    },
    {
      quote: "ZenaAI is the partner we needed to stay competitive. Their predictive models are scarily accurate.",
      author: "James Wilson",
      role: "Director of Ops at OmniRetail",
      image: "https://picsum.photos/seed/ceo5/100/100"
    }
  ];

  // Duplicate for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-24 px-6 overflow-hidden bg-white/[0.01]"
    >
      <div className="max-w-7xl mx-auto mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Trusted by Industry Leaders
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-brand-muted max-w-2xl mx-auto"
        >
          Hear from the teams that have transformed their operations with ZenaAI.
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [0, -2000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            },
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {duplicatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="w-[400px] md:w-[500px] glass p-10 rounded-[2.5rem] flex-shrink-0 whitespace-normal relative group"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map(star => <Zap key={star} className="w-4 h-4 fill-white" />)}
              </div>
              <p className="text-lg md:text-xl font-medium mb-8 leading-relaxed italic text-white">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 overflow-hidden border border-white/10">
                  <img src={t.image} alt={t.author} referrerPolicy="no-referrer" />
                </div>
                <div>
                  <p className="font-bold text-sm">{t.author}</p>
                  <p className="text-xs text-brand-muted">{t.role}</p>
                </div>
              </div>
              
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-[2.5rem] pointer-events-none" />
            </div>
          ))}
        </motion.div>
        
        {/* Gradient masks */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-bg to-transparent z-10" />
      </div>
    </motion.section>
  );
};

export const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,499",
      description: "Perfect for small teams looking to start their AI journey.",
      features: ["2 Custom AI Agents", "3 Core Workflows", "Email Support", "Monthly Optimization"]
    },
    {
      name: "Professional",
      price: "$5,999",
      description: "Comprehensive automation for growing businesses.",
      features: ["5 Custom AI Agents", "10 Advanced Workflows", "Priority Support", "Weekly Optimization", "Custom API Integrations"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Full-scale AI transformation for large organizations.",
      features: ["Unlimited Agents", "Unlimited Workflows", "24/7 Dedicated Support", "Real-time Monitoring", "On-premise Deployment"]
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      id="pricing" 
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Investment Plans</h2>
        <p className="text-brand-muted">Transparent pricing built for ROI.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={cn(
              "p-10 rounded-[2.5rem] border transition-all",
              p.popular ? "bg-white text-black border-white" : "glass border-white/10"
            )}
          >
            <h3 className="text-xl font-bold mb-2">{p.name}</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold">{p.price}</span>
              {p.price !== "Custom" && <span className="text-sm opacity-60">/mo</span>}
            </div>
            <p className={cn("text-sm mb-8 leading-relaxed", p.popular ? "text-black/70" : "text-brand-muted")}>
              {p.description}
            </p>
            
            <ul className="space-y-4 mb-10">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-center gap-3 text-sm font-medium">
                  <div className={cn("w-1.5 h-1.5 rounded-full", p.popular ? "bg-black" : "bg-white")} />
                  {f}
                </li>
              ))}
            </ul>
            
            <button className={cn(
              "w-full py-4 rounded-xl font-bold transition-all active:scale-95",
              p.popular ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-white/90"
            )}>
              {p.price === "Custom" ? "Contact Sales" : "Get Started"}
            </button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export const LogoMarquee = () => {
  const logos = [
    { name: "Google" },
    { name: "GitHub" },
    { name: "OpenAI" },
    { name: "Microsoft" },
    { name: "Amazon" },
    { name: "Meta" },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="py-20 border-y border-white/5 overflow-hidden bg-black/50"
    >
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium text-white uppercase tracking-[0.3em]">Over 50+ businesses trust us</p>
      </div>
      
      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: [-1000, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          className="flex gap-24 items-center whitespace-nowrap"
        >
          {duplicatedLogos.map((logo, i) => (
            <div key={i} className="flex items-center gap-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <div className="w-5 h-5 bg-white rounded-sm rotate-45" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter group-hover:text-white transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </motion.div>
        
        {/* Gradient masks for smooth fade */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-brand-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-brand-bg to-transparent z-10" />
      </div>
    </motion.section>
  );
};

const BlackHoleEffect = () => {
  const particles = Array.from({ length: 40 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible">
      {particles.map((_, i) => {
        const angle = Math.random() * Math.PI * 2;
        const startRadius = 200 + Math.random() * 150;
        const duration = 2 + Math.random() * 3;
        const delay = Math.random() * 5;
        
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{ 
              x: Math.cos(angle) * startRadius, 
              y: Math.sin(angle) * startRadius,
              opacity: 0,
              scale: 0
            }}
            animate={{ 
              x: 0, 
              y: 0,
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1.5, 0.5, 0],
            }}
            transition={{ 
              duration: duration, 
              repeat: Infinity, 
              delay: delay,
              ease: "anticipate"
            }}
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px rgba(255,255,255,0.8)'
            }}
          />
        );
      })}
    </div>
  );
};

export const CTA = () => {
  return (
    <section id="contact" className="py-40 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 radial-gradient-bg opacity-50 pointer-events-none rotate-180" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">Ready to <br /> Scale Smarter?</h2>
        <p className="text-brand-muted text-lg mb-16 max-w-xl mx-auto font-light">
          Join the forward-thinking companies leveraging ZenaAI to dominate their industry through intelligent automation.
        </p>
        
        <div className="relative inline-block group">
          <BlackHoleEffect />
          <button className="relative z-10 bg-white text-black px-12 py-6 rounded-2xl font-bold text-xl hover:shadow-[0_0_50px_rgba(255,255,255,0.6)] transition-all active:scale-95 overflow-hidden">
            <span className="relative z-10">Schedule Your Free Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
          </button>
          
          {/* Black hole core shadow */}
          <div className="absolute inset-0 bg-white/20 blur-[60px] rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </motion.div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-black rounded-sm rotate-45" />
          </div>
          <span className="font-display font-bold text-lg tracking-tight">ZenaAI</span>
        </div>
        
        <div className="flex gap-8 text-sm text-brand-muted">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">GitHub</a>
        </div>
        
        <p className="text-xs text-brand-muted">
          © 2024 ZenaAI Automation Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
