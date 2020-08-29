<template>
  <div>
    <b-row>
      <b-col class="my-3">
        <h1 class="display-2 text-center text-white">Capture The Flag</h1>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" class="d-flex flex-column justify-content-center align-items-center mb-4">
        <b-button v-b-toggle.collapse-rules>Zasady</b-button>
        <b-collapse id="collapse-rules">
          <b-list-group class="m-1">
            <b-list-group-item v-for="(rule, id) in rules" :key="id" class="py-1 small secondary-font">{{ rule }}
            </b-list-group-item>
          </b-list-group>
        </b-collapse>
      </b-col>
      <b-col v-for="(puzzle, id) in puzzles" :key="id" cols="12" md="4" lg="3" class="mb-3">
        <b-link :href="puzzle.link" class="d-flex justify-content-center align-items-center border border-light">
          <h4 class="text-white my-3">{{ puzzle.name }}</h4>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      puzzles: [
        {
          name: 'Incepcja',
          link: '/ctf',
        },
        {
          name: 'JS',
          link: '/ctf/flag22.pdf',
        },
        {
          name: 'Sama Logika',
          link: '/ctf/flag4.pdf',
        },
        {
          name: 'Zabawa',
          link: '/ctf/flag5.pdf',
        },
        {
          name: 'Co ja paczę',
          link: '/ctf/midhgardhsormr',
        },
        {
          name: 'Peak',
          link: '/ctf/flag7.pdf',
        },
        {
          name: 'Flaga 8',
          link: '/ctf/pattern',
        },
        {
          name: 'Liczby',
          link: '/ctf/longest-number',
        },
      ],
      rules: [
        'Poniżej znajduje się lista wszystkich zadań tego konkursu',
        'Każda jest w formacie "flag_{wartość}"',
        'Wartość flagi jest zgodna z następującą ekspresją regularną: [A-Za-z0-9]',
        'Wielkość liter ma znaczenie!',
        'Warunkiem wygranej jest złożenie wszystkich flag Organizatorom',
        'Wygrywa pierwsza drużyna, która poprawnie poda wszystkie flagi',
      ],
    };
  },
};
</script>
