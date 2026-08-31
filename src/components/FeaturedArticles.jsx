import { storyblokEditable } from '@storyblok/react';

export default function FeaturedArticles({ blok }) {
	return (
		<section {...storyblokEditable(blok)} className="featured-articles">
			<h2>Featured Articles</h2>
			<ul>
				{blok.articles.map((article) => (
					<li key={article.uuid}>
						<a href={`/${article.full_slug}`}>{article.name}</a>
					</li>
				))}
			</ul>
		</section>
	);
}
