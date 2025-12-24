import { ReactLenis } from "lenis/dist/lenis-react";

import Copy from "./components/Copy";

export default function Page() {
    return (
        <>
            <ReactLenis root />

            <nav>
                <p>Reveal Animation</p>
                <p>Menu</p>
            </nav>

            <section className="intro">
                <div className="section-bg">
                    <img src="/images/img_1.jpg" alt="" />
                </div>

                <Copy blockColor="#fe0100">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam?</h1>
                </Copy>
            </section>

            <section className="about">
                <Copy>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia accusantium voluptatibus fugit
                        ipsum! Quasi iure autem inventore nihil nisi velit iste aspernatur et, cumque exercitationem,
                        molestiae expedita corrupti veniam deserunt?
                    </p>
                </Copy>
            </section>

            <section className="banner-img">
                <div className="section-bg">
                    <img src="/images/img_2.jpg" alt="" />
                </div>
            </section>

            <section className="services">
                <Copy>
                    <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ducimus nisi unde.</h1>
                </Copy>
            </section>

            <section className="banner-img">
                <div className="section-bg">
                    <img src="/images/img_3.jpg" alt="" />
                </div>
            </section>

            <section className="cta">
                <Copy blockColor="#fe0100">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati illo facere aliquid
                        cupiditate quidem consequatur ratione officiis repellat officia aspernatur. At architecto
                        repudiandae tempora quod, magnam cumque dolorem. Architecto, aspernatur.
                    </p>
                </Copy>
            </section>

            <section className="outro">
                <div className="section-bg">
                    <img src="/images/img_4.jpg" alt="" />
                </div>

                <Copy blockColor="#fe0100">
                    <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut odio voluptatem pariatur.</h1>
                </Copy>
            </section>
        </>
    );
}
