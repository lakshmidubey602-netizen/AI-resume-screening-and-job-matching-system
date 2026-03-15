import { useState } from "react";
import HeroImage from "./assets/hero-illustration.svg";
import "./App.css";

const trendItems = [
  "work from home",
  "no experience",
  "remote work",
  "healthcare job",
  "online job",
  "no life",
];

function App() {
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
            <a href="/" className="hover:text-slate-900">
              For Student
            </a>
            <a href="/" className="hover:text-slate-900">
              For HR
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm hover:bg-slate-50 md:inline-flex"
            >
              Contact
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-slate-800"
            >
              Get demo
            </a>
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
