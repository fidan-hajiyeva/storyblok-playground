import {
	storyblokEditable,
	StoryblokServerRichText,
} from '@storyblok/react/rsc';

const Article = ({ blok }) => {
	return (
		<div className="article" {...storyblokEditable(blok)}>
			<h1>{blok.title}</h1>
			<p>
				<StoryblokServerRichText doc={blok.content} />
			</p>
		</div>
	);
};

export default Article;
