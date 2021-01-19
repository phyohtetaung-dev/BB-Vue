export default {
	data() {
		return {
			title: "",
			description: "",
			error: "",
		};
	},
	methods: {
		createPostConfirm() {
			console.log(this.holdData);
			this.$store
					.dispatch("createPostConfirm", {
						title: this.title,
						description: this.description
					})
					.then(() => {
						this.error = "";
						this.$router.push({ name: "create-post-confirm" });
					})
					.catch(err => {
						this.error = err.response.data.errors;
						console.log(err);
					});
		},
		removePostInputs() {
			this.title = "",
			this.description = ""
		}
	}
};
