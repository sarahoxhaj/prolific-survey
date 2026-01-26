<template>
    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center min-h-screen pt-20">
        <p class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white text-center">
            First, please enter your Prolific ID:
        </p>
        <input v-model="prolificID" type="text" id="prolificID"
            class="mt-3 dark:text-black bg-gray-50 dark:bg-slate-200 border border-gray-300 dark:placeholder-gray-600 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 h-9 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required />
        <br>
        <button @click.prevent="gotoSurvey" type="submit"
            class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Next
        </button>
    </div>


</template>

<script>
export default {
    name: 'ProlificIDView',
    data() {
        return {
            prolificID: '',
        };
    },
    methods: {
        async gotoSurvey() {

            if (!this.prolificID.trim()) {
                alert("Please enter your Prolific ID.");
                return;
            }
            const userID = Math.floor(10000 + Math.random() * 90000).toString();
            const prolificID = this.prolificID;

            sessionStorage.setItem("userID", userID);
            sessionStorage.setItem("prolificID", prolificID);

            console.log("Data successfully saved in session");
            this.$router.push('/ItemValidation');
        }

    }
}
</script>
