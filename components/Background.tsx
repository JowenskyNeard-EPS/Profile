import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-1 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,255,0.03),rgba(255,255,255,0))]" />
      
      {/* Trading patterns grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="grid grid-cols-5 gap-4 p-8">
          {Array(25).fill(0).map((_, i) => (
            <div key={i} className="aspect-square relative">
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full stroke-current"
                style={{
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              >
                <path 
                  d="M20 80 L40 40 L60 60 L80 20" 
                  fill="none" 
                  strokeWidth="2"
                  className="text-awwwards-blue"
                />
                {/* Support/Resistance lines */}
                <line 
                  x1="20" 
                  y1="50" 
                  x2="80" 
                  y2="50" 
                  strokeWidth="1" 
                  className="text-awwwards-blue/50"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>
      
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 25%, rgba(0,0,255,0.1) 50%, transparent 75%)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <div className="absolute inset-0 backdrop-blur-[50px]" />
    </div>
  );
};

export default Background; 