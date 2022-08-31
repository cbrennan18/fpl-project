<template>
<div class="container">
    <h1>Team Page</h1>
    <input id="idInput" @keyup.enter="getFplData" v-model="idInput" type="text">
    <div class="py-5">
        <div class="table-responsive align-center">
            <table class="table table-hover table-sm">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">League</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="league in leagues" :key="league.id">
                        <th scope="row">{{ league.id }}</th>
                        <td>
                            <router-link :to="{ name: 'League', params: { id: league.id } }">
                                {{ league.name }}
                            </router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <h2 v:if="team" class="text-center">{{ team.name }}</h2>
    <template v-if="userTeam">
        <svg class="mx-auto d-block" viewBox="0 0 112.44791 174.72709" style="max-height: 700px" fill="none">
            <svg class="field">
                <g class="g_field">
                    <rect class="field-common" width="104.4753" height="136.70862" x="4.0935702" y="3.8053379" />
                    <!-- <path class="field-common" d="M 9.7876973,3.8053379 A 5.6941271,5.6941271 0 0 1 4.0935704,9.499465 l -2e-7,-5.6941271 z" />
                    <path class="field-common" id="right_top_corner" d="m 9.499465,-108.56887 a 5.6941271,5.6941271 0 0 1 -5.6941269,5.69413 l -2e-7,-5.69413 z" transform="rotate(90)" />
                    <path class="field-common" id="right_bottom_corner" d="m -102.87474,-140.51396 a 5.6941271,5.6941271 0 0 1 -5.69413,5.69413 l 0,-5.69413 z" transform="scale(-1)" />
                    <path class="field-common" id="left_bottom_corner" d="m -134.81983,4.0935702 a 5.6941271,5.6941271 0 0 1 -5.69413,5.6941271 l 0,-5.6941271 z" transform="rotate(-90)" /> -->
                    <rect class="field-common" id="top_penalty_box" width="46.726002" height="21.884615" x="32.992699" y="3.852963" />
                    <rect class="field-common" id="top_inner_box" width="24.50474" height="11.328758" x="44.101284" y="3.828212" />
                    <path class="field-common" id="top_arch" d="m 65.686854,25.720037 a 9.4620543,6.1092615 0 0 1 -4.731027,5.290776 9.4620543,6.1092615 0 0 1 -9.462054,0 9.4620543,6.1092615 0 0 1 -4.731027,-5.290776 l 9.462054,0 z" />
                    <path class="field-common" id="bottom_arch" d="m -47.240994,-118.62238 a 9.4620543,6.1092615 0 0 1 -4.731028,5.29077 9.4620543,6.1092615 0 0 1 -9.462054,0 9.4620543,6.1092615 0 0 1 -4.731027,-5.29077 l 9.462054,0 z" transform="scale(-1)" />
                    <rect class="field-common" id="bottom_penalty_box" width="46.726002" height="21.884615" x="-79.962532" y="-140.46913" transform="scale(-1)" />
                    <rect class="field-common" id="bottom_inner_box" width="24.50474" height="11.328759" x="-68.851799" y="-140.42613" transform="scale(-1)" />
                    <circle class="field-common" id="kick_off" cx="55.893227" cy="71.70208" r="14.196868" />
                    <path class="field-common field-last-path" d="M 4.1010416,71.569791 H 108.51143" id="center_line" inkscape:connector-curvature="0"/>
                    <rect class="field-common" id="bench_box" width="104.4753" height="30" x="4.0935702" y="140.51396" />
                </g>
            </svg>
            
            <template v-for="position in userTeam" :key="position">
                <svg v-for="player in position" :key="player.id" id="player_group" :x="player.x" :y="player.y">
                    <svg style="overflow: visible;">
                        <g class="g_jersey" style="transform:translate(0,0)">
                            <clipPath id="jersey-image">
                                <rect y="0" x="0" height="20" width="20" class="jersey-name-bg" />
                            </clipPath>
                            <image width="20" height="20" :xlink:href="player.photo" clip-path="url(#myCircle)"></image>
                            <g  transform="translate(0,0)">
                                <g>
                                    <rect y="0" x="0" height="20" width="20" class="jersey-points-bg" />
                                    <text y="10" x="10" class="jersey-regular-text" xml:space="preserve">
                                        <tspan
                                            class="jersey-xp-text"
                                            y="10" x="10"  ><tspan style="font-size:5.5px" >{{ player.points }}</tspan>
                                        </tspan>
                                    </text>
                                    <rect y="16" x="0" height="4" width="20" class="jersey-name-bg" />
                                    <text  y="20" x="10" class="jersey-regular-text" xml:space="preserve">
                                        <tspan
                                            class="jersey-player-name"
                                            y="19" x="10" style="font-size: 2.2pt;">{{ player.name }}</tspan>
                                    </text>
                                </g>
                            </g>
                        </g>
                    </svg>
                </svg>
            </template>
        </svg>
    </template>
    <!-- <div class="py-5">
        <h2 v:if="team" class="text-center">{{ team.name }}</h2>
        <template v-if="userTeam">
            <template v-for="position in userTeam" :key="position">
                <div class="row justify-content-center p-0">
                    <template v-for="player in position" :key="player.id">
                        <div class="col col-2 align-self-center p-0 mx-0">
                            <div class='card text-center border-0 m-0 p-0'>
                                <div class='card-body m-1 p-0'>
                                    <img class='img-fpl-player' :src="player.photo" alt="Player Image"/>
                                    <p v-if="player.captain === false" class='card-title fpl-player bg-fpl-green-name text-nowrap'> {{ player.name }} </p>
                                    <p v-else class='card-title fpl-player bg-fpl-green-name text-nowrap'> {{ player.name }} (C)</p>
                                    <p class='card-text fpl-player bg-fpl-green bg-fpl-player-score'> {{ player.points }} </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </template>
        </template>
    </div> -->
