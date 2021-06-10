import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

type BlogPosts = {
	_id: string,
	title: string,
	image: string,
	heading: string,
	content: any,
	created: Date
}

const BlogContent = () => {

	const [posts, setPosts] = useState<BlogPosts[]>([]);

	useEffect(() => {
		fetch("https://my-portfolio-blog.herokuapp.com/blog-posts")
		.then(response => response.json())
		.then(resultData => {
			setPosts(resultData)
		});
	}, []);

  return (
    <section className="section pt-5">
			<div className="container blog-cards">
				<div className="row">
					{
						posts.map(post =>
							<div key={post._id} className="col-12 col-md-6 col-lg-4 mb-5">
								<div className="card rounded-0 border-0 shadow-sm eq-height">
									<div className="card-img-container position-relative">
										<StaticImage
											src={post.image}
											className="card-img-top rounded-0"
											alt="img-2"
										/>
										<div className="card-img-overlay overlay-mask text-center p-0">
											<div className="overlay-mask-content text-center w-100 position-absolute">
											<a className="btn btn-primary" href="blog-post.html">Read more</a>
										</div>
										<a className="overlay-mask-link position-absolute w-100 h-100" href="blog-post.html"></a>
									</div>
								</div>

								<div className="card-body pb-4">
									<h4 className="card-title mb-2">
										<a href="blog-post.html">{post.title}</a>
									</h4>
									<div className="card-text">
										<div className="excerpt">
											{post.heading}
										</div>
									</div>
									</div>
									<div className="card-footer border-0">
										<ul className="meta list-inline mb-0">
											<li className="list-inline-item mr-3"><svg className="svg-inline--fa fa-clock fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
												{new Date(post.created).toLocaleDateString()}
											</li>
											<li className="list-inline-item"><svg className="svg-inline--fa fa-comment fa-w-16 mr-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comment" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 32C114.6 32 0 125.1 0 240c0 49.6 21.4 95 57 130.7C44.5 421.1 2.7 466 2.2 466.5c-2.2 2.3-2.8 5.7-1.5 8.7S4.8 480 8 480c66.3 0 116-31.8 140.6-51.4 32.7 12.3 69 19.4 107.4 19.4 141.4 0 256-93.1 256-208S397.4 32 256 32z"></path></svg>
												<a href="#">12 Comments</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						)
					}

					<div className="col-12 mb-5"></div>
				</div>
			</div>
		</section>
  )
}

export default BlogContent;
