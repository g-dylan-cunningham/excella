import Image from 'next/image';
import Link from 'next/link';

const pageUrl = 'https://excellarv.com/airstream-collision-repair-phoenix';
const title = 'Airstream Collision Repair Phoenix AZ | Aluminum Segment Replacement | Excella RV';
const description = 'Airstream collision repair in Phoenix, AZ, including aluminum repair, segment and panel replacement, insurance repairs, and exterior restoration. Text photos for a free estimate.';

export const metadata = {
  title,
  description,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'Excella RV Repair',
    images: [
      {
        url: '/excella-airstream-body.jpeg',
        alt: 'Airstream body and collision repair at Excella RV',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/excella-airstream-body.jpeg'],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Airstream Collision Repair in Phoenix, AZ',
      serviceType: 'Airstream collision repair, aluminum repair, segment replacement, panel replacement, insurance repair, body repair, and exterior restoration',
      url: pageUrl,
      description,
      provider: {
        '@type': 'AutomotiveBusiness',
        name: 'Excella RV Repair',
        url: 'https://excellarv.com',
        telephone: '+1-480-630-6095',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Apache Junction',
          addressRegion: 'AZ',
          addressCountry: 'US',
        },
      },
      areaServed: [
        'Phoenix',
        'Apache Junction',
        'Mesa',
        'Scottsdale',
        'Tempe',
        'Chandler',
        'Queen Creek',
        'Gold Canyon',
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Can damaged Airstream exterior segments be replaced?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Excella RV performs precise panel and segment replacement for damaged Airstream aluminum bodywork.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you repair both vintage and modern Airstream trailers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Excella RV works on vintage restorations as well as collision and body repairs for modern Airstream trailers.',
          },
        },
        {
          '@type': 'Question',
          name: 'Where is Excella RV located?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Excella RV is located in Apache Junction, Arizona, and serves Airstream owners throughout the Greater Phoenix area.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can I text photos for an Airstream collision estimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Text photos of the collision or body damage to 480-630-6095 for a free initial collision estimate.',
          },
        },
      ],
    },
  ],
};

const repairServices = [
  {
    title: 'Airstream Collision & Dent Repair',
    description: 'Careful repair of dents, punctures, scrapes, and other collision damage to your Airstream’s aluminum exterior.',
  },
  {
    title: 'Airstream Segment Replacement',
    description: 'Precise replacement of curved aluminum segments when collision damage cannot be properly repaired in place.',
  },
  {
    title: 'Airstream Panel Replacement',
    description: 'Damaged exterior panels are carefully removed and replaced to restore the fit and appearance of the aluminum shell.',
  },
  {
    title: 'Insurance-Related Repairs',
    description: 'Airstream body and collision repairs for insurance-related damage, with a clear assessment of the visible repair needs.',
  },
  {
    title: 'Aluminum Body Repair',
    description: 'Specialized Airstream aluminum repair and bodywork completed with close attention to the trailer’s distinctive construction.',
  },
  {
    title: 'Exterior Restoration',
    description: 'Exterior restoration for damaged body panels, underbelly components, and other areas affected by wear or impact.',
  },
];

const faqs = [
  {
    question: 'Can damaged Airstream exterior segments be replaced?',
    answer: 'Yes. We perform precise panel and segment replacement for damaged Airstream aluminum bodywork.',
  },
  {
    question: 'Do you repair both vintage and modern Airstream trailers?',
    answer: 'Yes. We work on vintage restorations as well as collision and body repairs for modern Airstream trailers.',
  },
  {
    question: 'Where is your Airstream repair shop?',
    answer: 'We are located in Apache Junction, Arizona, and serve Airstream owners throughout the Greater Phoenix area.',
  },
  {
    question: 'How do I request a collision repair estimate?',
    answer: 'Text photos of the damage to 480-630-6095 for a free initial collision estimate, or call us to discuss your Airstream.',
  },
];

