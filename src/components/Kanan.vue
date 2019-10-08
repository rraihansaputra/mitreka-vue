<template>
    <v-card>
    <v-tabs>
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="i in tabs"
        :key="i"
        :href="`#2tab-${i}`"
      >
      Tab {{i}}
      </v-tab>

      <v-tab-item value="2tab-1">
        <v-card flat tile>
          <v-container>
            <v-row>
              <v-col>
                <v-tabs
                  background-color="deep-purple accent-4"
                  class="elevation-2"
                >
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab href="#nestedtab-1">Main Tab</v-tab>
                  <v-tab href="#nestedtab-2">Secondary Tab</v-tab>
                  <v-tab-item value="nestedtab-1">
                    <v-card flat tile>
                      Main Tab Content
                    </v-card>
                  </v-tab-item>
                  <v-tab-item value="nestedtab-2">
                    <v-card flat tile>
                      Secondary Tab Content
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-tab-item>

      <v-tab-item value="2tab-2">
        <v-card flat tile>
          <v-card-text>testtext</v-card-text>
        </v-card>

      </v-tab-item>

    </v-tabs>
  </v-card>
</template>
<script>
export default {
    data(){
        return {
            tabs:3,
        }
    }
}
</script>