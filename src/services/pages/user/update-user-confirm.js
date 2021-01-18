import { mapGetters } from "vuex";

export default {
    mounted() {
        this.$store.state.userList['authID'] = this.$store.state.authID;
        console.log(this.$store.state.userList);
    },
	computed: {
        ...mapGetters(["userList", "confirmProfile"]),
    },
    methods: {
        updatePost() {
            this.$store
                .dispatch("updateUser", this.$store.state.userList)
                .then(() => {
                    this.error = "";
                    this.$router.push({ name: "user-list" });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
