<script lang="ts">
	import { base } from '$app/paths'
	import Loader from '$lib/UI/Widgets/Loader.svelte'
	import { Toasts } from 'as-toast'
	import { navigating } from '$app/stores'
	import { me, game, location } from '$lib/stores'
	import { onDestroy, onMount } from 'svelte'
	import { subscribeDocument } from '$lib/firebase/firestore'
	import type { Unsubscribe } from 'firebase/firestore'
	import { addLocalStorage, getLocalStorage } from '$lib/Race/storage'
	import { goto } from '$app/navigation'
	import { browser } from '$app/environment'

	let unsub: Unsubscribe
	let mounted = false
	let myData: Player & { gameId: string }
	let currentGame: Game

	onMount(() => {
		mounted = true
	})
	onDestroy(() => {
		if (unsub) {
			unsub()
		}
	})

	me.subscribe((MY_DATA) => (myData = MY_DATA))
	game.subscribe((CURRENT_GAME) => (currentGame = CURRENT_GAME))

	$: {
		if (mounted) {
			if (!myData.uid || myData.uid === '') {
				myData = getLocalStorage()
			}

			if (myData.uid && myData.uid !== '') {
				$me = myData
				addLocalStorage($me)
			}

			if (!unsub && $me.gameId && $me.gameId !== '') {
				unsub = subscribeDocument(
					{
						type: 'game',
						id: $me.gameId
					},
					(response) => {
						const data = response.data() as Game

						if (!response.data()) return

						$game = {
							...$game,
							id: $me.gameId,
							route: data.route,
							state: data.state,
							players: data.players
						}
					}
				)
			}

			if (currentGame.state === 'started') {
				const linkHistory = currentGame.players.find((player) => $me.uid === player.uid)?.progress
					.linkHistory

				if (linkHistory && linkHistory.length !== 0) {
					$location = linkHistory[linkHistory.length - 1].url
					if (browser) goto(`${base}/play`)
				}
			}
		}
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="{base}/app.css" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,500;0,700;0,900;1,500&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<slot />

{#if $navigating}
	<div>
		<div class="loading-box">
			<Loader />
		</div>
	</div>
{/if}

<Toasts />

<style>
	div {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}
	.loading-box {
		margin: auto;
		height: min-content;
		width: min-content;
		padding: 2rem;
		background: var(--bg);
		border-radius: 0.5rem;
		border: 1px var(--text) solid;
	}
</style>
