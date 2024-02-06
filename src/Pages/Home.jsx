import React from 'react';
import Navbar from '../Components/Navbar';
import TopTab from '../Components/LinkedInFollow';
import Footer from '../Components/Footer';
import '../css/normalize.css';
import '../css/webflow.css';
import '../css/resume-auto-editor.webflow.css';
import WebsiteImage from "../images/Website.png"

export default function Home() {
    return (
        <>
            {/* <TopTab /> */}
            <Navbar />
            {/* <div class="flowout-hero">
                <h1 class="flowout-hero-wrapper flowout-hero-heading">Get past the Applicant Tracking System</h1>
                <p class="flowout-hero-wrapper flowout-hero-text">Are you tired of getting all your software engineering job applications denied? Have a 90% chance at getting past the ATS and get an OA</p>
                <div class="flowout-hero-wrapper flowout-hero-buttons">
                    <a href="https://webflow.com/website/flowout-saturn" target="_blank" class="flowout-button flowout-button-big flowout-button-cta w-button">Get Started</a>
                    <a href="#" class="flowout-button flowout-button-big w-button">Watch the demo</a>
                </div><img src={WebsiteImage} loading="lazy" sizes="(max-width: 479px) 93vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1279px) 94vw, 85vw" srcset="images/Website-p-500.png 500w, images/Website-p-800.png 800w, images/Website.png 1248w" alt="" class="flowout-hero-image" />
            </div> */}
            <div class="bg-gradient-to-b from-green-50 to-green-100">


    <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Get past the
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                            <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">ATS.</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-black sm:text-xl">Are you tired of getting all your software engineering job applications denied? Have a 90% chance at getting past the ATS and get an OA.</p>

                    <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Add to Chrome - It's Free </a>

                        <a href="#" title="" class="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80">
                            <svg class="w-10 h-10 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path fill="#F97316" stroke="#F97316" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            Watch video
                        </a>
                    </div>
                </div>

                <div>
                    <img class="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/2/hero-img.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

            <main className="flowout-main">
                <section id="how-it-works" className="flowout-how-it-works flowout-section">
                    <div className="flowout-container w-container">
                        <div className="flowout-tag-wrapper">
                            <div className="flowout-tag flowout-tag-how-it-works">benefits<br />‍</div>
                        </div>
                        <h2 className="flowout-section-heading flowout-text-center">Optimize. Impress. Succeed.</h2>
                        <div className="w-layout-grid flowout-section-item flowout-section-item-first">
                            <div className="flowout-section-item-left">
                                <div className="flowout-section-item-content">
                                    <h3 className="flowout-section-item-heading">Time Saving Optimization</h3>
                                    <p className="flowout-section-item-text">Streamline your resume editing with our intuitive tool. Quickly adjust your resume for each software engineering role, saving valuable time and effort.</p>
                                    <div className="flowout-divider"></div>
                                </div>
                            </div>
                            <div id="w-node-_80c56941-ca13-ed58-9d0e-7a44e02e96fc-feaa2519" className="flowout-section-item-right">
                                <div className="flowout-section-item-image image-1">
                                    <div className="flowout-section-item-tag-1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-grid flowout-section-item">
                            <div className="flowout-section-item-left">
                                <div className="flowout-section-item-image image-2">
                                    <div className="flowout-section-item-tag-2"></div>
                                </div>
                            </div>
                            <div className="flowout-section-item-right">
                                <div className="flowout-section-item-content">
                                    <h3 className="flowout-section-item-heading">Targeted Interview Invites</h3>
                                    <p className="flowout-section-item-text">Enhanced your resume to meet specific job criteria. Our technology increases the likelihood of receiving more interviews and OAs.</p>
                                    <div className="flowout-divider"></div>
                                </div>
                            </div>
                        </div>
                        <div className="w-layout-grid flowout-section-item flowout-section-item-last">
                            <div className="flowout-section-item-left">
                                <div className="flowout-section-item-content">
                                    <h3 className="flowout-section-item-heading">Maximized Job Match</h3>
                                    <p className="flowout-section-item-text">Leverage our advanced matching algorithms to align your skills with job requirements. Experience a surge in software job compatibility and recruiter interest.</p>
                                    <div className="flowout-divider"></div>
                                </div>
                            </div>
                            <div id="w-node-a2b63abf-7d97-e8b1-c504-ba67dd29a217-feaa2519" className="flowout-section-item-right">
                                <div className="flowout-section-item-image image-3">
                                    <div className="flowout-section-item-tag-3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-10 bg-gray-900 sm:py-16 lg:py-24">
                    <div class="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                        <div class="max-w-2xl mx-auto text-center">
                            <h2 class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl mx-auto text-center">Frequently Asked Questions</h2>
                            <p class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-300">Still unsure? Read our FAQ</p>
                        </div>

                        <div class="grid grid-cols-1 mt-12 md:mt-20 md:grid-cols-2 gap-y-16 gap-x-20">
                            <div class="flex items-start">
                                <div class="ml-4">
                                    <p class="text-xl font-semibold text-white">Why should I use ResuMatch?</p>
                                    <p class="mt-4 text-base text-gray-400">If you're anything like me, you had a super hard time looking for an internship. On top of all your classwork, LeetCoding and other responsibilites, you don't have that much time to constantly redo and write a different resume based on each job you apply to. We help you by automatically adding the keywords to your resume, saving you time and money.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="ml-4">
                                    <p class="text-xl font-semibold text-white">How do we use the extension?</p>
                                    <p class="mt-4 text-base text-gray-400">All you have to do is signup, fill out all your info you'd like to put on your resume and the rest is automatically handled for you whenever you apply to a job.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="ml-4">
                                    <p class="text-xl font-semibold text-white">When can we start using the platform?</p>
                                    <p class="mt-4 text-base text-gray-400">Currently, we're only going to be able to handle about 50 users and then use that to improve our resume writing algorithm. An expected date for the general public is March 1st.</p>
                                </div>
                            </div>

                            <div class="flex items-start">
                                <div class="ml-4">
                                    <p class="text-xl font-semibold text-white">Why do you only allow 50 beta users?</p>
                                    <p class="mt-4 text-base text-gray-400">This platform is currenty run by 1 person, and I don't have the ability to financially handle traffic more than that. Along with this, we'll use these first few testers for testimonials and to make sure that the buyers have the best possible product.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </main>
            <Footer />
        </>
    );
}
