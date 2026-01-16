"use client";

import React from "react";

const FAQS = [
  {
    title: "How do I get started?",
    desc: "Getting started is easy! Simply follow the initial steps.",
  },
  {
    title: "Is there a free trial available?",
    desc: "Yes, we offer a 30 days free trial.",
  },
  {
    title: "How can I upgrade my account?",
    desc: "Log in and navigate to the Upgrade Account section.",
  },
];

export function Faqs() {
  return (
    <section className="px-8 py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-blue-gray-900">
            Frequently asked questions
          </h1>

          <p className="mx-auto mb-24 max-w-3xl text-lg text-gray-500">
            A lot of people don&apos;t appreciate the moment until it&apos;s
            passed.
          </p>
        </div>

        <div className="grid gap-20 lg:grid-cols-3">
          {FAQS.map(({ title, desc }) => (
            <div className="rounded-lg bg-transparent shadow-none">
              <h4 className="pb-6 text-xl font-semibold text-blue-gray-900">
                {title}
              </h4>
              <p className="text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
