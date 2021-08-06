<nav class="flex flex-col w-full bg-teal-600">
	<div class="flex items-center px-4 py-3">
		<div class="text-2xl font-bold tracking-wide text-white">HOOT</div>
		<div class="mx-auto">
			<label for="search" class="sr-only">Search Hoot</label>
			<div class="relative rounded-md shadow-sm">
				<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
					<svg
						class="w-5 h-5 text-gray-400"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>
				<input
					type="text"
					name="search"
					id="search"
					class="block w-full pl-10 border-none rounded-md focus:ring-teal-400 focus:border-teal-400 sm:text-sm"
					placeholder="Search HOOT"
				/>
			</div>
		</div>
	</div>
	<div class="relative px-4">
		<div class="inset-0 flex items-center" aria-hidden="true">
			<div class="w-full border-t border-teal-500" />
		</div>
	</div>
	<div class="px-16 py-3 flex items-center gap-8">
		<span class="text-base font-bold text-white"> Communities </span>
		<button
			class="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white bg-teal-700 rounded"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5 text-teal-100"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
					clip-rule="evenodd"
				/>
			</svg>
			Add Communities
		</button>
	</div>
</nav>
