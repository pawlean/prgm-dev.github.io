<script lang="ts">
	export let href: string;
	/** Set to `true` when the destination link is trusted */
	export let referrer = true;
	export let opensInNewTab = true;

	/** The `rel` parameter for the `a` anchor */
	let rel: string | null = null;
	$: rel = opensInNewTab ? 'noopener' + (referrer ? ' noreferrer' : '') : null;
</script>

<a
	{href}
	{rel}
	target={opensInNewTab ? '_blank' : undefined}
	class="block w-full xs:w-1/2 sm:w-1/3 flex-shrink-0 text-center px-1 py-2"
>
	<h3 class="text-lg font-bold">
		<slot name="title"><span class="opacity-25">Coming soon...</span></slot>
	</h3>
	<p class="opacity-60 text-sm">
		<slot name="description"><span>More on that later!</span></slot>
	</p>
</a>
