import React, { useState } from 'react';

// HELPER: You can use these icons for the features section.
// These are simple, high-quality SVG components.
const TimerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-coral-500">
      <circle cx="12" cy="12" r="10"></circle>
      <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
);
const ListIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-coral-500">
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
);
const CalendarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-coral-500">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
);
const StatsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-coral-500">
      <path d="M2.5 2v6h6M2.66 15.57a10 10 0 1 0 .57-8.38"/>
    </svg>
);
const AdIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-coral-500">
      <polygon
          points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
);

// Main App Component
export default function App() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct mailto link
    const subject = `Message from ${formData.name} via Flowload Website`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    const mailtoLink = `mailto:goodiny777@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    
    // Open mail client
    window.location.href = mailtoLink;
  };

  // Styles for the components
  const styles = {
    fonts: {
      heading: "'Lexend', sans-serif",
      body: "'Inter', sans-serif",
    },
    colors: {
      primary: '#008080', // Teal
      secondary: '#FF7F50', // Coral
      background: '#F4F4F8', // Off-white
      darkBackground: '#1A202C',
      text: '#2D3748',
      textLight: '#A0AEC0',
    },
  };

  return (
      <div style={{fontFamily: styles.fonts.body, color: styles.colors.text}} className="bg-white antialiased">
        <style>
          {`
          @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;600;700&family=Inter:wght@400;500&display=swap');
          
          .wave-container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 320px;
            overflow: hidden;
            line-height: 0;
          }
          
          .wave-container svg {
            position: absolute;
            bottom: 0;
            left: 0;
            width: calc(200% + 1.3px); /* Increased width for smoother animation */
            height: 320px;
          }
          
          .wave-shape-fill {
            fill: #FFFFFF;
          }

          .wave-animation {
            animation: move-wave 3s ease-in-out infinite;
          }
          
          .wave-animation-1 {
            animation: move-wave-reverse 3s ease-in-out infinite;
          }

          @keyframes move-wave {
            0%, 100% {
              transform: translateX(0);
            }
            50% {
              transform: translateX(-100px);
            }
          }
          
          @keyframes move-wave-reverse {
            0%, 100% {
              transform: translateX(-100px);
            }
            50% {
              transform: translateX(0px);
            }
          }
        `}
        </style>

        {/* Section 1: Hero */}
        <header className="relative bg-teal-800 text-white overflow-hidden"
                style={{backgroundColor: styles.colors.primary}}>
          <div className="relative z-30 container mx-auto px-6 py-24 md:py-32 flex flex-col items-center text-center">
            <img
                src="logo512.png"
                alt="Flowload Logo"
                className="w-32 h-32 md:w-40 md:h-40 mb-6 drop-shadow-lg"
                style={{borderRadius: '10%'}}
            />
            <h1 style={{fontFamily: styles.fonts.heading}}
                className="text-5xl md:text-7xl font-bold leading-tight drop-shadow-md">
              Flowload
            </h1>
            <p style={{fontFamily: styles.fonts.heading}} className="mt-4 text-xl md:text-2xl font-light text-teal-100">
              Load your tasks, find your focus flow.
            </p>
          </div>
          {/* Animated Wave Background */}
          <div className="wave-container">
            <svg viewBox="0 0 1340 620" className="wave-animation" preserveAspectRatio="none">
              <path fill="#ffffff" fill-opacity="0.225" d="M 0,700 L 0,105 C 28.092150293426656,91.77354577440943 56.18430058685331,78.54709154881886 94,63 C 131.8156994131467,47.45290845118115 179.3549479460134,29.585179579134035 219,53 C 258.6450520539866,76.41482042086596 290.3959076290932,141.112190134645 324,143 C 357.6040923709068,144.887809865355 393.06142153761374,83.96605988228595 432,60 C 470.93857846238626,36.03394011771405 513.3584062204517,49.02357033621121 549,60 C 584.6415937795483,70.97642966378879 613.5049535805794,79.93965877286922 648,79 C 682.4950464194206,78.06034122713078 722.6217794572312,67.2177945723119 766,59 C 809.3782205427688,50.78220542768809 856.0079285904958,45.18916293788311 889,64 C 921.9920714095042,82.81083706211689 941.346506180785,126.02555367615568 978,124 C 1014.653493819215,121.97444632384432 1068.6060466863642,74.70862235749419 1106,68 C 1143.3939533136358,61.29137764250581 1164.2293070737583,95.13995689386755 1202,116 C 1239.7706929262417,136.86004310613245 1294.4767250186037,144.73155006703567 1336,151 C 1377.5232749813963,157.26844993296433 1405.8637928518274,161.93384283798983 1421,154 C 1436.1362071481726,146.06615716201017 1438.0681035740863,125.53307858100509 1440,105 L 1440,700 L 0,700 Z"></path>
            </svg>
            <svg viewBox="0 0 1340 620" className="wave-animation-1" preserveAspectRatio="none">
              <path fill="#ffffff" fill-opacity="0.35" d="M 0,700 L 0,245 C 33.10084762403234,263.890730505458 66.20169524806468,282.7814610109161 102,286 C 137.79830475193532,289.2185389890839 176.29406663177366,276.76488646179376 210,281 C 243.70593336822634,285.23511353820624 272.6220382248406,306.15899314190887 314,291 C 355.3779617751594,275.84100685809113 409.217780468864,224.59914097057066 449,206 C 488.782219531136,187.40085902942934 514.5068398997033,201.4444429758084 551,202 C 587.4931601002967,202.5555570241916 634.7548599323226,189.62308712619557 669,204 C 703.2451400676774,218.37691287380443 724.4737203710065,260.06320851940916 756,270 C 787.5262796289935,279.93679148059084 829.3502585836513,258.12407879616785 868,253 C 906.6497414163487,247.87592120383212 942.125245294388,259.44047629591944 983,268 C 1023.874754705612,276.55952370408056 1070.1487602387965,282.11401602015417 1110,269 C 1149.8512397612035,255.88598397984583 1183.2797137504258,224.10345962346383 1216,219 C 1248.7202862495742,213.89654037653617 1280.7323847595007,235.47214548599055 1318,235 C 1355.2676152404993,234.52785451400945 1397.7907472115712,212.00795843257413 1419,210 C 1440.2092527884288,207.99204156742587 1440.1046263942144,226.49602078371294 1440,245 L 1440,700 L 0,700 Z"></path>
            </svg>
            <svg viewBox="0 0 1340 620" className="wave-animation" preserveAspectRatio="none">
              <path fill="#ffffff" fill-opacity="0.5" d="M 0,700 L 0,385 C 30.408707427856783,392.9337931011928 60.817414855713565,400.86758620238567 97,392 C 133.18258514428643,383.13241379761433 175.13904800500256,357.4634482916501 214,362 C 252.86095199499744,366.5365517083499 288.62639312427615,401.2786206310142 322,407 C 355.37360687572385,412.7213793689858 386.3553794978927,389.4220691842933 426,371 C 465.6446205021073,352.5779308157067 513.9520888841528,339.03310263181237 559,355 C 604.0479111158472,370.96689736818763 645.8362649654957,416.44552028845703 684,428 C 722.1637350345043,439.55447971154297 756.7028512538647,417.1848162143594 784,392 C 811.2971487461353,366.8151837856406 831.352330019046,338.8152148541056 872,353 C 912.647669980954,367.1847851458944 973.8878286699521,423.55432436921814 1012,427 C 1050.1121713300479,430.44567563078186 1065.0963553011452,380.96748766902164 1101,371 C 1136.9036446988548,361.03251233097836 1193.7267501254662,390.5757249546952 1236,402 C 1278.2732498745338,413.4242750453048 1305.99664419699,406.72961251219743 1343,393 C 1380.00335580301,379.27038748780257 1426.2866730865744,358.505824996515 1444,356 C 1461.7133269134256,353.494175003485 1450.8566634567128,369.2470875017425 1440,385 L 1440,700 L 0,700 Z"></path>
            </svg>
            <svg viewBox="0 0 1340 620" className="wave-animation-1" preserveAspectRatio="none">
              <path fill="#ffffff" fill-opacity="1" d="M 0,700 L 0,525 C 32.56350101265481,542.5762280458031 65.12700202530962,560.1524560916062 103,543 C 140.87299797469038,525.8475439083938 184.05549291141628,473.96640367937823 219,478 C 253.94450708858372,482.03359632062177 280.6510263290251,541.9819291908806 316,554 C 351.3489736709749,566.0180708091194 395.3404017724831,530.1058795571 436,522 C 476.6595982275169,513.8941204429 513.9873665810422,533.5945525807197 548,528 C 582.0126334189578,522.4054474192803 612.7101319033483,491.5159101200211 655,487 C 697.2898680966517,482.4840898799789 751.1721058055651,504.3418069391961 791,506 C 830.8278941944349,507.6581930608039 856.6014448743914,489.11686212319444 893,488 C 929.3985551256086,486.88313787680556 976.4221146968694,503.1907445680264 1016,509 C 1055.5778853031306,514.8092554319736 1087.7100963381317,510.1201596047 1119,520 C 1150.2899036618683,529.8798403953 1180.737499950604,554.3286170131731 1209,548 C 1237.262500049396,541.6713829868269 1263.3399038594528,504.5653723426073 1308,489 C 1352.6600961405472,473.4346276573927 1415.902884611585,479.4098936163979 1441,489 C 1466.097115388415,498.5901063836021 1453.0485576942074,511.79505319180106 1440,525 L 1440,700 L 0,700 Z"></path>
            </svg>
          </div>
        </header>


        <main>
          {/* Section 2: Struggles & Solution */}
          <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 style={{fontFamily: styles.fonts.heading, color: styles.colors.primary}}
                  className="text-3xl md:text-4xl font-bold mb-4">
                Drowning in Distractions?
              </h2>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-12">
                The modern world is designed to steal your attention. Constant notifications, an endless to-do list, and
                the pressure to multitask can leave you feeling overwhelmed and unproductive. It's time to stop fighting
                for focus and start flowing with it.
              </p>
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div className="text-left p-8 bg-gray-50 rounded-lg">
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-2xl font-semibold mb-3 text-gray-800">Your Struggles</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start"><span className="text-coral-500 mr-3 mt-1"
                                                           style={{color: styles.colors.secondary}}>✖</span><span>Feeling scattered and unable to start important tasks.</span>
                    </li>
                    <li className="flex items-start"><span className="text-coral-500 mr-3 mt-1"
                                                           style={{color: styles.colors.secondary}}>✖</span><span>Losing hours to social media and other digital rabbit holes.</span>
                    </li>
                    <li className="flex items-start"><span className="text-coral-500 mr-3 mt-1"
                                                           style={{color: styles.colors.secondary}}>✖</span><span>Forgetting what you were working on after a "quick break".</span>
                    </li>
                    <li className="flex items-start"><span className="text-coral-500 mr-3 mt-1"
                                                           style={{color: styles.colors.secondary}}>✖</span><span>Ending the day feeling busy but not productive.</span>
                    </li>
                  </ul>
                </div>
                <div className="text-left p-8 bg-teal-50 rounded-lg"
                     style={{backgroundColor: 'rgba(0, 128, 128, 0.05)'}}>
                  <h3 style={{fontFamily: styles.fonts.heading, color: styles.colors.primary}}
                      className="text-2xl font-semibold mb-3">The Flowload Solution</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start"><span className="text-teal-600 mr-3 mt-1"
                                                           style={{color: styles.colors.primary}}>✔</span><span>A clear, simple path to start your work in one tap.</span>
                    </li>
                    <li className="flex items-start"><span className="text-teal-600 mr-3 mt-1"
                                                           style={{color: styles.colors.primary}}>✔</span><span>Structured focus sessions that train your brain to ignore distractions.</span>
                    </li>
                    <li className="flex items-start"><span className="text-teal-600 mr-3 mt-1"
                                                           style={{color: styles.colors.primary}}>✔</span><span>Mindful breaks that refresh you without derailing your momentum.</span>
                    </li>
                    <li className="flex items-start"><span className="text-teal-600 mr-3 mt-1"
                                                           style={{color: styles.colors.primary}}>✔</span><span>Build real progress you can see and feel every day.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Features */}
          <section className="py-20 md:py-32" style={{backgroundColor: styles.colors.background}}>
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <h2 style={{fontFamily: styles.fonts.heading, color: styles.colors.primary}}
                    className="text-3xl md:text-4xl font-bold">
                  Everything You Need to Find Your Flow
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
                  Flowload is packed with simple, powerful features designed to make productivity intuitive.
                </p>
              </div>
              <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <TimerIcon/>
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-xl font-semibold mt-4 mb-2 text-gray-800">The Flow Timer</h3>
                  <p className="text-gray-600">Uses a proven time-blocking technique to cycle between deep work and
                    mindful breaks, keeping you sharp.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <ListIcon/>
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-xl font-semibold mt-4 mb-2 text-gray-800">Simple Task Management</h3>
                  <p className="text-gray-600">Create your to-do list in-app and track the number of sessions for each
                    task to see tangible progress.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <CalendarIcon/>
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-xl font-semibold mt-4 mb-2 text-gray-800">Calendar Integration</h3>
                  <p className="text-gray-600">Commit to your goals by scheduling focus blocks directly to your device's
                    native calendar.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <StatsIcon/>
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-xl font-semibold mt-4 mb-2 text-gray-800">Track Your Progress</h3>
                  <p className="text-gray-600">Simple stats and a streak counter motivate you by visualizing your hard
                    work and building consistency.</p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <AdIcon/>
                  <h3 style={{fontFamily: styles.fonts.heading}}
                      className="text-xl font-semibold mt-4 mb-2 text-gray-800">Earn Your Breaks</h3>
                  <p className="text-gray-600">Need a little more time? Watch a quick, optional ad to add extra minutes
                    to your break for free.</p>
                </div>

                <div
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center text-center">
                  <h3 style={{fontFamily: styles.fonts.heading}} className="text-xl font-semibold text-gray-800">...and
                    much more in Pro!</h3>
                  <p className="text-gray-600 mt-2">Unlock custom timers, ambient sounds, advanced reports, and
                    more.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Contact & CTA */}
          <section className="py-20 md:py-32 bg-white">
            <div className="container mx-auto px-6 text-center">
              <h2 style={{fontFamily: styles.fonts.heading, color: styles.colors.primary}}
                  className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600 mb-10">
                Flowload is coming soon to iOS and Android. Join the waitlist to be the first to know when we launch!
              </p>

              <div className="flex justify-center gap-4 mb-12">
                <button disabled
                        className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg opacity-50 cursor-not-allowed">
                  App Store
                </button>
                <button disabled
                        className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg opacity-50 cursor-not-allowed">
                  Google Play
                </button>
              </div>

              <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg">
                <h3 style={{fontFamily: styles.fonts.heading}}
                    className="text-2xl font-semibold mb-4 text-gray-800">Contact Us</h3>
                <p className="text-gray-500 mb-6">Have questions or want to learn more? Send us a message!</p>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-md border border-gray-300 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-20"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Your Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-md border border-gray-300 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-20"
                    />
                  </div>
                  <div>
                    <textarea 
                      name="message"
                      placeholder="Your Message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 rounded-md border border-gray-300 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-opacity-20"
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    style={{backgroundColor: styles.colors.secondary}}
                    className="w-full font-bold text-white py-3 px-6 rounded-lg hover:bg-coral-600 transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Flowload. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
  );
}
