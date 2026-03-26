import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-20 bg-gradient-to-b from-white to-gray-100">
        
        {/* LOGO (FIXED & IMPROVED) */}
        <div className="mb-8 flex justify-center">
          <div className="mb-10 flex justify-center">
  <Image
    src="/sibu.png"
    alt="Sibu Mendi School Logo"
    width={320}
    height={320}
    priority
    className="object-contain drop-shadow-lg"
  />
</div>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Sibu Mendi School Portal
        </h1>

        {/* SUBTEXT */}
        <p className="mt-4 max-w-xl text-gray-600">
          A modern digital platform designed to manage students, track academic
          performance, and improve communication between students and teachers.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
          >
            Login
          </a>

          <a
            href="/register"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            First Time Setup
          </a>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
          Why Use This Portal?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              📊 Track Academic Performance
            </h3>
            <p className="text-gray-600 text-sm">
              Students can easily view their grades, results, and progress in one place.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              🧑‍🏫 Teacher Management
            </h3>
            <p className="text-gray-600 text-sm">
              Teachers can update marks, manage students, and monitor performance efficiently.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-lg font-semibold mb-2 text-blue-600">
              📢 Announcements
            </h3>
            <p className="text-gray-600 text-sm">
              Stay informed with the latest school updates, news, and notices.
            </p>
          </div>

        </div>
      </section>

      {/* EXTRA SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Built for Students, Teachers, and Admins
          </h2>

          <p className="mt-4 text-gray-600">
            This system replaces traditional paper-based processes and brings everything online.
            Faster, safer, and more efficient.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center py-16 px-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          Access Your Portal Now
        </h2>

        <p className="mt-3 text-blue-100">
          Login to continue or setup your account for first-time access.
        </p>

        <a
          href="/login"
          className="inline-block mt-6 bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Login
        </a>
      </section>

    </div>
  );
}