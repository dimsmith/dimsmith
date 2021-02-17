<template>
    <header>
        <a class="themeToggle" href="#" @click="toggleTheme">{{ helpText }}</a>
    </header>
</template>

<script>
    export default {
        name: "CFooter",
        data() {
            return {
                theme: "",
                helpText: "",
            }
        },
        created() {
            let localTheme = localStorage.getItem('theme');
            this.theme = localTheme === null ? "light" : localTheme
            document.documentElement.setAttribute('data-theme', this.theme);
            // this.fakeFetch().then(res => {
            //   this.portfolio = res
            // }).catch(err => console.log("ERROR", err))
        },
        methods: {
            toggleTheme() {
                this.theme = this.theme === "dark" ? "light" : "dark"
                document.documentElement.setAttribute("data-theme", this.theme)
                localStorage.setItem("theme", this.theme)
            },
        },
        watch: {
            theme: function (newVal) {
                this.helpText = (newVal === "dark") ? "Switch to light mode 🌝" : "Switch to dark mode 🌚"
            }
        }
    }
</script>
