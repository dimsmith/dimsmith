<template>
    <div class="row">
        <div class="left">
            <section class="profile">
                <div class="avatar">
                    <img class="avatar-rounded" :src="portfolio.profile.avatar">
                </div>
                <p class="desc"><span class="yellow-text">{{portfolio.profile.name}}</span>, saat ini bekerja di <span
                        class="yellow-text">{{portfolio.profile.company}}</span> dan berlokasi di
                    <span class="yellow-text">{{portfolio.profile.location}}.</span>
                </p>
            </section>
        </div>

        <div class="right">
            <section class="skill">
                <p class="desc">Memiliki kemampuan <i>programming</i>, diantaranya: <span class="yellow-text medium-text">{{portfolio.skills.join(", ")}}.</span></p>
            </section>
        </div>
        <div class="left">
            <section class="certificate">
                <p class="desc">dan telah mendapatkan beberapa sertfikat diantaranya:</p>
                <ul>
                    <li v-for="certificate in portfolio.certificates">{{certificate.name}} di tahun {{certificate.year}} yang diselenggarakan oleh {{certificate.organization}}.</li>
                </ul>
            </section>
        </div>
        <div class="right">
            <section class="projects">
                <p class="desc">Memiliki pengalaman lebih dari 3 (tiga) tahun mengerjakan proyek pembuatan/pengembangan aplikasi diantaranya:</p>
                <ul>
                    <li v-for="project in portfolio.projects">
                        {{project.name}} ({{project.year}}), sebagai {{project.position}} di {{project.company}}
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Portfolio",
        data() {
            return {
                portfolio: {
                    profile: {},
                    projects: [],
                    certificates: [],
                    skills: []
                }
            }
        },
        created() {
            this.fakeFetch()
                .then(res => this.portfolio = res)
                .catch(console.error)
        },
        methods: {
            async fakeFetch() {
                return await fetch("/static/portfolio.json").then(res => {
                    if (res.status === 404) {
                        throw Error("Unable to load " + res.url)
                    }
                    return res.json()

                })
            }
        }
    }
</script>
