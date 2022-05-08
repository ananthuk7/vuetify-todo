<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app :mobile-breakpoint="764">
        <v-list-item class="pa-0">
            <v-img class="pa-4" :height="$route.path == '/'?240 : 172" src="https://picsum.photos/id/11/500/300" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)">
                <v-avatar size="60">
                    <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
                </v-avatar>
                <div class="white--text text-subtitle-1 font-weight-bold">
                    Ananthu Krishnan
                </div>
                <div class="white--text text-subtitle-2">Developer</div>
            </v-img>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
            <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark src="https://picsum.photos/1920/1080?random" prominent :height="$route.path == '/'?240 : 172">
        <template v-slot:img="{ props }">
            <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.9), rgba(128,208,199,.9)"></v-img>
        </template>
        <v-container fluid>
            <v-row>
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
                <v-spacer></v-spacer>
                <search />
            </v-row>
            <v-row>
                <v-toolbar-title class="font-weight-bold">{{ $store.state.appTitle }}</v-toolbar-title>
            </v-row>
            <v-row>
                <live-date></live-date>
            </v-row>
            <v-row>
                <task-field v-if="$route.path == '/'" />
            </v-row>
        </v-container>
    </v-app-bar>

    <v-main>
        <snack-bars></snack-bars>
        <router-view></router-view>
    </v-main>
</v-app>
</template>

<script>
export default {
    components: {
        'search': require("@/components/tools/Search.vue").default,
        "live-date": require("@/components/tools/LiveDate.vue").default,
        "task-field": require("@/components/tasks/TaskField.vue").default,
        "snack-bars": require("@/components/shared/SnackBars.vue").default,
    },
    mounted() {
        this.$store.dispatch("getTasks");
    },
    data() {
        return {
            drawer: null,
            items: [{
                    title: "Todos",
                    icon: "mdi-view-dashboard",
                    to: "/",
                },
                {
                    title: "About",
                    icon: "mdi-help-box",
                    to: "/about",
                },
            ],
        };
    },
};
</script>
