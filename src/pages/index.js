import React from "react"
// import {Link} from "gatsby"
// import {StaticImage} from "gatsby-plugin-image"
import {useState} from "react"
// import ImageRing from "../images/ring-ivanisanja.png"
import Nav from "../components/header"
// import ImageFlower from "../images/upper-flower.png"
// import ImageFlowerReverse from "../images/upper-flower-reverse.png"
import IconCurch from "../images/icon-church.png"
import IconCheers from "../images/icon-chin-chin.png"
import IconCake from "../images/icon-cake.png"
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
                <select value={numberToAttend} onChange={onChange} name="numberToAttend">
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
            body: encode({"form-name": "contact", ...formState}),
        })
            .then(() => alert("?????????????? ?????????????????? ??????????????????!"))
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
                                <h2 className="px-3 md:px-10 pb-5 lg:w-11/12 mx-auto md:text-3xl font-bold text-zinc-700">
                                    ???????? ?? ?????????????????????? ???? ?? ???? ???? ???????????????? ???? ???????????? ???????????????? ????????????????
                                    ???? ??????{" "}
                                </h2>
                                <h1 className="font-bold text-zinc-700 pb-10 lg:pb-20 text-4xl md:text-5xl">
                                    24.06.2022
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
                            <a href="https://goo.gl/maps/wGyno8UJjkjUiwdV8" target="_blank" rel="noreferrer">
                                <h2 className="px-3 md:px-10 md:text-3xl text-zinc-700 pb-5 decoration-solid">
                                    ???????????????????? ???????????????? ???? ???? ?????????? ???? ?????????????? ?????????????? ???? ?????????????????????? <span
                                    className="text-zinc-700 font-extrabold hover:text-amber-500">??????????????</span>
                                </h2>
                            </a>
                            <span className="text-zinc-700 font-extrabold text-2xl md:text-3xl">??o ?????????????? ???? 19:00 ??????????</span>
                        </div>

                        <div className="md:text-xl py-20  text-zinc-700 mx-auto">
                            <div className="flex-wrap flex flex-row -mt-10 ">
                                <div className="mx-auto flex-2 px-2">
                                <a href="https://goo.gl/maps/68JCsubYhqEi5aYu6" target="_blank" rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconCurch} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        16:00 ??????????
                                    </div>
                                  </a>
                                </div>
                                <div className="mx-auto px-2 ">
                                <a href="https://goo.gl/maps/68JCsubYhqEi5aYu6" target="_blank" rel="noreferrer"  className="text-gray-800 lg:inline-block "> 
                                    <img src={IconRings} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        16:30 ??????????
                                    </div>
                                 </a>   
                                </div>
                                <div className="mx-auto px-2 ">
                                <a href="https://goo.gl/maps/SpJgEDjPJNj5pvLx6" target="_blank"  rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconPhoto} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        19:00 ??????????
                                    </div>
                                    </a>
                                </div>
                                <div className="mx-auto px-2">
                                <a href="https://goo.gl/maps/SpJgEDjPJNj5pvLx6" target="_blank" rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconCheers} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        20:00 ??????????
                                    </div>
                                    </a>    
                                </div>
                                <div className="mx-auto px-2">
                                <a href="https://goo.gl/maps/SpJgEDjPJNj5pvLx6" target="_blank" rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconDinner} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        22:00 ??????????
                                    </div>
                                    </a>    
                                </div>
                                <div className="mx-auto px-2">
                                <a href="https://goo.gl/maps/SpJgEDjPJNj5pvLx6" target="_blank" rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconCake} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        23:00 ??????????
                                    </div>
                                    </a>    
                                </div>
                                <div className="mx-auto px-2">
                                <a href="https://goo.gl/maps/SpJgEDjPJNj5pvLx6" target="_blank" rel="noreferrer" className="text-gray-800 lg:inline-block ">
                                    <img src={IconDance} alt="Logo" className="max-w-auto mx-auto h-28 sm:h-auto"/>
                                    <div className="text-lg text-zinc-700 hover:text-amber-500">
                                        20:00-01:00 ??????????
                                    </div>
                                  </a>    
                                </div>

                            </div>
                        </div>


                        <div className="bg-wedding">
                            <form
                                onSubmit={handleSubmit}
                                name="contact"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                action="thank-you"
                                netlify
                            >

                                <div>
                                    <img src={FooterFlower} alt="Logo" className="mx-auto"/>
                                </div>

                                <div className="mx-auto lg:pt-10 pb-5 md:text-3xl px-2 text-xl md:px-10 w/3/4 lg:w-2/4">
                                  ???? ???????????? ?????????????????? ???? ???????????? ?????????????????? ???????????????? ???? 10 ???????? 2022 ????????????
                                </div>

                                <div className="pb-5 flex-col">
                                    <input type="hidden" name="contact" value="contact"/>

                                    <input
                                        id="name"
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        value={formState.name}
                                        placeholder="?????????????? ?????? ?? ??????????????"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline "
                                        required
                                    />
                                </div>
                                <div className="py-5 flex-col">
                                    <input
                                        id="email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        value={formState.email}
                                        placeholder="?????????????? ???? ???????????? ??????????"
                                        className="mx-auto w-11/12 md:w-2/4 bg-white border-2 border-amber-500 mt-2 p-3 rounded-sm focus:outline-none focus:shadow-outline "
                                    />
                                </div>
                                <span className="mt-5 mx-auto "> ???????????????? ???? ???????? ???????????? ?????? ???????????????? : </span> 
                                <div className="py-5">
                                    <input
                                        type="radio"
                                        name="side"
                                        onChange={(e) => {
                                            formState.side = e.target.value;
                                            setGender(e.target.value);
                                        }}
                                        value="male"
                                        placeholder="???????????? ????????????????????"
                                        className="mx-auto bg-white border-2 border-amber-500 rounded-sm focus:outline-none focus:shadow-outline ml-5 px-2"
                                    /><label className="px-1 "> ????????????????????</label>
                                    
                                    <input
                                        type="radio"
                                        onChange={(e) => {
                                            formState.side = e.target.value;
                                            setGender(e.target.value);
                                        }}
                                        value="female"
                                        name="side"
                                        placeholder="???????????? ??????????????"
                                        className="mx-auto bg-white border-2 border-amber-500 rounded-sm focus:outline-none focus:shadow-outline ml-5 px-2"
                                    /><label className="px-1 "> ??????????????</label>
                                </div>
                                <div className="py-5 mx-auto w-11/12 md:w-2/4">
                                    <Dropdown
                                        label="???????? ???? ?????????? ?????? ?????????????????????? ?????????????????? :"
                                        required
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
                                       ??????????????
                                    </button>
                                </div>
                                {/*TEST*/}
                                {/* <p>name: {formState.name}!</p>   <p>email: {formState.email}!</p>
                                <p>side: {formState.side}!</p>   <p>numberToAttend: {formState.numberToAttend}!</p> */}
                                {/*TEST*/}

                                <div>
                                    <img src={FooterFlower} alt="Logo" className="mx-auto md:-mt-38 md:pt-20 md:px-20"/>
                                </div>
                                <div className="bg-white ">
                        <footer> Created with love by <span className="text-amber-500 ">Sanja & Ivan</span>
                            <div> 2022</div>
                        </footer>
                    </div>
                            </form>
                        </div>


                    </div>

                    

                </div>
                  

            </section>
            

        </Layout>

    )
}

export default Contact

