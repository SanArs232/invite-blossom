import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useState } from "react"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  })
  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleChange = e =>
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })

  const handleSubmit = e => {
    fetch("/", {
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formState }),
    })
      .then(() => alert("Success!"))
      .catch(error => alert(error))

    e.preventDefault()
  }

  return (
    <Layout>
      <SEO title="Contact" />
      <div className="container">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="thank-you"
          netlify
        >
          <input type="hidden" name="contact" value="contact" />
          <p className="">
            <label className="px-11" htmlFor="name">
              Your Name:
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Enter Your Name"
                className="px-10 border-4"
              />
            </label>
          </p>

          <p className="">
            <label className="px-11">
              Your Email:
              <input
                id="email"
                type="email"
                name="email"
                onChange={handleChange}
                value={formState.email}
                placeholder="Enter Email"
                className="px-10 border-4"
              />
            </label>
          </p>

          <div className="flex flex-col border-4">
            <label className="bg-gray-200 px-10">Your Role: </label>
            <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-state"
              >
                State
              </label>
              <div class="relative">
                <select
                  class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state "
                >
                  <option onChange={handleChange} value={formState.one}>
                    New Mexico
                  </option>
                  <option onChange={handleChange} value={formState.two}>
                    Missouri
                  </option>
                  <option onChange={handleChange} value={formState.three}>
                    Texas
                  </option>
                </select>
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>


              <div>
            <span className="px-20 text-2xl text-center">
              Порака до младите:{" "}
              </span>
              <textarea
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Опционална порака до младите"
                className=" h-32 w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
              ></textarea>
           
          </div>
            </div>
            {/* <select name="role[]" multiple>
              <option
                value="leader"
                onChange={handleChange}
                value={formState.leader}
                className="bg-gray-400"
              >
                Leader
              </option>
              <option
                value="follower"
                onChange={handleChange}
                value={formState.follower}
                className="bg-gray-200"
              >
                Follower
              </option>
            </select> */}
          </div>

          <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
          <p>
            <label className="bg-gray-200 px-10 border-4">
              Message for us:{" "}
              <textarea
                name="message"
                onChange={handleChange}
                value={formState.message}
                placeholder="Enter Message"
                className="h-32"
              ></textarea>
            </label>
          </p>
          <p>
            <button
              type="submit"
              className="bg-gray-600 text-yellow-300 px-5 py-2"
            >
              Send
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact
