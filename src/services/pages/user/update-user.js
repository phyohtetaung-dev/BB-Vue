export default {
	data() {
		return {
            id: this.$route.params.id,
			types: ["Admin", "User"],
			userInfo: {
                id: "",
				name: "",
				email: "",
                type: null,
                profile: "",
				profile_path: "",
            },
            selectedType: '',
            previewProfile: '',
			error: "",
		};
	},
	mounted() {
        this.$store.state.confirmProfile = '';
		const updateUser = this.$store.state.userList.filter((user) => {
			return (
				user.id == this.id
			);
        });
        console.log(updateUser);
        this.userInfo.id = this.id,
        this.userInfo.name = updateUser[0].name,
        this.userInfo.email = updateUser[0].email,
        
        this.userInfo.profile_path = updateUser[0].profile_path,
        this.selectedType = updateUser[0].type == 0 ? 'Admin' : 'User'
	},
	methods: {
        setSelected(value) {
            this.selectedType = value;
			if(value == "Admin") {
				this.userInfo.type = 0
			} else if(value == "User") {
				this.userInfo.type = 1
            }
            console.log(this.userInfo.type);
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
        updateUserConfirm() {
            console.log(this.userInfo.type);
            this.$store
                .dispatch("updateUserConfirm", this.userInfo)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "update-user-confirm" });
                })
                .catch(err => {
                    this.error = err.response.data.errors;
                    console.log(err);
                });
        },
    }
};
