<template>
<v-container class="pa-2" fluid>


  <v-row><v-col>
  <v-card>
    <v-card flat tile>
      <v-container>
        <v-row>
          <v-col>
            <h1>Test title</h1>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn class="ma-2">Button1</v-btn>
            <v-btn class="ma-2">Button2</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
    <v-card>
      <v-card-text>wazzap</v-card-text>
    </v-card>
  </v-card>
  </v-col></v-row>


  <v-row><v-col>
  <v-card>
    <v-tabs>
      <v-tabs-slider></v-tabs-slider>
      <v-tab
        v-for="i in tabs"
        :key="i"
        :href="`#tab-${i}`"
      >
      Tab {{i}}
      </v-tab>

      <v-tab-item
        v-for="i in tabs"
        :key="i"
        :value="'tab-' + i"
      >
        <v-card
          flat
          tile
        >
          <v-card-text>{{ text }}</v-card-text>
        </v-card>
      </v-tab-item>

    </v-tabs>
  </v-card>
  </v-col>

  <v-col>
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
                <v-tabs>
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
          <v-card-text>{{ text }}</v-card-text>
        </v-card>

      </v-tab-item>

    </v-tabs>
  </v-card>
  </v-col></v-row>


</v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      text: 'testtext',
      tabs: 3,
    }
  }
}
</script>
