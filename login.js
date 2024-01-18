console.clear();
const { createApp, ref } = Vue;

// const url = "https://ec-course-api.hexschool.io/v2";

const app = {
    data() {
        return {
            userData: {
                username: "",
                password: ""
            },
            api: {
                url: "https://ec-course-api.hexschool.io/v2",
                path: "sky030b"
            },
        }
    },
    methods: {
        login() {
            axios.post(`${this.api.url}/admin/signin`, this.userData)
                .then(res => {
                    const { token, expired } = res.data;
                    document.cookie = `token=${token}; expires=${new Date(expired)};`;
                    alert("登入成功。")
                    location.href = "./products.html";
                })
                .catch(err => {
                    alert(err.data.error.message);
                })
        },
        // checkLogin() {
        //     axios.post(`${this.api.url}/api/user/check`)
        //         .then(res => {
        //             console.log(res);
        //             alert("登入成功。")
        //             location.href = "./products.html";
        //         })
        //         .catch(err => {
        //             console.log(err);
        //             alert("驗證失敗，請重新登入。");
        //             location.href = "./login.html";
        //         })
        // }
    },
    mounted() {

    }
}

createApp(app).mount("#app");