</div>   
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            idInput: '',
            team: [],
            leagues: [],
            teamDetails: {
                currentWeek: [],
                players: []
            },
            userTeam: [],
            gk: []
        }
    },
    mounted() {
        if(!this.id) {
            this.getFplData()
        }
        else {
            this.idInput = this.id
            this.getFplData()
        }
    },
    methods: {
        getFplData() {
            fetch('https://fplcorsproxy.herokuapp.com/https://fantasy.premierleague.com/api/entry/' + this.idInput + '/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(response => response.json())
            .then(data => {
                this.team = data
                this.leagues = data.leagues.classic
                this.teamDetails.currentWeek = this.getCurrentWeek()
                this.teamDetails.players = this.getPlayers()
                })
            .catch(err => console.log(err.message))

        },

        getCurrentWeek() {
            fetch('https://fplcorsproxy.herokuapp.com/https://fantasy.premierleague.com/api/entry/' + this.team.id + '/event/' + this.team.current_event + '/picks/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(response => response.json())
            .then(data => {
                this.teamDetails.currentWeek = data
            })
            .catch(err => console.log(err.message))
        },

        getPlayers() {
            fetch('https://fplcorsproxy.herokuapp.com/https://fantasy.premierleague.com/api/bootstrap-static/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
            })
            .then(response => response.json())
            .then(data => {
                this.teamDetails.players = data.elements
            })
            .catch(err => console.log(err.message))
        },
        showTeam()  {
            let squad = {}
            let team = this.teamDetails.currentWeek
            let bootstrap = this.teamDetails.players
            let position_count = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0}

            for (let i = 0; i < team.picks.length; i++) {
                for (let j = 0; j < bootstrap.length; j++) {
                    if (bootstrap[j].id === team.picks[i].element) {
                        let position = 0
                        if (i < 11) {
                            position = bootstrap[j].element_type
                        }
                        else {
                            position = 5
                        }
                        position_count[position] += 1    
                    }
                }
            }

            let position_number = { 1: 1, 2: 1, 3: 1, 4: 1, 5: 1 }
            for (let i = 0; i < team.picks.length; i++) {
                for (let j = 0; j < bootstrap.length; j++) {
                    if (bootstrap[j].id === team.picks[i].element) {
                        let position = 0
                        if (i < 11) {
                            position = bootstrap[j].element_type
                        }
                        else {
                            position = 5
                        }
                        let count = position_count[position]
                        squad[i] = 
                        {
                            "id": bootstrap[j].id,
                            "name": bootstrap[j].web_name,
                            "event_points": bootstrap[j].event_points,
                            "x": 127 / (count + 1) * position_number[position] - 17,
                            "y": (position - 1) * 35 + 5,
                            "points": parseInt(team.picks[i].multiplier) * parseInt(bootstrap[j].event_points),
                            "captain": team.picks[i].is_captain,
                            "photo": "https://resources.premierleague.com/premierleague/photos/players/110x140/p" + bootstrap[j].code + ".png"
                        }
                        position_number[position] += 1
                        if (i < 11) {
                            squad[i].position = bootstrap[j].element_type
                        }
                        else {
                            squad[i].position = 5
                        }
                    }
                }
                if (i < 11) { 
                    
                }
            }
            team = {
                gk: [],
                def: [],
                mid: [],
                fwd: [],
                bench: []
            }
            for (let i = 0; i < Object.keys(squad).length; i++) {
                let pos = squad[i].position
                switch(pos) {
                    case 1:
                        team.gk.push(squad[i])
                        break
                    case 2:
                        team.def.push(squad[i])
                        break
                    case 3:
                        team.mid.push(squad[i])
                        break
                    case 4:
                        team.fwd.push(squad[i])
                        break
                    case 5:
                        team.bench.push(squad[i])
                        break
                }
            }
            squad = team
            return squad
        }
    },
    watch: {
        teamDetails: {
            handler(val, oldVal) {
                if(typeof this.teamDetails.currentWeek !== "undefined" && typeof this.teamDetails.players !== "undefined") {
                    this.userTeam = this.showTeam()
                }
            },
            deep: true
        }
    }
}
</script>

<style>
img {
    width:100%;
    max-width:20px;
}
/*
*
* ==========================================
FPL EXTRA STYLES SECTION
* ==========================================
*
*/
.fpl-purple {
    color: #38003c !important;
}
.fpl-green {
    color: #00ff85 !important;
}
.fpl-red {
    color: #e90052 !important;
}
.fpl-blue {
    color: #04f5ff !important;
}

