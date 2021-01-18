export default {
	data() {
		return {
			types: ["Admin", "User"],
			userInfo: {
				name: "",
				email: "",
				password: "",
				password_confirmation: "",
				type: "",
				profile: '',
			},
			selectedType: "",
			previewProfile: "",
			error: "",
		};
	},
	methods: {
		setSelected(value) {
			this.selectedType = value;
			if(value == "Admin") {
				this.userInfo.type = 0
			} else if(value == "User") {
				this.userInfo.type = 1
			}
		},
		imageChanged(e) {
			/** Preview Image */
			this.previewProfile = URL.createObjectURL(e.target.files[0]);
			this.$store.state.confirmProfile = URL.createObjectURL(e.target.files[0]);

			/** Even.Target.Result */
			let fileReader = new FileReader();
			fileReader.readAsDataURL(e.target.files[0]);
			fileReader.onload = (e) => {
				this.userInfo.profile = e.target.result;
			}
		},
        createUserConfirm() {
            this.$store
                .dispatch("createUserConfirm", this.userInfo)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "create-user-confirm" });
                })
                .catch(err => {
                    this.error = err.response.data.errors;
					console.log(this.error);
                });
        },
    }
};
