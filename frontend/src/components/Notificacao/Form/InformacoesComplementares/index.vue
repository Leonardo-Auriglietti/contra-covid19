<template>
  <div class="px-2">
    <h4 class="primary--text title">7. USOU MEDICAMENTO</h4>
    <v-container fluid class="pa-0">
      <v-row>
        <v-col cols="4">
          <v-checkbox
            :input-value="informacoesComplementares.tamiflu"
            label="Oseltamivir (Tamiflu)"
            hide-details
            @change="updateTamiflu"
            :disabled="disabled"
          />
        </v-col>
        <v-col cols="4">
          <v-checkbox
            :input-value="informacoesComplementares.hidroxicloroquina"
            label="Hidroxicloroquina"
            hide-details
            @change="updateHidroxicloroquina"
            :disabled="disabled"
          />
        </v-col>
        <v-col cols="4">
          <v-checkbox
            :input-value="informacoesComplementares.cloroquina"
            label="Cloroquina"
            hide-details
            @change="updateCloroquina"
            :disabled="disabled"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            :value="informacoesComplementares.nomeMedicamento"
            class="pl-8"
            label="Especifique"
            @input="updateNomeMedicamento"
            :disabled="disabled"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import InformacoesComplementares from '@/entities/InformacoesComplementares';

export default {
  props: {
    informacoesComplementares: {
      type: InformacoesComplementares,
      required: true,
    },
    disabled: {
      type: Boolean,
      defaultValue: false,
    },
  },
  methods: {
    updateTamiflu(tamiflu) {
      this.$emit('update:tamiflu', tamiflu);
    },
    updateHidroxicloroquina(hidroxicloroquina) {
      this.$emit('update:hidroxicloroquina', hidroxicloroquina);
    },
    updateCloroquina(cloroquina) {
      this.$emit('update:cloroquina', cloroquina);
    },
    updateNomeMedicamento(nomeMedicamento) {
      this.$emit('update:nomeMedicamento', nomeMedicamento);
    },
  },
};
</script>
