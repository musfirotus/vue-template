<template>
	<div class="home">
		{{ photos }}
	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from "@/components/HelloWorld.vue";
	import { mapActions, mapState } from "vuex";

	export default {
		name: "Home",
		methods: {
			...mapActions("photos", ["getPhotos"]),
		},
		computed: {
			...mapState("photos", ["photos"]),
		},

		async mounted() {
			await this.getPhotos();
		},
	};
</script>
