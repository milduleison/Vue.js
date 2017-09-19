Vue.component("single-album", {
    props: ["album", "artist", "image", "date", "genre", "isVisible"],
    template: `
        <tr>
            <td v-if="isVisible">
                <img v-bind:src="'img/' + image" alt="Album Cover">
            </td>
            <td><strong>{{ artist}} - {{ album }}</strong></td>
            <td>{{ date }}</td>
            <td>{{ genre }}</td>
        </tr>
    `
});