import React from "react";
import vg from "../Assets/2.webp";


import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
  } from "react-icons/ai";

const Home = () => {
    return (
             <>
              <div className="home"  id="home">
             <main>
                 <h1>tech solution</h1>
                <p>solution of your all problems</p> 
             </main> 
              </div>

             <div className="home2">
                <img src={vg} alt="Graphics" />
                <div>
                    <p>We are your one-and-only solution to the technological issues you 
                 confront on a daily basis. We are a prominent technology business whose  mission is to improve 
                 children's problem-solving abilities.</p>
                </div>
                </div> 

               
                    <div className="home3"  id="About">
                        <div>
                        <h1>Who we are ?</h1>
                        <p>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            officiis hic illo quos sit commodi, aut magnam odio eligendi? Totam
            quis officiis fugit sunt dolores nostrum tenetur iusto est odio
            mollitia. Dolor placeat repellendus officia aspernatur dolorum
            harum. Dolorem cumque quaerat eius qui deserunt ullam laudantium
            quia tempore. Dignissimos esse sequi numquam est ipsam nemo,
            voluptas vel recusandae iste aspernatur qui quasi, commodi, atque
            ipsa dolores tempore asperiores? Dolores soluta placeat molestiae
            aperiam, ullam officia fugiat corrupti odio, suscipit ipsum cum vel
            nemo. Ratione quo tempore fugit quaerat! Facilis beatae impedit
            similique maxime praesentium sunt unde necessitatibus voluptates
            ipsa, et, numquam reiciendis eveniet? Aliquid nemo nesciunt placeat,
            qui fuga quae repellat sunt, non natus, iure ab officia rem ipsa cum
            sed cumque corporis voluptate quibusdam nostrum quod saepe</p>
                    </div>
      </div>


            <div className="home4"  id="Brands">
             <div>
                <h1>Brands</h1>
               
                    <article>
                          <div style={{
                            animationDelay:"0.5s",
                          }}>
                        <AiFillGoogleCircle/>   
                        <p>Google</p>                     
                          </div>

                           <div style={{
                            animationDelay:"0.3s",
                           }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                           </div>

                       <div style={{
                        animationDelay:"0.5s"
                       }}>
                        <AiFillYoutube/>
                       <p>Youtube</p>
                       </div>

                       <div style={{
                        animationDelay:"0.3S",
                       }}>
                        <AiFillInstagram/>
                      <p>Instgram</p>
                       </div>

                    </article>
               
             </div>
            </div>



             </>
    );
};

export default Home;