.bg-fpl-purple {
    background-color: #38003c !important;
    border-color: transparent !important;
}

.bg-fpl-light {
    background-color: #f0f9ff;
    border-color: transparent !important;
}

.bg-fpl-green {
    color: black !important;
    background-color: #00ff85 !important;
    border-color: transparent !important;
}

.img-fpl {
    -webkit-filter: invert(1);
    filter: invert(1);
}

.bg-fpl-green-name {
    color: white;
    border-radius: 5px 5px 0 0;
    background-color: rgba(0, 111, 55, 0.9) !important;
    border-color: transparent !important;
}

.bg-fpl-player-score {
    border-radius: 0 0 5px 5px;
}

.btn-fpl-green {
    color: black !important;
    background-color: #00ff85 !important;
    border-color: transparent !important;
}

.fpl-bg-image {
    background-color: #38003c;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%2300ff85'/%3E%3Cstop offset='1' stop-color='%2338003c'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%231c8061'/%3E%3Cstop offset='1' stop-color='%2338003c'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-attachment: fixed;
    background-size: cover;
    /* background by SVGBackgrounds.com */
}
.fpl-centered {
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.text-fpl {
    font-size: 1rem !important;
}
.img-fpl-player {
    width: 4vw;
    border-radius: 50%;
    display: block;
    margin: 0 auto;
}

.fpl-player {
    min-width: 10vw;
    margin: 0 !important;
    font-size: small;
    font-weight: normal;
}

@media only screen and (max-width: 480px) {
    .text-fpl{
        font-size: 0.9rem !important;
    }

    .img-fpl-player {
        width: 8vw;
    }
    .fpl-player {
        min-width: 15vw;
        margin: 0 !important;
        padding: 2px !important;
        font-size: 10px;
        font-weight: normal;
    }
}

@media only screen and (max-width: 380px) {
    .text-fpl{
        font-size: 0.7rem !important;
    }
}

@media only screen and (max-width: 336px) {
    .text-fpl{
        font-size: 0.7rem !important;
    }
    .img-fpl-player {
        width: 7vw;
    }
}

.scrolling-wrapper{
    overflow-x: auto;
}

.card-block-fpl{
    height: 250px;
    background-color: #fff;
    border: none;
    background-position: center;
    background-size: cover;
    transition: all 0.2s ease-in-out !important;
    border-radius: 24px;
}

.card-1{
    background-color: #38003c !important;
    border: none !important;
}

.card-2{
    background-color: #00ff85 !important;
    border: none !important;
}

.card-3{
    background-color: #e90052 !important;
    border: none !important;
}

.card-4{
    background-color: #04f5ff !important;
    border: none !important;
}

.card-5{
    background-color: #ffffff !important;
    border: none !important;
}
.fpl-click {
    cursor:pointer;
}

svg.field {
    /* width: 100%; */
    width: 425px;
    height: 547px;
}

svg.field>g>* {
    stroke: #f0f0f0 !important;
    stroke-width: 0.25% !important;
}

.g_jersey {
    stroke: black !important;
}

.field-common {
    opacity: 1;
    fill: none;
    fill-opacity: 1;
    stroke: #ababab;
    stroke-width: 1.85208333;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
}

.field-last-path {
    stroke-linecap: butt;
    stroke-linejoin: miter;
}

.jersey-regular {
    fill: none;
    stroke: #000000;
    stroke-width: 0.26458332px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
    stroke-opacity: 1;
}

.jersey-regular-text {
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 10.58333302px;
    line-height: 1.25;
    font-family: sans-serif;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-feature-settings: normal;
    text-align: center;
    letter-spacing: 0px;
    word-spacing: 0px;
    writing-mode: lr-tb;
    text-anchor: middle;
    fill: #000000;
    fill-opacity: 1;
    stroke: none;
    stroke-width: 0.26458332;
}

.jersey-xp-text {
    fill: white;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 10.58333302px;
    font-family: sans-serif;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-feature-settings: normal;
    text-align: center;
    writing-mode: lr-tb;
    text-anchor: middle;
    stroke-width: 0.26458332;
}

.jersey-name-bg {
    opacity: 1;
    stroke: #ababab;
    stroke-width: 0;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
    fill: #00ff85 !important;
    fill-opacity: 1 !important;
}

.jersey-points-bg {
    opacity: 0.5;
    stroke: #ababab;
    stroke-width: 0;
    stroke-miterlimit: 4;
    stroke-dasharray: none;
    stroke-opacity: 1;
    fill: #38003c !important;
    fill-opacity: 1 !important;
}

.jersey-player-name {
    fill: black;
    font-style: normal;
    font-variant: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 2.46944451px;
    font-family: sans-serif;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-feature-settings: normal;
    text-align: center;
    writing-mode: lr-tb;
    text-anchor: middle;
    stroke-width: 0.26458332;
}

.jersey-player-name>tspan {
    font-size: 2.8px !important;
}

</style>