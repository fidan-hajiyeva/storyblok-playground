import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';

export default async function ArticleOverview({ blok }) {
	const storyblokApi = getStoryblokApi();
	let articles = await storyblokApi.getAll('cdn/stories', {
		version: 'draft',
		starts_with: 'articles',
		content_type: 'article',
	});

	return (
		<div>
			<h1>{blok.title}</h1>
			<ul>
				{articles.map((article) => (
					<li key={article.uuid}>
						<Link href={`/${article.full_slug}`}>{article.name}</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
