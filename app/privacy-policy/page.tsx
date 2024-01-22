import React from 'react'
import Head from 'next/head';
const page = () => {
  return (
    <div>
      
      <Head>
        <title>Privacy Policy</title>
      </Head>
      <div className="max-w-screen-md mx-auto p-8">
        <h1 className="text-3xl font-extrabold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">1. Collection and Use of Customer Data</h2>
          <p>
            We collect and use customer data in accordance with applicable data protection laws. Our primary goal is to provide and improve our services while ensuring the privacy and security of user information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">2. Privacy and Security Measures</h2>
          <p>
            We take privacy and security seriously. We implement measures to protect your data from unauthorized access and maintain the confidentiality of your information.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">3. Use of Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and tracking technologies to enhance user experience. By using our website, you consent to the use of these technologies.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">4. Opt-Out Options</h2>
          <p>
            Users concerned about privacy have the option to opt-out of certain data collection activities. Learn more about your opt-out choices in our settings or contact us for assistance.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-4">5. Privacy Policy Updates</h2>
          <p>
            We may update our privacy policy periodically. It's recommended to review this policy regularly for any changes. Continued use of our services constitutes acceptance of the updated policy.
          </p>
        </section>
      </div>
    </div>
  )
}

export default page