import { useState } from 'react';

const testimonials = [
  {
    name: 'Jane Carter',
    role: 'IT Manager',
    company: 'FinCore Solutions',
    text: 'SoftSell made it super easy to offload our excess licenses. The process was smooth and fast!'
  },
  {
    name: 'Mark Evans',
    role: 'CTO',
    company: 'TechNova Inc.',
    text: 'I was impressed by their transparency and quick payment. Highly recommend SoftSell!'
  }
];

export default function App() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted (frontend only)');
  };

  return (
    <main className="font-sans text-gray-800">
      {/* Hero */}
      <section className="text-center bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Unused Software into Profit</h1>
          <p className="text-lg mb-6">SoftSell helps businesses resell unused software licenses quickly and legally.</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300">Sell My Licenses</button>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {['📤 Upload License', '💰 Get Valuation', '🏦 Get Paid'].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <div className="text-5xl mb-4">{step.split(' ')[0]}</div>
                <h3 className="text-xl font-semibold mb-2">{step.split(' ').slice(1).join(' ')}</h3>
                <p className="text-gray-600">{['Provide license details.', 'We evaluate it.', 'Receive payment.'][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose SoftSell</h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 text-center">
            {[
              ['⚡', 'Fast Turnaround', 'Evaluations within 24 hours.'],
              ['🔒', 'Secure & Legal', 'Compliant with laws.'],
              ['💼', 'Business-Friendly', 'Fits companies of all sizes.'],
              ['📞', 'Support Anytime', 'We guide you step-by-step.']
            ].map(([icon, title, desc], i) => (
              <div key={i} className="p-6 bg-gray-50 rounded shadow hover:shadow-md transition">
                <div className="text-4xl mb-3">{icon}</div>
                <p className="font-semibold text-lg mb-1">{title}</p>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map(({ name, role, company, text }, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <p className="mb-4 italic">"{text}"</p>
                <p className="font-semibold">{name}, {role}, {company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-10">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            {['Name', 'Email', 'Company'].map((field) => (
              <div key={field} className="flex flex-col">
                <label className="mb-1 font-medium">{field}</label>
                <input
                  name={field.toLowerCase()}
                  type={field === 'Email' ? 'email' : 'text'}
                  required
                  value={formData[field.toLowerCase()]}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            ))}
            <div className="flex flex-col">
              <label className="mb-1 font-medium">License Type</label>
              <select
                name="license"
                required
                value={formData.license}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Select a license type</option>
                {['Office Suite', 'Antivirus', 'Design Software', 'Development Tools'].map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label className="mb-1 font-medium">Message</label>
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="border border-gray-300 rounded px-4 py-2 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded font-medium transition">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
