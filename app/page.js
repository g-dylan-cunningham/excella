import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-800 via-slate-700 to-orange-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="mb-2">
              <Image 
                src="/excella-logo.png" 
                alt="Excella RV Repair - Phoenix Valley's Premier Airstream & RV Specialists" 
                width={400} 
                height={120}
                className="w-auto h-16 sm:h-20 md:h-20 lg:h-20 mx-auto"
                priority
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Phoenix Valley's Premier Airstream & RV Specialists
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                Get a Quote
              </button>
              <button className="border-2 border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-800 font-bold py-4 px-8 rounded-full transition-all">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-800">
            Our Specialties
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            <div id="main-experts" className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg relative overflow-hidden" style={{backgroundImage: 'url(/excella-airstream.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/0"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-100/90 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-12 h-8 bg-orange-500 rounded-full relative">
                    <div className="absolute top-1 left-1 w-10 h-6 bg-white rounded-full opacity-30"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Airstream Experts</h3>
                <p className="text-gray-200 leading-relaxed">
                  Specialized service for iconic Airstream trailers. From vintage restorations to modern maintenance.
                </p>
              </div>
            </div>

            <div id="main-bodywork" className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg relative overflow-hidden" style={{backgroundImage: 'url(/excella-airstream-body.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/0"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-100/90 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Bodywork</h3>
                <p className="text-gray-200 leading-relaxed">
                  Professional collision repair, segment replacement, and custom modifications for all Airstream Models
                </p>
              </div>
            </div>

            <div id="main-systems" className="group text-center p-8 rounded-2xl border-2 border-gray-200 hover:border-orange-300 transition-all hover:shadow-lg relative overflow-hidden" style={{backgroundImage: 'url(/excella-electrical.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-700 group-hover:bg-black/0"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-orange-100/90 rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="w-8 h-8 bg-orange-500 rounded-full relative">
                    <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
                    <div className="absolute bottom-1 right-1 w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Systems Repair</h3>
                <p className="text-gray-200 leading-relaxed">
                  Electrical, plumbing, HVAC, and appliance repair to keep your RV running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-slate-800">
                Located in Apache Junction, AZ
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Excella is an RV repair service specializing in Airstreams. We are factory trained and perform everything from basic maintenance to body repairs and segment replacement. We have an East Valley Location and perform many repairs onsite. This means no trips to the dealership, and no middle man. You are met with a knowledgeable technician who can meet your expectations and keep your coach adventure ready.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Apache Junction, Arizona</p>
                    <p className="text-gray-600">Serving the Greater Phoenix Area</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">⏰</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800">Available by Appointment</p>
                    <p className="text-gray-600">Emergency Mobile Service Available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-orange-200">
              <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Contact us today for a free estimate on your RV repair needs.
              </p>
              <div className="space-y-4">
                <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-full transition-all">
                  Call Now: 480-630-6095
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-orange-400 mb-4">Excella RV Repair</h3>
            <p className="text-gray-400 mb-4">
              Professional RV repair services in the Phoenix Valley
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Excella RV Repair. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
