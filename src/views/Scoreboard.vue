<template>
    <v-container>
        <v-card>
            <v-row class="d-flex">
                <v-col class="d-flex justify-center"><h1>Player 1 Score: {{game["playerOne"]}}</h1></v-col>
                <v-col class="d-flex justify-center"><h1>Player 2 Score: {{game["playerTwo"]}}</h1></v-col>

            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                <h1>Combined Score: {{game["playerOne"] + game["playerTwo"]}}</h1>
                <h1>Combined Score: {{combinedScore}}</h1>
                </v-col>
            </v-row>
            <v-row>
                <v-col class="d-flex justify-center">
                    <h1>Player One Status: {{status["playerOne"]}}</h1>
                </v-col>
                <v-col>
                    <h1>Player Two Status: {{status["playerTwo"]}}</h1>
                </v-col>
            </v-row>
        </v-card>

        <v-row>
            <v-col>
                <h1>Player 1</h1>
                <Player 
                    v-on:updateStatus2="updateStatus" 
                    num="playerOne"
                    v-on:updateGame="updateGame"/>

            </v-col>
            <v-col>
                <h1>Player 2</h1>
                <Player 
                    @updateStatus2="updateStatus"
                    num="playerTwo"
                    v-on:updateGame="updateGame"/>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import Player from '../components/Player'
export default {
    components: {
        Player,
    },
    data() {
        return {
            game: {
                playerOne: 0,
                playerTwo: 0,
                playerOneStatus:"",
                playerOneStatus:"",
            },
            status: {
                playerOne: "",
                playerTwo: ""
            }
        }
    },
    computed: {
        combinedScore() {
            return this.game.playerOne + this.game.playerTwo
        }
    },
    methods: {
        updateGame(player_num){
            var score = this.game[player_num]
            this.game[player_num] = score + 1
        },
        updateStatus(player_num, status){
            this.status[player_num] = status
        },
    },

}
</script>