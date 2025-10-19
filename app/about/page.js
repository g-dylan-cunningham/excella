export const metadata = {
  title: "About Excella RV Repair | Phoenix Valley Airstream Specialists",
  description: "Learn about Excella RV Repair - Phoenix Valley's premier Airstream and RV repair specialists with factory training and mobile service.",
};

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-orange-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-russo-one" style={{color: '#00B4F4'}}>
              About Excella RV Repair
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Your trusted RV repair specialists in Apache Junction, Arizona
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              At our shop, we specialize in expert collision repair, underbelly restoration, and precise panel replacement, ensuring every vehicle leaves in top condition.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a passion for craftsmanship and attention to detail, we also offer custom modifications that bring your vision to life. Our services extend to 12V and 110V electrical work, solar system installations, and lithium battery upgrades, helping you stay powered and connected wherever the road takes you.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We’re also skilled in maintaining and upgrading fresh water and waste systems, water heaters, and leak detection and repair—keeping your setup efficient, reliable, and adventure-ready.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/excella-rob.jpeg" 
                alt="Airstream Heritage - We're passionate about preserving the legacy and craftsmanship of these iconic travel trailers"
                className="w-full h-auto rounded-3xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">25+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Years Experience</h3>
              <p className="text-gray-600">Combined experience in RV repair and restoration</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">⭐</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Certified Techs</h3>
              <p className="text-gray-600">Factory-trained and certified repair specialists</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">🏆</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Award Winning</h3>
              <p className="text-gray-600">Recognized for excellence in customer service</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">💯</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-slate-800">Warranty</h3>
              <p className="text-gray-600">Full warranty on all parts and labor</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">Comprehensive RV Services</h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🔧</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Airstream Specialization</h3>
                  <p className="text-gray-700">
                    From vintage Bambi restorations to modern International maintenance, we know Airstreams inside and out.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🎨</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Expert Bodywork</h3>
                  <p className="text-gray-700">
                    Collision repair, aluminum welding, panel replacement, and custom modifications with attention to detail.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">⚡</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Electrical Systems</h3>
                  <p className="text-gray-700">
                    12V/110V electrical, solar installations, battery systems, and modern tech upgrades.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🌊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Plumbing & Water</h3>
                  <p className="text-gray-700">
                    Fresh water systems, waste systems, hot water heaters, and leak detection and repair.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">❄️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Climate Control</h3>
                  <p className="text-gray-700">
                    AC repair and replacement, furnace service, and ventilation system maintenance.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">🏠</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Appliance Repair</h3>
                  <p className="text-gray-700">
                    Refrigerator, microwave, generator, and all major appliance service and replacement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Desert Expertise */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">Desert RV Specialists</h2>
            <p className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Living and working in Apache Junction gives us unique insight into the challenges of desert RVing.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-6xl mb-4">☀️</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Heat Damage</h3>
                <p className="text-gray-700">
                  We understand how extreme desert heat affects seals, tires, and systems.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-6xl mb-4">🌵</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Dust Protection</h3>
                <p className="text-gray-700">
                  Expert solutions for keeping desert dust out of your living spaces.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-6xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold mb-4 text-slate-800">Mountain Ready</h3>
                <p className="text-gray-700">
                  Preparing your RV for elevation changes and mountain travel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}