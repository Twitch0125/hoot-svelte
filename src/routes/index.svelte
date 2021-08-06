<script context="module">
	import ThePostsLists from '$lib/ThePostsLists.svelte';
	export async function load({ fetch }) {
		const res = await fetch('https://hoot.goldandblack.xyz/api/unstable/posts');
		const data = await res.json();
		return { props: { posts: data } };
	}
</script>

<script>
	export let posts;
</script>

<ThePostsLists {posts} />
