<script>
	import { findTimeDifference } from './utils';

	export let posts = [];
</script>

<div class="flex flex-col gap-4 pt-5 max-w-4xl mx-auto">
	{#each posts as post (post.id)}
		<div class="flex flex-col gap-2 px-4 py-2 bg-white rounded shadow">
			<div class="flex flex-col">
				<div class="text-gray-600 text-sm">
					{post.community.name}@{post.community.host}
				</div>
				<a
					href={`/posts/${post.id}`}
					class="text-base text-teal-900 hover:text-teal-700 font-medium"
					sveltekit:prefetch
				>
					{post.title}
				</a>
			</div>
			<div class="flex flex-col gap-1">
				<div class="text-gray-600 text-sm">
					By {post.author.username}@{post.author.host}
					{findTimeDifference(post.created)} ago
				</div>
				<div class="flex items-center gap-4 text-gray-500">
					<div class="inline-flex gap-2 items-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
							/>
						</svg>
						<div>
							{post.replies_count_total} comments
						</div>
					</div>
					<div class="inline-flex gap-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
							/>
						</svg>
						{post.score} likes
					</div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
						/>
					</svg>
				</div>
			</div>
		</div>
	{/each}
</div>
