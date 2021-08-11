<script context="module">
	export const hydrate = false;
	export const load = async ({ page, fetch }) => {
		const res = await fetch(`https://hoot.goldandblack.xyz/api/unstable/posts/${page.params.id}`);
		const data = await res.json();
		return { props: { post: data } };
	};
</script>

<script>
	export let post;
</script>

<section class="max-w-4xl p-4 mx-auto break-words bg-white prose-teal sm:mt-5 sm:shadow sm:rounded">
	<h1 class="text-lg font-semibold md:text-xl">
		{post.title}
	</h1>
	<div class="prose md:prose-lg max-w-none">
		{@html post.content_html || post.content_text}
	</div>
</section>
