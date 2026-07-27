export default function Trusted() {
  const companies = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Accenture",
  ];

  return (
    <section className="py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-8">

        <p className="text-center text-gray-500 uppercase tracking-[5px] mb-10">
          Trusted Skills For Careers At
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {companies.map((company) => (
            <div
              key={company}
              className="rounded-xl border border-white/10 bg-white/5 py-5 text-center text-gray-300 backdrop-blur-lg hover:border-cyan-400 transition"
            >
              {company}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}