export default function AirstreamCollisionRepairPhoenix() {
  return (
    <main className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />

      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-orange-300 font-bold uppercase tracking-widest mb-4">
                Factory-trained Airstream specialists
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 font-russo-one" style={{ color: '#00B4F4' }}>
                Airstream Collision Repair in Phoenix, AZ
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Expert Airstream aluminum repair, collision bodywork, segment and panel replacement, insurance-related repairs, and exterior restoration from our shop in Apache Junction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="sms:4806306095"
                  className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-7 rounded-full transition-colors text-center"
                >
                  Text Photos: 480-630-6095
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white hover:bg-white hover:text-slate-900 text-white font-bold py-4 px-7 rounded-full transition-colors text-center"
                >
                  Request an Estimate
                </Link>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20">
              <Image
                src="/excella-airstream-body.jpeg"
                alt="Airstream aluminum body prepared for collision repair and segment replacement"
                width={1200}
                height={800}
                className="w-full h-[320px] sm:h-[420px] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-100 mb-2">
                Damaged your Airstream?
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2">
                Send Us Photos for a Free Collision Estimate
              </h2>
              <p className="text-lg text-orange-50">
                Text clear photos of the damage along with your name and Airstream model.
              </p>
            </div>
            <a
              href="sms:4806306095"
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold text-lg py-4 px-8 rounded-full transition-colors text-center flex-shrink-0"
            >
              Text 480-630-6095
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              Specialized Airstream Body Repair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Airstream collision and body repair demands close attention to its distinctive aluminum shell. Our factory-trained team evaluates dent and collision damage, then recommends the right aluminum repair or replacement approach for your trailer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-7">
            {repairServices.map((service, index) => (
              <article key={service.title} className="p-8 bg-slate-50 rounded-2xl border border-slate-200">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-5">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/excella-airstream.png"
                alt="Airstream trailer serviced by Excella RV near Phoenix, Arizona"
                width={1200}
                height={800}
                className="w-full h-[360px] sm:h-[460px] object-cover"
              />
            </div>

            <div>
              <p className="text-orange-600 font-bold uppercase tracking-widest mb-3">A clear path forward</p>
              <h2 className="text-4xl font-bold text-slate-800 mb-8">What to Expect</h2>
              <ol className="space-y-7">
                <li className="flex gap-5">
                  <span className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">Tell Us About the Damage</h3>
                    <p className="text-gray-700">Text photos to 480-630-6095 with information about your Airstream and the areas that need attention.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">Damage Assessment</h3>
                    <p className="text-gray-700">We inspect the affected bodywork to determine whether repair or segment replacement is the right solution.</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <span className="w-10 h-10 bg-slate-800 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 mb-1">Repair Plan</h3>
                    <p className="text-gray-700">You receive a clear recommendation for the collision and body repairs your trailer needs.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-5">
              Phoenix-Area Airstream Collision Repair
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Excella RV is based in Apache Junction and serves Airstream owners across Phoenix, Mesa, Scottsdale, Tempe, Chandler, Queen Creek, Gold Canyon, and the surrounding Valley.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {faqs.map((faq) => (
              <div key={faq.question} className="p-7 rounded-2xl border-2 border-orange-100 bg-orange-50/40">
                <h3 className="text-xl font-bold text-slate-800 mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-5">Get Your Airstream Back on the Road</h2>
          <p className="text-xl text-orange-50 mb-8">
            Text photos for a free collision estimate, or call to discuss aluminum body repair, segment replacement, panel replacement, or exterior restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:4806306095"
              className="bg-white text-orange-700 hover:bg-orange-50 font-bold py-4 px-8 rounded-full transition-colors"
            >
              Text Photos: 480-630-6095
            </a>
            <Link
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-orange-700 text-white font-bold py-4 px-8 rounded-full transition-colors"
            >
              Contact Excella RV
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
