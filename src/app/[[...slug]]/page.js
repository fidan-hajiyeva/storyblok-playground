import { StoryblokStory } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function Page({ params }) {
	const { slug } = await params;
	const slugSegments = Array.isArray(slug) ? [...slug] : [];

	const availableLanguages = ['it'];
	const language =
		slugSegments.length > 0 && availableLanguages.includes(slugSegments[0])
			? slugSegments[0]
			: undefined;

	if (language) {
		slugSegments.shift();
	}

	let fullSlug = slugSegments.length > 0 ? slugSegments.join('/') : 'home';

	let sbParams = {
		version: 'draft',
		resolve_relations: ['featured-articles.articles'],
		language: language,
	};

	const storyblokApi = getStoryblokApi();
	let { data } = await storyblokApi.get(`cdn/stories/${fullSlug}`, sbParams);

	return (
		<StoryblokStory
			story={data.story}
			bridgeOptions={{
				resolveRelations: 'featured-articles.articles',
			}}
		/>
	);
}
