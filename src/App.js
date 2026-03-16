import { useState } from "react";
import HeroImage from "./assets/hero-illustration.svg";
import "./App.css";
import Login from "./Login";

const trendItems = [
  "work from home",
  "no experience",
  "remote work",
  "healthcare job",
  "online job",
  "no life",
];

function StudentForm({ onBack }) {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    university: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert(`Student Registration:\nName: ${formData.name}\nRoll Number: ${formData.rollNumber}\nUniversity: ${formData.university}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-4 flex items-center text-slate-600 hover:text-slate-900 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow mb-4">
            <span className="text-2xl font-bold">S</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">Student Registration</h1>
          <p className="text-slate-600">Join Job Matching as a student</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="rollNumber" className="block text-sm font-medium text-slate-700 mb-2">
                Roll Number *
              </label>
              <input
                id="rollNumber"
                name="rollNumber"
                type="text"
                value={formData.rollNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter your roll number"
              />
            </div>

            <div>
              <label htmlFor="university" className="block text-sm font-medium text-slate-700 mb-2">
                University / College Name *
              </label>
              <input
                id="university"
                name="university"
                type="text"
                value={formData.university}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter your university/college name"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function HRForm({ onBack }) {
  const [formData, setFormData] = useState({
    hrName: "",
    companyName: "",
    companyLocation: "",
    companySize: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      alert(`HR Registration:\nName: ${formData.hrName}\nCompany: ${formData.companyName}\nLocation: ${formData.companyLocation}\nSize: ${formData.companySize}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <button
          onClick={onBack}
          className="mb-4 flex items-center text-slate-600 hover:text-slate-900 transition"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </button>

        <div className="text-center mb-8">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-glow mb-4">
            <span className="text-2xl font-bold">H</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">HR Registration</h1>
          <p className="text-slate-600">Join Job Matching as an HR professional</p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="hrName" className="block text-sm font-medium text-slate-700 mb-2">
                HR Name *
              </label>
              <input
                id="hrName"
                name="hrName"
                type="text"
                value={formData.hrName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-700 mb-2">
                Company Name *
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                value={formData.companyName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label htmlFor="companyLocation" className="block text-sm font-medium text-slate-700 mb-2">
                Company Location *
              </label>
              <input
                id="companyLocation"
                name="companyLocation"
                type="text"
                value={formData.companyLocation}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
                placeholder="Enter company location"
              />
            </div>

            <div>
              <label htmlFor="companySize" className="block text-sm font-medium text-slate-700 mb-2">
                Company Size *
              </label>
              <select
                id="companySize"
                name="companySize"
                value={formData.companySize}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              >
                <option value="">Select company size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201-500">201-500 employees</option>
                <option value="501-1000">501-1000 employees</option>
                <option value="1000+">1000+ employees</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-brand-500 text-white py-3 px-4 rounded-xl font-semibold hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState("landing"); // "landing", "student", "hr", "login"
  const [tab, setTab] = useState("jobs");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  const onSearch = (event) => {
    event.preventDefault();
    // Replace this with real search handling
    alert(`Searching for ${title || "jobs"} in ${location || "anywhere"} (${tab})`);
  };

  const onQuickSearch = (value) => {
    setTitle(value);
  };

  if (currentPage === "student") {
    return <StudentForm onBack={() => setCurrentPage("landing")} />;
  }

  if (currentPage === "hr") {
    return <HRForm onBack={() => setCurrentPage("landing")} />;
  }

  if (currentPage === "login") {
    return <Login onBack={() => setCurrentPage("landing")} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-sky-50 text-slate-900">
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4">
          <a
            href="/"
            className="flex items-center gap-3 text-lg font-semibold text-slate-900"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-white shadow-glow">
              J
            </span>
            <span>Job Matching</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
            <button
              onClick={() => setCurrentPage("student")}
              className="hover:text-slate-900 transition"
            >
              For Student
            </button>
            <button
              onClick={() => setCurrentPage("hr")}
              className="hover:text-slate-900 transition"
            >
              For HR
            </button>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
            >
              Contact
            </a>
            <button
              onClick={() => setCurrentPage("login")}
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="relative">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand-200 via-sky-100 to-white opacity-70" />
                <img
                  src={HeroImage}
                  alt="Person standing with laptop"
                  className="w-full rounded-3xl shadow-glow ring-1 ring-slate-200"
                />
              </div>
            </div>

            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
                Find the Job
                <br />
                that Fits Your Life
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600">
                Millions of people are searching for jobs, salary information,
                company reviews, and interview questions. See what others are
                looking for on Job Matching today.
              </p>

              {/* User Type Selection */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Choose Your Path</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  <button
                    onClick={() => setCurrentPage("student")}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-left text-white shadow-lg transition hover:shadow-xl hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">For Students</h3>
                      <p className="mt-2 text-sm text-blue-100">
                        Register as a student to find job opportunities that match your profile.
                      </p>
                    </div>
                  </button>

                  <button
                    onClick={() => setCurrentPage("hr")}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-green-500 to-green-600 p-8 text-left text-white shadow-lg transition hover:shadow-xl hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
                    <div className="relative">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-lg font-semibold">For HR</h3>
                      <p className="mt-2 text-sm text-green-100">
                        Register as HR to post jobs and find the perfect candidates.
                      </p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="mt-10 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-1 rounded-full bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => setTab("jobs")}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      tab === "jobs"
                        ? "bg-white text-slate-900 shadow"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Jobs
                  </button>
                  <button
                    type="button"
                    onClick={() => setTab("employers")}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      tab === "employers"
                        ? "bg-white text-slate-900 shadow"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Employers
                  </button>
                </div>

                <form
                  onSubmit={onSearch}
                  className="mt-6 grid gap-3 sm:grid-cols-[1fr_1fr_auto]"
                >
                  <label className="sr-only" htmlFor="job-title">
                    Job title or keyword
                  </label>
                  <input
                    id="job-title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder="Job title or keyword"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                  <label className="sr-only" htmlFor="location">
                    City, state or zip
                  </label>
                  <input
                    id="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    placeholder="City, state or zip"
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  />
                  <button
                    type="submit"
                    className="rounded-2xl bg-brand-500 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-200"
                  >
                    Find Job
                  </button>
                </form>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                  <span className="text-slate-500">Trending Searches</span>
                  <div className="flex flex-wrap items-center gap-2">
                    {trendItems.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => onQuickSearch(item)}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-slate-600 shadow-sm transition hover:bg-slate-50 hover:text-slate-900"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
