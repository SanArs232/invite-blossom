import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState } from "react"
import ImageRing from "../images/wedding-cover-web.png"
import Nav from "../components/header"
import ImageFlower from "../images/upper-flower.png"
import ImageFlowerReverse from "../images/upper-flower-reverse.png"
import IconCurch from "../images/icon-church.png"
import IconRings from "../images/icon-rings.png"
import IconPhoto from "../images/icon-photo.png"
import IconDance from "../images/icon-dance.png"
import IconDinner from "../images/icon-dinner.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    chouse: "",
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
    <Nav />
    <SEO title="Home" />
    <section className="xl:container mx-auto">
  
  <div className="text-center bg-wedding ">

      <div className="py-10">
      <div className="flex flex-row justify-between">
        <div>
            <img src ={ImageFlowerReverse} alt="Logo" className="mx-auto md:-mt-20" />
          </div>

        <div><h1 className="font-bold text-zinc-700 py-10 md:text-3xl xl:text-5xl ">
            Добродојдовте на нашата Свадбена Покана
          </h1>
        </div>

          <div>
            <img src ={ImageFlower} alt="Logo" className="mx-auto md:-mt-20" />
          </div>
        </div>

        <div className="mx-auto xl:-mt-48">
              <img src={ImageRing} alt="Logo" className="max-w-auto mx-auto" />
           </div>
          
      </div>

        <div div className="font-bold text-zinc-700">
          <h2 className=" px-10 pb-5 md:w-2/4 mx-auto text-3xl  ">
            Чест и задоволство ни е да ве поканиме на нашата Свадбена Прослава
            на ден{" "}
          </h2>
          <div className=" text-5xl pb-5">
            {" "}
            24.06.2022
          </div>
      
          <div className="md:text-3xl">
        <a href="https://goo.gl/maps/wGyno8UJjkjUiwdV8" target="_blank">
          <h2 className=" md:text-3xl text-zinc-700 py-5 decoration-solid">
            во летната градина на ресторан <span className="text-zinc-700 font-extrabold">„Ваго„</span>
          </h2>
          </a>
          <span className="text-zinc-700 font-extrabold ">19:30 часот</span>
        </div>

        <div className="md:text-xl py-20  text-zinc-700 ">
        <div className="flex-wrap flex flex-row -mt-10 ">
              <div className="mx-auto flex-2">
                    <img src={IconCurch} alt="Logo" className="max-w-auto mx-auto h-40 md:h-auto" />
                    <div className="">
                    16:00 часот
                    </div>
              </div>
              <div className="mx-auto ">
                    <img src={IconRings} alt="Logo" className="max-w-auto mx-auto h-40 md:h-auto" />
                    <div className="">
                    16:30 часот
                    </div>
              </div>
              <div className="mx-auto ">
                    <img src={IconPhoto} alt="Logo" className="max-w-auto mx-auto h-40 md:h-auto" />
                    <div className="text-lg text-zinc-700">
                    19:30 часот
                    </div>
              </div>
              <div className="mx-auto">
                    <img src={IconDance} alt="Logo" className="max-w-auto mx-auto h-40 md:h-auto" />
                    <div className="">
                    20:00 часот
                    </div>
              </div>
              <div className="mx-auto">
                    <img src={IconDinner} alt="Logo" className="max-w-auto mx-auto h-40 md:h-auto" />
                    <div className="text-lg text-zinc-700">
                    22:00 часот
                    </div>
              </div>
             
        </div>
        </div>


<div className="bg-wedding ">
        <form
          onSubmit={handleSubmit}
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="thank-you"
          netlify
        >
      
    
        
    <div className="flex flex-row justify-between">
        <div>
            <img src ={ImageFlowerReverse} alt="Logo" className="mx-auto md:-mt-20" />
          </div>
        <div className="pt-20 text-2xl">Ве молиме потврдете го вашето присуство со што ке ја потполните оваа контакна форма</div>
          <div>
            <img src ={ImageFlower} alt="Logo" className="mx-auto md:-mt-20" />
          </div>
        </div>

        <div className="pb-5 -mt-10 flex-col">
          
        <span className="px-28 text-2xl text-right" htmlFor="name">Име и Презиме:</span>
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleChange}
                value={formState.name}
                placeholder="Внесете име и презиме"
                className="w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline "
              />
           
          </div>
      
          <div className="py-5">
           <span className="px-5 text-2xl" htmlFor="name">
              Страна (невеста/младоженец): 
               </span>
                 <input
                   id="chouse"
                   type="text"
                   name="chouse"
                   onChange={handleChange}
                   value={formState.chouse}
                   placeholder="невеста/младоженец"
                   className="w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
                 />
              
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

          <div className="">
          <span className="px-20 text-2xl text-center text-white ">
              Порака до младите:{" "}
              </span>
            <button
              type="submit"
              className="w-2/4 bg-amber-500 border-2 text-white mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>




        </form>
      </div>


      
      
      
      </div>

   









  </div>

    </section>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
   <StaticImage src="../images/background.jpg" alt="gatsby astronaut" />
     <StaticImage src="../images/ivanisanja-bg.png"/>
      <p>
      <Link to="/page-2/">Go to page 2</Link>
    </p>
    <p>
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
    </div> */}
  </Layout>

)
}

export default Contact

