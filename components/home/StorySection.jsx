"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Shield, Heart, Home, GraduationCap, Umbrella, Users, Leaf, 
  Briefcase, PiggyBank, ArrowRight, Sparkles, Quote
} from 'lucide-react';

const lifeStages = [
  {
    stage: "Consumption - Just Started Out",
    age: "20s - 30s",
    insurance: "Term Life • Health Insurance",
    concept: "Income Protection & Future Security",
    description: "Your income is your biggest asset. Protect it while you build your dreams.",
    story: "Rahul, 28, software engineer. Bought term insurance for ₹1Cr at just ₹500/month.",
    image: "/images/img1.png",
    icon: Briefcase,
    benefit: "Family gets ₹1Cr if something happens to you",
    color: "#3b82f6"
  },
  {
    stage: "Creation - Growing Family",
    age: "30s - 40s",
    insurance: "Term Plan • Child Insurance • Health Cover",
    concept: "Family Protection & Children's Future",
    description: "Your family depends on you. Ensure their dreams don't stop if you're not there.",
    story: "Priya & Ajay, both 35, got coverage so their daughter's education is always secure.",
    image: "/images/img2.png",
    icon: Heart,
    benefit: "Children's education fund guaranteed",
    color: "#ec489a"
  },
  {
    stage: "Conservation - Home & Responsibilities",
    age: "30s - 50s",
    insurance: "Home Loan Protection • Term Insurance",
    concept: "Loan Protection & Asset Security",
    description: "Your home shouldn't become a burden. Insurance pays off your loan if something happens.",
    story: "Vikram, 42, ensured his family can stay in their home no matter what.",
    image: "/images/img3.jpeg",
    icon: Home,
    benefit: "Home loan gets fully paid off",
    color: "#10b981"
  },
  {
    stage: "Continuation - Retirement Planning",
    age: "50s - 60s",
    insurance: "Annuity • Pension Plans • Health Insurance",
    concept: "Retirement Income & Medical Security",
    description: "Enjoy retirement without worrying about medical bills or monthly income.",
    story: "Sharma ji, 58, secured monthly pension and health cover so his savings last forever.",
    image: "/images/img4.png",
    icon: Umbrella,
    benefit: "Guaranteed monthly income for life",
    color: "#f59e0b"
  },
  {
    stage: "Constribution - Legacy Planning",
    age: "60+",
    insurance: "Whole Life • ULIPs • Wealth Transfer",
    concept: "Leave a Legacy, Not a Burden",
    description: "Pass on wealth to your loved ones without tax or legal hassles.",
    story: "Kapoor family ensured grandchildren's education fund is ready, tax-free.",
    image: "/images/img5.png",
    icon: Leaf,
    benefit: "Tax-free wealth transfer to family",
    color: "#8b5cf6"
  }
];

const insuranceTypes = [
  { icon: Shield, label: "Term Life", desc: "Pure protection, highest cover at lowest cost" },
  { icon: Heart, label: "Health Insurance", desc: "Medical expenses covered" },
  { icon: GraduationCap, label: "Child Plans", desc: "Secure children's future" },
  { icon: Home, label: "Home Loan Cover", desc: "Loan gets paid if something happens" },
  { icon: PiggyBank, label: "Retirement Plans", desc: "Regular income after 60" },
  { icon: Users, label: "Family Floater", desc: "Cover entire family in one plan" },
];

const ContentSection = ({ stage, Icon }) => (
  <>
    {/* Stage Badge */}
    <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0080bf] px-4 py-2 rounded-full mb-6">
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">
        {stage.stage} • {stage.age}
      </span>
    </div>

    {/* Main Headline */}
    <h2 className="text-3xl md:text-4xl text-[#074a6b] leading-tight">
      {stage.concept}
    </h2>

    {/* Description */}
    <p className="mt-4 text-lg text-gray-700 leading-relaxed">
      {stage.description}
    </p>

    {/* Key Numbers Card */}
    <div className="mt-6 rounded-xl p-5">
        <div>
          <div className="text-sm text-gray-800">What you get</div>
          <div className="text-base text-[#0080bf] mt-1">
            {stage.benefit}
          </div>
        </div>
        
    </div>

    {/* Real Story */}
    <div className="mt-6 flex items-start gap-3 rounded-xl p-4">
      <Users className="w-5 h-5 text-[#0080bf] flex-shrink-0 mt-0.5" />
      <div>
        <p className="text-xs font-medium text-gray-800 mb-1">Real Story</p>
        <p className="text-gray-700 text-sm italic">"{stage.story}"</p>
      </div>
    </div>

    {/* Insurance Tags */}
    {/* <div className="mt-6 flex flex-wrap gap-2">
      {stage.insurance.split(" • ").map((type, idx) => (
        <span
          key={idx}
          className="bg-blue-50 text-[#0080bf] px-3 py-1 rounded-full text-sm font-medium"
        >
          {type}
        </span>
      ))}
    </div> */}

   
  </>
);

const HeroStory = () => {
  return (
    <div className="w-full">
      {/* Hero Header */}
      <section className="flex items-center px-6 lg:px-16 py-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden ">
                <img 
                  src="/images/insurance.jpg"
                  alt="Family protection"
                  className="w-full h-[500px] object-cover"
                />
                
              </div>
              
            </motion.div>
           

            {/* Right Image */}
             <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0080bf] px-4 py-2 rounded-full mb-6">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">Insurance Made Simple</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight">
                Life is Full of{" "}
                <span className="text-[#074a6b]">Surprises</span>
                <br />
                <span className=" bg-clip-text text-gray-800">
                  Be{" "}
                </span>
                 <span className=" bg-clip-text text-[#074a6b]">
                   Prepared,
                </span>
                <span className=" bg-clip-text text-gray-800">
                   Not
                </span>
                <span className="text-[#074a6b]"> Scared</span>
              </h1>
              
              <p className="mt-6 text-xl text-gray-800 max-w-lg">
                Insurance isn't about dying. It's about living without fear. 
                Protect what matters most at every stage of life.
              </p>

              {/* Quick Insurance Pills */}
              <div className="flex flex-wrap gap-2 mt-8">
                {insuranceTypes.slice(0, 4).map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                      <Icon className="w-4 h-4 text-[#0080bf]" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>

              <motion.button 
               onClick={() => window.location.href = "/calculators"}
                className="mt-10 px-6 py-2 bg-[#0080bf] text-white rounded-full text-lg shadow-lg inline-flex items-center gap-2"
                whileTap={{ scale: 0.95 }}
              >
                See How Much Cover You Need
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Life Stages - Zigzag Layout */}
      {lifeStages.map((stage, index) => {
        const Icon = stage.icon;
        const isReverse = index % 2 !== 0; // Zigzag logic for desktop
        
        return (
          <section
            key={index}
            className="bg-[#f0faff] py-20 px-6 lg:px-16"
          >
            <div className="max-w-7xl mx-auto w-full">
              {/* Desktop: Zigzag Layout */}
              <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                {/* Left/Right switch based on isReverse */}
                {!isReverse && (
                  <div>
                    <ContentSection stage={stage} Icon={Icon} />
                  </div>
                )}

                {/* Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={stage.image}
                      alt={stage.stage}
                      className="w-full h-[450px] object-cover"
                    />
                    
                  </div>
                </div>

                {isReverse && (
                  <div>
                    <ContentSection stage={stage} Icon={Icon} />
                  </div>
                )}
              </div>

              {/* Mobile: Always Text First, Then Image */}
              <div className="lg:hidden">
                {/* Text Content First */}
                <div>
                  <ContentSection stage={stage} Icon={Icon} />
                </div>

                {/* Image Second */}
                <div className="relative mt-8">
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={stage.image}
                      alt={stage.stage}
                      className="w-full h-[300px] object-cover"
                    />
                    {/* Decorative Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3 h-3" style={{ color: stage.color }} />
                        <span className="text-xs font-semibold" style={{ color: stage.color }}>
                          {stage.age}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      
    </div>
  );
};

export default HeroStory;



// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { 
//   Shield, Heart, Home, GraduationCap, Umbrella, Users, Leaf, 
//   Briefcase, PiggyBank, ArrowRight, Sparkles, Quote, Award, 
//   Clock, TrendingUp, CheckCircle
// } from 'lucide-react';
// import Image from "next/image";

// const lifeStages = [
//   {
//     stage: "Consumption - Just Started Out",
//     age: "20s - 30s",
//     insurance: "Term Life • Health Insurance",
//     concept: "Income Protection & Future Security",
//     description: "Your income is your biggest asset. Protect it while you build your dreams.",
//     story: "Rahul, 28, software engineer. Bought term insurance for ₹1Cr at just ₹500/month.",
//     image: "/images/img1.png",
//     icon: Briefcase,
//     benefit: "Family gets ₹1Cr if something happens to you",
//     premium: "As low as ₹500/month",
//     color: "#3b82f6"
//   },
//   {
//     stage: "Creation - Growing Family",
//     age: "30s - 40s",
//     insurance: "Term Plan • Child Insurance • Health Cover",
//     concept: "Family Protection & Children's Future",
//     description: "Your family depends on you. Ensure their dreams don't stop if you're not there.",
//     story: "Priya & Ajay, both 35, got coverage so their daughter's education is always secure.",
//     image: "/images/img2.png",
//     icon: Heart,
//     benefit: "Children's education fund guaranteed",
//     premium: "~₹1,200/month for ₹1Cr cover",
//     color: "#ec489a"
//   },
//   {
//     stage: "Conservation - Home & Responsibilities",
//     age: "30s - 50s",
//     insurance: "Home Loan Protection • Term Insurance",
//     concept: "Loan Protection & Asset Security",
//     description: "Your home shouldn't become a burden. Insurance pays off your loan if something happens.",
//     story: "Vikram, 42, ensured his family can stay in their home no matter what.",
//     image: "/images/img3.jpeg",
//     icon: Home,
//     benefit: "Home loan gets fully paid off",
//     premium: "~₹800/month for ₹50L loan cover",
//     color: "#10b981"
//   },
//   {
//     stage: "Continuation - Retirement Planning",
//     age: "50s - 60s",
//     insurance: "Annuity • Pension Plans • Health Insurance",
//     concept: "Retirement Income & Medical Security",
//     description: "Enjoy retirement without worrying about medical bills or monthly income.",
//     story: "Sharma ji, 58, secured monthly pension and health cover so his savings last forever.",
//     image: "/images/img4.png",
//     icon: Umbrella,
//     benefit: "Guaranteed monthly income for life",
//     premium: "Lumpsum investment, starts at ₹5L",
//     color: "#f59e0b"
//   },
//   {
//     stage: "Constribution - Legacy Planning",
//     age: "60+",
//     insurance: "Whole Life • ULIPs • Wealth Transfer",
//     concept: "Leave a Legacy, Not a Burden",
//     description: "Pass on wealth to your loved ones without tax or legal hassles.",
//     story: "Kapoor family ensured grandchildren's education fund is ready, tax-free.",
//     image: "/images/img5.png",
//     icon: Leaf,
//     benefit: "Tax-free wealth transfer to family",
//     premium: "Customizable, starts at ₹10L",
//     color: "#8b5cf6"
//   }
// ];

// const insuranceTypes = [
//   { icon: Shield, label: "Term Life", desc: "Pure protection, highest cover at lowest cost" },
//   { icon: Heart, label: "Health Insurance", desc: "Medical expenses covered" },
//   { icon: GraduationCap, label: "Child Plans", desc: "Secure children's future" },
//   { icon: Home, label: "Home Loan Cover", desc: "Loan gets paid if something happens" },
//   { icon: PiggyBank, label: "Retirement Plans", desc: "Regular income after 60" },
//   { icon: Users, label: "Family Floater", desc: "Cover entire family in one plan" },
// ];

// const ContentSection = ({ stage, Icon }) => (
//   <>
//     {/* Stage Badge */}
//     <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0080bf] px-4 py-2 rounded-full mb-6">
//       <Icon className="w-4 h-4" />
//       <span className="text-sm font-medium">
//         {stage.stage} • {stage.age}
//       </span>
//     </div>

//     {/* Main Headline */}
//     <h2 className="text-3xl md:text-4xl text-[#074a6b] leading-tight font-bold">
//       {stage.concept}
//     </h2>

//     {/* Description */}
//     <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//       {stage.description}
//     </p>

//     {/* Key Numbers Card */}
//     <div className="mt-6 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <div className="text-sm text-gray-500">What you get</div>
//           <div className="text-base font-semibold text-[#0080bf] mt-1">
//             {stage.benefit}
//           </div>
//         </div>
//         <div>
//           <div className="text-sm text-gray-500">Starting at</div>
//           <div className="text-base font-semibold text-[#0080bf] mt-1">
//             {stage.premium}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Real Story */}
//     <div className="mt-6 flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
//       <Users className="w-5 h-5 text-[#0080bf] flex-shrink-0 mt-0.5" />
//       <div>
//         <p className="text-xs font-medium text-gray-500 mb-1">Real Story</p>
//         <p className="text-gray-700 text-sm italic">"{stage.story}"</p>
//       </div>
//     </div>

//     {/* Insurance Tags */}
//     <div className="mt-6 flex flex-wrap gap-2">
//       {stage.insurance.split(" • ").map((type, idx) => (
//         <span
//           key={idx}
//           className="bg-blue-50 text-[#0080bf] px-3 py-1 rounded-full text-sm font-medium"
//         >
//           {type}
//         </span>
//       ))}
//     </div>

//   </>
// );

// const HeroStory = () => {
//   const [activeStage, setActiveStage] = React.useState(0);

//   return (
//     <div className="w-full">
//       {/* Hero Header */}
//       <section className="min-h-screen flex items-center px-6 lg:px-16">
//         <div className="max-w-7xl mx-auto w-full">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             {/* Left Content */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <div className="inline-flex items-center gap-2 bg-blue-50 text-[#0080bf] px-4 py-2 rounded-full mb-6">
//                 <Shield className="w-4 h-4" />
//                 <span className="text-sm font-medium">Insurance Made Simple</span>
//               </div>
              
//               <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-800 leading-tight">
//                 Life is Full of{" "}
//                 <span className="text-[#074a6b]">Surprises</span>
//                 <br />
//                 <span className=" bg-clip-text text-gray-800">
//                   Be{" "}
//                 </span>
//                  <span className=" bg-clip-text text-[#074a6b]">
//                    Prepared,
//                 </span>
//                 <span className=" bg-clip-text text-gray-800">
//                    Not
//                 </span>
//                 <span className="text-[#074a6b]"> Scared</span>
//               </h1>
              
//               <p className="mt-6 text-xl text-gray-800 max-w-lg">
//                 Insurance isn't about dying. It's about living without fear. 
//                 Protect what matters most at every stage of life.
//               </p>

//               {/* Quick Insurance Pills */}
//               <div className="flex flex-wrap gap-2 mt-8">
//                 {insuranceTypes.slice(0, 4).map((item, idx) => {
//                   const Icon = item.icon;
//                   return (
//                     <div key={idx} className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
//                       <Icon className="w-4 h-4 text-[#0080bf]" />
//                       <span className="text-sm font-medium">{item.label}</span>
//                     </div>
//                   );
//                 })}
//               </div>

//               <motion.button 
//                onClick={() => window.location.href = "/calculators"}
//                 className="mt-10 px-6 py-2 bg-[#0080bf] text-white rounded-full text-lg shadow-lg inline-flex items-center gap-2"
//                 whileTap={{ scale: 0.95 }}
//               >
//                 See How Much Cover You Need
//                 <ArrowRight className="w-5 h-5" />
//               </motion.button>
//             </motion.div>

//             {/* Right Image */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="relative"
//             >
//               <div className="relative rounded-2xl overflow-hidden ">
//                 <img 
//                   src="/images/insurance.jpg"
//                   alt="Family protection"
//                   className="w-full h-[500px] object-cover"
//                 />
                
//               </div>
              
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Life Stages - Zigzag Layout with Mobile Optimization */}
//       {lifeStages.map((stage, index) => {
//         const Icon = stage.icon;
//         const isReverse = index % 2 !== 0; // Zigzag logic for desktop
        
//         return (
//           <motion.section
//             key={index}
//             className="sticky bg-[#f0faff] top-0 min-h-screen flex items-center px-6 lg:px-16 py-12"
//             style={{ zIndex: index + 1 }}
//             onViewportEnter={() => setActiveStage(index)}
//             viewport={{ amount: 0.5 }}
//           >
//             <div className="max-w-7xl mx-auto w-full">
//               {/* Desktop: Zigzag Layout */}
//               <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
//                 {/* Left/Right switch based on isReverse */}
//                 {!isReverse && (
//                   <motion.div
//                     initial={{ opacity: 0, x: -30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     <ContentSection stage={stage} Icon={Icon} />
//                   </motion.div>
//                 )}

//                 {/* Image */}
//                 <motion.div
//                   initial={{ opacity: 0, x: isReverse ? -30 : 30 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="relative"
//                 >
//                   <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                     <img
//                       src={stage.image}
//                       alt={stage.stage}
//                       className="w-full h-[450px] object-cover"
//                     />
//                     {/* Decorative Badge */}
//                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
//                       <div className="flex items-center gap-2">
//                         <Sparkles className="w-3 h-3" style={{ color: stage.color }} />
//                         <span className="text-xs font-semibold" style={{ color: stage.color }}>
//                           {stage.age}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>

//                 {isReverse && (
//                   <motion.div
//                     initial={{ opacity: 0, x: 30 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.6 }}
//                     viewport={{ once: true }}
//                   >
//                     <ContentSection stage={stage} Icon={Icon} />
//                   </motion.div>
//                 )}
//               </div>

//               {/* Mobile: Always Text First, Then Image */}
//               <div className="lg:hidden">
//                 {/* Text Content First */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6 }}
//                   viewport={{ once: true }}
//                 >
//                   <ContentSection stage={stage} Icon={Icon} />
//                 </motion.div>

//                 {/* Image Second */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: 0.2 }}
//                   viewport={{ once: true }}
//                   className="relative mt-8"
//                 >
//                   <div className="relative rounded-2xl overflow-hidden shadow-xl">
//                     <img
//                       src={stage.image}
//                       alt={stage.stage}
//                       className="w-full h-[300px] object-cover"
//                     />
//                     {/* Decorative Badge */}
//                     <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-lg">
//                       <div className="flex items-center gap-2">
//                         <Sparkles className="w-3 h-3" style={{ color: stage.color }} />
//                         <span className="text-xs font-semibold" style={{ color: stage.color }}>
//                           {stage.age}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.section>
//         );
//       })}

    
//     </div>
//   );
// };

// export default HeroStory;