import React from "react"
import './Landing.css';
import logo from'./img/cinephile-logo.png';
const Landing = () => {
    return (
        <>
          
            <div class="outter-container">

                <header class="header">
                <nav class="logo">
                        <img src={logo} alt="Netflix" />
                        <a href="signin" class="btn">Sign In</a>
                    </nav>

                    <div class="inner-container">
                        <div class="inner-title">
                            <h1 class="heading_lending">Best Unlimited movies, <br></br>TV shows, Cricket Live</h1>
                        </div>
                        <div class="inner-text">
                            <p>Watch anywhere. Cancel anytime.</p>
                        </div>

                        <div class="email-form">
                            <div class="get-started">
                              
                                <a href="signup" class="btn-lg">Get Started</a>
                            </div>
                        </div>
                    </div>
                    <div class="overlay"></div>
                </header>

                <section class="showcase">
                    <div class="showcase-container case1">
                        <div class="inner-container">
                            <div class="inner-title">
                                <h1>Enjoy on your TV.</h1>
                            </div>
                            <div class="inner-text">
                                <p>
                                    Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
                                    Blu-ray players, and more.
                                </p>
                            </div>
                        </div>
                        <div class="showcase-img">
                            <img
                                src="https://i.postimg.cc/NjjHWWwY/846535-h.webp"
                                alt=""
                            />

                        </div>
                    </div>
                </section>

                <section class="showcase">
                    <div class="showcase-container case2">
                        <div class="showcase-img">
                            <img
                                src="https://i.postimg.cc/ncR77pLK/anu-png.webp"
                                alt=""
                            />
                        </div>
                        <div class="inner-container">
                            <div class="inner-title">
                                <h1>Download your shows to watch offline.</h1>
                            </div>
                            <div class="inner-text">
                                <p>
                                    Save your favorites easily and always have something to watch.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="showcase">
                    <div class="showcase-container case3">
                        <div class="inner-container">
                            <div class="inner-title">
                                <h1>Watch everywhere.</h1>
                            </div>
                            <div class="inner-text">
                                <p>
                                    Stream unlimited movies and TV shows on your phone, tablet,
                                    laptop, and TV without paying more.
                                </p>
                            </div>
                        </div>
                        <div class="showcase-img">
                            <img
                                src="https://i.postimg.cc/vH4fkQdP/fun-3d-cartoon-asian-teenager-183364-80775.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>


                <section class="showcase">
                    <div class="showcase-container case2">
                        <div class="showcase-img">
                            <img
                                src="https://i.postimg.cc/NjRCH8Lv/happy-family-enjoy-film-cartoon-cinema-wear-3d-glasses-amused-by-cool-sound-visual-effects-eat-delic.jpg"
                                alt=""
                            />

                        </div>
                        <div class="inner-container">
                            <div class="inner-title">
                                <h1>Download your shows to watch offline.</h1>
                            </div>
                            <div class="inner-text">
                                <p>
                                    Save your favorites easily and always have something to watch.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="showcase">
                    <div class="showcase-container case3">
                        <div class="inner-container">
                            <div class="inner-title">
                                <h1>Watch everywhere.</h1>
                            </div>
                            <div class="inner-text">
                                <p>
                                    Stream unlimited movies and TV shows on your phone, tablet,
                                    laptop, and TV without paying more.
                                </p>
                            </div>
                        </div>
                        <div class="showcase-img">
                            <img
                                src="https://i.postimg.cc/qRsFHsVG/fun-3d-cartoon-teenage-kids-183364-81180.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </section>
                {/* footer */}
                <footer>
                    <div className="showcase-container">
                        <div class="links">
                            <ul>
                                <li>Help Center</li>
                                <li>Account</li>
                                <li>Media Center</li>
                                <li>Ways to Watch</li>
                                <li>Terms of Use</li>
                                <li><a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">Privacy</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
export default Landing;