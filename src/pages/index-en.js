import React from "react"
import {Link} from "gatsby"
import {StaticImage} from "gatsby-plugin-image"
import {useState} from "react"
import ImageRing from "../images/ring-ivanisanja.png"
import Nav from "../components/header"
import ImageFlower from "../images/upper-flower.png"
import ImageFlowerReverse from "../images/upper-flower-reverse.png"
import IconCurch from "../images/icon-church.png"
import IconRings from "../images/icon-rings.png"
import IconPhoto from "../images/icon-photo.png"
import IconDance from "../images/icon-dance.png"
import IconDinner from "../images/icon-dinner.png"
import FlowerForm from "../images/flower-form.png"
import FlowerFormReverse from "../images/flowerformreverse.png"
import RingFlowerCover from "../images/bg-si.png"
import RingFlowerCoverSm from "../images/wedding-cover-web.png"
import FooterFlower from "../images/grapich-footer.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        side: "",
        numberToAttend: "",
    })
    const options = [
        {label: '1', numberToAttend: 1},
        {label: '2', numberToAttend: 2},
        {label: '3', numberToAttend: 3},
        {label: '4', numberToAttend: 4},
        {label: '5', numberToAttend: 5},
    ];
    const Dropdown = ({label, numberToAttend, options, onChange}) => {
        return (
            <label>
                {label}
                <select value={numberToAttend} onChange={onChange}>
                    {options.map((option) => (
                        <option value={option.value}>{option.label}</option>
                    ))}
                </select>
            </label>
        );
    };
    const [side, setGender] = useState();
    const [numberToAttend, setValue] = useState();
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
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            body: encode({"form-name": "contactTestKire", ...formState}),
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error))

        e.preventDefault()
    }

    return (

        <Layout>
            <Nav/>
            <SEO title="Home"/>
            <section className="xl:container mx-auto">

                <div className="text-center bg-wedding ">

                    <div className="py-10">
                        <div className="flex flex-row justify-between">
                            <div className="hidden md:block">
                                <img src={FlowerForm} alt="Logo" className="mx-auto md:-mt-20"/>
                            </div>

                            <div>
                                <h2 className=" px-3 md:px-10 pb-5 lg:w-11/12 mx-auto md:text-3xl font-bold text-zinc-700">
                                    Чест и задоволство ни е да ве поканиме на нашата Свадбена Прослава
                                    на ден{" "}
                                </h2>
                                <h1 className="font-bold text-zinc-700 pb-10 lg:pb-20 text-4xl md:text-5xl">
                                    26.06.2022
                                </h1>
                                <div className="h-32 hidden lg:block"></div>
                            </div>

                            <div className="hidden md:block">
                                <img src={FlowerFormReverse} alt="Logo" className="mx-auto md:-mt-20"/>
                            </div>
                        </div>

                        <div className="mx-auto lg:-mt-20 xl:-mt-40">
                            <img src={RingFlowerCover} alt="Logo" className="mx-auto hidden md:block"/>
                        </div>
                        <div className="mx-auto lg:-mt-20 xl:-mt-40">
                            <img src={RingFlowerCoverSm} alt="Logo" className="mx-auto block md:hidden"/>
                        </div>

                    </div>

                    <div div className="font-bold text-zinc-700 lg:mt-40">
                        <div className="md:text-3xl">
                            <a href="https://goo.gl/maps/wGyno8UJjkjUiwdV8" target="_blank">
                                <h2 className="px-3 md:px-10 md:text-3xl text-zinc-700 pb-5 decoration-solid">
                                    Свадбената Прослава ќе се одржи во летната градина на ресторант <span
                                    className="text-zinc-700 font-extrabold hover:text-amber-500">„Ваго„</span>
                                </h2>
                            </a>
                            <span className="text-zinc-700 font-extrabold text-2xl md:text-3xl"> во 19:30 часот</span>
                        </div>

                        <div className="md:text-xl py-20  text-zinc-700 mx-auto">
                            <div className="flex-wrap flex flex-row -mt-10 ">
                                <div className="mx-auto flex-2">
                                    <img src={IconCurch} alt="Logo" className="max-w-auto mx-auto h-28 md:h-auto"/>
                                    <div className="">
                                        16:00 часот
                                    </div>
                                </div>
                                <div className="mx-auto ">
                                    <img src={IconRings} alt="Logo" className="max-w-auto mx-auto h-28 md:h-auto"/>
                                    <div className="">
                                        16:30 часот
                                    </div>
                                </div>
                                <div className="mx-auto ">
                                    <img src={IconPhoto} alt="Logo" className="max-w-auto mx-auto h-28 md:h-auto"/>
                                    <div className="text-lg text-zinc-700">
                                        19:30 часот
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <img src={IconDance} alt="Logo" className="max-w-auto mx-auto h-28 md:h-auto"/>
                                    <div className="">
                                        20:00 часот
                                    </div>
                                </div>
                                <div className="mx-auto">
                                    <img src={IconDinner} alt="Logo" className="max-w-auto mx-auto h-28 md:h-auto"/>
                                    <div className="text-lg text-zinc-700">
                                        22:00 часот
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="bg-wedding">
                            <form
                                onSubmit={handleSubmit}
                                name="contactTestKire"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                action="thank-you"
                                netlify
                            >

                                <div>
                                    <img src={FooterFlower} alt="Logo" className="mx-auto lg:hidden block "/>
                                </div>

                                <div className="flex flex-row justify-between drop-shadow-sm">


                                    <div>
                                        <img src={FlowerForm} alt="Logo" className="mx-auto md:-mt-20 hidden lg:block"/>
                                    </div>
                                    <div className="lg:pt-20 pb-5 xl:pt-40 md:text-2xl px-5 md:px-10 ">Ве молиме
                                        потврдете го вашето присуство со што ке ја потполните оваа контакна форма
                                    </div>
                                    <div>
                                        <img src={FlowerFormReverse} alt="Logo"
                                             className="mx-auto md:-mt-20 hidden lg:block"/>
                                    </div>
                                </div>

                                <div className="pb-5 flex-col">
                                    <input type="hidden" name="contact" value="contact"/>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={formState.name}
                                        placeholder="Внесете име и презиме"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline "
                                    />
                                </div>
                                <div className="py-5 flex-col">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={formState.email}
                                        placeholder="Внесете го вашиот емаил"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline "
                                    />
                                </div>

                                <div className="py-5 flex-col">
                                    <label>Strana : </label><br/>
                                    <input
                                        type="radio"
                                        name="side"
                                        onChange={(e) => {
                                            formState.side = e.target.value;
                                            setGender(e.target.value);
                                        }}
                                        value="male"
                                        placeholder="Страна младоженец"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
                                    />Страна младоженец
                                    <br/>
                                    <input
                                        type="radio"
                                        onChange={(e) => {
                                            formState.side = e.target.value;
                                            setGender(e.target.value);
                                        }}
                                        value="female"
                                        name="side"
                                        placeholder="Страна невеста"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
                                    />Страна невеста
                                </div>
                                <div className="py-5 flex-col">
                                    <Dropdown
                                        label="Број на гости кој потврдуваат присуство :"
                                        options={options}
                                        numberToAttend={numberToAttend}
                                        onChange={(e) => {
                                            formState.numberToAttend = e.target.value;
                                            setValue(e.target.value);
                                        }}
                                    />
                                </div>
                                <div className="">
                                    <button
                                        type="submit"
                                        className="mx-auto w-11/12 md:w-2/4 bg-amber-500 text-white mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline"
                                    >
                                        Send
                                    </button>
                                </div>
                                {/*TEST*/}
                                <p>name: {formState.name}!</p>   <p>email: {formState.email}!</p>
                                <p>side: {formState.side}!</p>   <p>numberToAttend: {formState.numberToAttend}!</p>
                                {/*TEST*/}

                                <div>
                                    <img src={FooterFlower} alt="Logo" className="mx-auto md:-mt-20 md:pt-20 md:px-20"/>
                                </div>

                            </form>
                        </div>


                    </div>

                    <div className="bg-white max-h-96 sm:mt-20 mb-10 ">
                        <footer> Created with love by <span className="text-amber-500 ">Sanja & Ivan</span>
                            <div> 2022</div>
                        </footer>
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

