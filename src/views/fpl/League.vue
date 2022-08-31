<template>
<div class="container">
    <div v-if="league">
        <h1>League: {{ league.league.name }}</h1>
        <table class="table table-sm">
            <thead>
                <tr>
                    <th scope="col">Rank</th>
                    <th scope="col">Player</th>
                    <th scope="col">Team</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="player in league.standings.results" :key="player.rank">
                    <th scope="row">{{ player.rank }}</th>
                    <td>
                        <router-link :to="{ name: 'Team', params: { id: player.entry } }">
                            {{ player.player_name }}
                        </router-link>
                    </td>
                    <td>{{ player.entry_name }}</td>
                    <td>{{ player.total }}</td>
                </tr>
            </tbody>
        </table>
    </div>   
</div>
</template>

<script>

export default {
    props: ['id'],
    data() {
        return {
            league: null
        }
    },
    mounted() {
        fetch('https://fplcorsproxy.herokuapp.com/https://fantasy.premierleague.com/api/leagues-classic/' + this.id + '/standings/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    "X-Requested-With": "XMLHttpRequest"
                }
        })
            .then(response => response.json())
            .then(data => (this.league = data))
            .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>