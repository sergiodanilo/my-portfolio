import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const ResumeContent = () => {

  return (
    <article className="resume-wrapper text-center position-relative">
	    <div className="resume-wrapper-inner mx-auto text-left bg-white shadow-lg">
		    <header className="resume-header pt-4 pt-md-0">
			    <div className="media flex-column flex-md-row">
					<StaticImage
            src="../../assets/images/resume-profile.jpg"
            className="profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
            alt="Profile"
						width={220}
						height={220}
          />
				    <div className="media-body p-4 d-flex flex-column flex-md-row mx-auto mx-lg-0">
					    <div className="primary-info">
						    <h1 className="name mt-0 mb-1 text-white text-uppercase text-uppercase">Sérgio Holanda</h1>
						    <div className="title mb-3">Full Stack Developer</div>
						    <ul className="list-unstyled">
							    <li className="mb-2"><a href="#"><svg className="svg-inline--fa fa-envelope fa-w-16 fa-fw mr-2" data-fa-transform="grow-3" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style={{transformOrigin: "0.5em 0.5em;"}}><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(1.1875, 1.1875)  rotate(0 0 0)"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z" transform="translate(-256 -256)"></path></g></g></svg>sergio.danilo@gmail.com</a></li>
							    <li><a href="#"><svg className="svg-inline--fa fa-mobile-alt fa-w-10 fa-fw mr-2" data-fa-transform="grow-6" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg="" style={{transformOrigin: "0.3125em 0.5em;"}}><g transform="translate(160 256)"><g transform="translate(0, 0)  scale(1.375, 1.375)  rotate(0 0 0)"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z" transform="translate(-160 -256)"></path></g></g></svg>+351 924 047 691</a></li>
						    </ul>
					    </div>
					    <div className="secondary-info ml-md-auto mt-2">
						    <ul className="resume-social list-unstyled">
				                <li className="mb-3"><a href="#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg></span>linkedin.com/in/sergiodanilo</a></li>
				                <li className="mb-3"><a href="#"><span className="fa-container text-center mr-2"><svg className="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg></span>github.com/sergiodanilo</a></li>
						    </ul>
					    </div>

				    </div>
			    </div>
		    </header>
		    <div className="resume-body p-5">
			    <section className="resume-section summary-section mb-5">
				    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Career Summary</h2>
				    <div className="resume-section-content">
					    <p className="mb-0">A skilled Java developer with proven expertise in using new tools and technical developments to drive improvements throughout an entire software development lifecycle. Frontend enthusiast.</p>
				    </div>
			    </section>
			    <div className="row">
				    <div className="col-lg-9">
					    <section className="resume-section experience-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Work Experience</h2>
						    <div className="resume-section-content">
							    <div className="resume-timeline position-relative">
								    <article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Senior Full-stack Developer</h3>
										        <div className="resume-company-name ml-auto">BOLD</div>
										    </div>
										    <div className="resume-position-time">01/2021 - Present</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Handled full stack development for all client projects. Planned, wrote, and debugged web applications and software with complete accuracy.</p>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Achievements:</h4>
										    <p>Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</p>
										    <ul>
											    <li>Lorem ipsum dolor sit amet, 80% consectetuer adipiscing elit.</li>
											    <li>At vero eos et accusamus et iusto odio dignissimos.</li>
											    <li>Blanditiis praesentium voluptatum deleniti atque corrupti.</li>
											    <li>Maecenas tempus tellus eget.</li>
										    </ul>
										    <h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
										    <ul className="list-inline">
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Spring</span></li>
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">PostgreSQL</span></li>
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Jenkins</span></li>
											    <li className="list-inline-item"><span className="badge badge-secondary badge-pill">Git</span></li>
													<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Docker</span></li>
													<li className="list-inline-item"><span className="badge badge-secondary badge-pill">ElasticSearch</span></li>
										    </ul>
									    </div>

								    </article>

								    <article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Full-stack Developer</h3>
										        <div className="resume-company-name ml-auto">Uniksystem</div>
										    </div>
										    <div className="resume-position-time">10/2019 - 12/2020</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Solely responsible for developing from scratch a software which was able to put together a unique solution using a vast number of technologies to all ongoing projects for Unisystem. These were built in different stacks using specific architectures. In order to achieve the project's integration objectives, the new architecture was built in Java, Spring (MVC, Data, Security), PostgreSQL, MongoDB in back-end and React, Typescript, Bootstrap in front-end. Even though there were several obstacles, I was able to create jobs to automate the processes using Git, Jenkins, Nexus.</p>
									    </div>
											<h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
											<ul className="list-inline">
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Spring</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Typescript</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">PostgreSQL</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MongoDB</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Jenkins</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Git</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Jenkins</span></li>
											</ul>
								    </article>

								    <article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Full-stack Developer</h3>
										        <div className="resume-company-name ml-auto">SME - Secretaria Municipal de Educação do Estado Ceará</div>
										    </div>
										    <div className="resume-position-time">10/2015 - 09/2019</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Maintenance and development of softwares in JSF (Primefaces), MyBatis (ORM), Oracle. Responsible also for the management and planning of the project architecture from ground zero, migrating the entire system into a new one using Java 8, Spring (Boot, MVC, Data) in the back-end. In the front-end, ReactJS, Redux, Redux-Saga, AntD were used to create the solution. Out of necessity, it was also added to the project  a mobile app in React Native as well as API (Java, Spring).</p>
									    </div>
											<h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
											<ul className="list-inline">
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Spring</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">JSF</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">React</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">AntDesign</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Oracle</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">MyBatis</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Hibernate</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Git</span></li>
											</ul>
								    </article>

								    <article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer</h3>
										        <div className="resume-company-name ml-auto">Casa Magalhães</div>
										    </div>
										    <div className="resume-position-time">08/2014 - 09/2015</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Creation of a series of tests to analyse and further development of in house softwares catering for a wide range of customers. The solution, Varejo Fácil, was developed using vRaptor (a popular Brazilian JAVA MVC framework) as well as Hibernate (ORM), depending on the client’s preference or request the DBMS could have been Oracle PostgreSQL, MySQL. Creating unit tests with JUnit, integration tests with DBUnit and functional tests with Selenium. The front-end was developed in HTML/CSS/jQuery.</p>
									    </div>
											<h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
											<ul className="list-inline">
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">vRaptor</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">PostgreSQL</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Hibernate</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">jQuery</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">HTML/CSS</span></li>
											</ul>
								    </article>

										<article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer</h3>
										        <div className="resume-company-name ml-auto">BRQ</div>
										    </div>
										    <div className="resume-position-time">11/2011 - 07/2014</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>In Charge of the maintenance of a legacy in JSP & Servlets and requirement analysis and the development of a system in JSF (Primefaces), MyBatis (ORM), Oracle (PL/SQL), testing with JUnit e Mockito.</p>
									    </div>
											<h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
											<ul className="list-inline">
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">JSF</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Oracle</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">PL/SQL</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Hibernate</span></li>
											</ul>
								    </article>

										<article className="resume-timeline-item position-relative pb-5">

									    <div className="resume-timeline-item-header mb-2">
										    <div className="d-flex flex-column flex-md-row">
										        <h3 className="resume-position-title font-weight-bold mb-1">Web Developer</h3>
										        <div className="resume-company-name ml-auto">Indra Politec</div>
										    </div>
										    <div className="resume-position-time">01/2009 - 10/2011</div>
									    </div>
									    <div className="resume-timeline-item-desc">
										    <p>Part of the development team for a web-based and desktop distribution system using technologies such as Java Web and Swing linking it  with the owner's frameworks in order to change web messages in a similar way to what JSON currently does.</p>
									    </div>
											<h4 className="resume-timeline-item-desc-heading font-weight-bold">Stack:</h4>
											<ul className="list-inline">
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">JSP & Servlets</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Java Swing</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Informix DB</span></li>
												<li className="list-inline-item"><span className="badge badge-secondary badge-pill">Tomcat</span></li>
											</ul>
								    </article>
							    </div>
						    </div>
					    </section>
				    </div>
				    <div className="col-lg-3">
					    <section className="resume-section skills-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Skills &amp; Tools</h2>
						    <div className="resume-section-content">
						        <div className="resume-skill-item">
							        <h4 className="resume-skills-cat font-weight-bold">Frontend</h4>
							        <ul className="list-unstyled mb-4">
								        <li className="mb-2">
								            <div className="resume-skill-name">React</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "90%"}}></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">Angular</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "50%"}}></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">JavaScript</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "96%"}}></div>
											</div>
								        </li>

								        <li className="mb-2">
								            <div className="resume-skill-name">Node.js</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "80%"}}></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">HTML/CSS/SASS/LESS</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "80%"}}></div>
											</div>
								        </li>
							        </ul>
						        </div>

						        <div className="resume-skill-item">
						            <h4 className="resume-skills-cat font-weight-bold">Backend</h4>
							        <ul className="list-unstyled">
								        <li className="mb-2">
								            <div className="resume-skill-name">Java/Spring</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "95%"}}></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">REST/SOAP</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "90%"}}></div>
											</div>
								        </li>
								        <li className="mb-2">
								            <div className="resume-skill-name">JPA (Hibernate, MyBatis)</div>
									        <div className="progress resume-progress">
											    <div className="progress-bar theme-progress-bar-dark" role="progressbar" style={{width: "85%"}}></div>
											</div>
								        </li>

							        </ul>
						        </div>

						        <div className="resume-skill-item">
						            <h4 className="resume-skills-cat font-weight-bold">Others</h4>
						            <ul className="list-inline">
							            <li className="list-inline-item"><span className="badge badge-light">DevOps</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Code Review</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Git</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Unit Testing</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Mockito Testing</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Jenkins</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Docker</span></li>
							            <li className="list-inline-item"><span className="badge badge-light">Nexus</span></li>
						            </ul>
						        </div>
						    </div>
					    </section>
					    <section className="resume-section education-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Education</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled">
								    <li className="mb-2">
								        <div className="resume-degree font-weight-bold">MBA Software Engineering</div>
								        <div className="resume-degree-org">Faculdade Estácio de Sá - Brazil</div>
								        <div className="resume-degree-time">2015 - 2016</div>
								    </li>
								    <li>
								        <div className="resume-degree font-weight-bold">Bachelor of Computer Science</div>
								        <div className="resume-degree-org">Universidade Federal de Campina Grande</div>
								        <div className="resume-degree-time">2002 - 2008</div>
								    </li>
							    </ul>
						    </div>
					    </section>
					    <section className="resume-section language-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Language</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled resume-lang-list">
								    <li className="mb-2"><span className="resume-lang-name font-weight-bold">Portugues</span> <small className="text-muted font-weight-normal">(Native)</small></li>
								    <li className="mb-2 align-middle"><span className="resume-lang-name font-weight-bold">English</span> <small className="text-muted font-weight-normal">(Intermediate)</small></li>
								    <li><span className="resume-lang-name font-weight-bold">Spanish</span> <small className="text-muted font-weight-normal">(Beginner)</small></li>
							    </ul>
						    </div>
					    </section>
					    <section className="resume-section interests-section mb-5">
						    <h2 className="resume-section-title text-uppercase font-weight-bold pb-3 mb-3">Interests</h2>
						    <div className="resume-section-content">
							    <ul className="list-unstyled">
								    <li className="mb-1">Music</li>
								    <li className="mb-1">Films</li>
								    <li className="mb-1">Sports</li>
							    </ul>
						    </div>
					    </section>

				    </div>
			    </div>
		    </div>


	    </div>
    </article>
  )
}

export default ResumeContent;
