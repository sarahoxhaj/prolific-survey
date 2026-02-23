<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Rating the relevance of
            statements to assess perceived visual complexity.</p>

        <div class="text-left px-24 mt-7 dark:text-white">
            <div>
                <p> You will see a list of statements about data visualizations. Rate how relevant each one is for
                    describing the <b>visual complexity</b> of a static chart or graph.
                </p><br>
                <ul class="list-disc ml-5">
                    <li>Use the images below as examples, but <b>think about all types</b> of visualizations.</li>
                    <li>For each statement, ask: <b>“How relevant is this for describing visual complexity?”</b></li>
                    <li><b>Rate each statement individually</b> on the scale from Not Relevant to Very
                        Relevant.</li>
                    <li><b>Focus only on visual appearance</b>, not the data's meaning.</li>
                </ul>
                <!-- <p class="mt-4">
                    For each statement, ask yourself:
                    <span class="font-medium">“How relevant is this for describing the visual complexity of a static
                        data visualization?”</span>
                </p> -->

                <!-- <div class="flex justify-end -mt-5">
                    <button @click.prevent="showOption1 = !showOption1" type="submit"
                        class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center">
                        change images
                    </button>
                </div> -->
            </div>

            <!-- option 1 -->
            <div>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/bar.png'))" src="@/assets/bar.png" alt="Image 1"
                        class="w-[15rem] h-[10rem] mt-2">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 2"
                        class="w-[16rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/line.png'))" src="@/assets/line.png" alt="Image 3"
                        class="w-[17rem] h-[9rem] mt-4">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10">
                    <img @click="openImage(require('@/assets/spider.png'))" src="@/assets/spider.png" alt="Image 4"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.1.png'))" src="@/assets/1.1.png" alt="Image 5"
                        class="w-[16rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/scatterPlot.png'))" src="@/assets/scatterPlot.png"
                        alt="Image 6" class="w-[18rem] h-[10rem] mt-3">
                </div>
            </div>

            <!-- option 2 -->
            <!-- <div v-else>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.1.png'))" src="@/assets/2.1.png" alt="Image 1"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/map.png'))" src="@/assets/map.png" alt="Image 2"
                        class="w-[14rem] h-[11rem]">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10 ml-8">
                    <img @click="openImage(require('@/assets/2.14.png'))" src="@/assets/2.14.png" alt="Image 4"
                        class="w-[13rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.3.png'))" src="@/assets/1.3.png" alt="Image 6"
                        class="w-[13rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/1.2.png'))" src="@/assets/1.2.png" alt="Image 5"
                        class="w-[17rem] h-[12rem]">
                </div>
            </div> -->

            <!-- <p class="mt-5">Now, please rate the statements below using the scale from <span class="font-medium">Not
                    Relevant</span> to <span class="font-medium">Very Relevant</span>.</p>
            <p class="mt-3"><span class="font-medium">Remember:</span> focus only on visual appearance, think broadly
                about many types of visualizations, and rate each statement individually.</p> -->

            <div
                class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default mt-10">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th class="px-2 py-1 font-medium text-center font-medium"></th>


                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">not at all relevant</span>
                                    <span class="text-[15px]">1</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">2</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">3</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">&nbsp;</span>
                                    <span class="text-[15px]">4</span>
                                </div>
                            </th>

                            <th class="px-2 py-1 font-medium text-center">
                                <div class="flex flex-col items-center">
                                    <span class="h-5">very relevant</span>
                                    <span class="text-[15px]">5</span>
                                </div>
                            </th>
                        </tr>

                    </thead>

                    <tbody>
                        <tr v-for="question in paginatedQuestions" :key="question.id"
                            class="bg-neutral-primary border-b border-default">
                            <th scope="row"
                                class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right align-middle">
                                <span v-html="question.text"></span>
                            </th>

                            <td v-for="value in 5" :key="value" class="px-6 py-4 align-middle text-center">
                                <input v-model="ratings[question.id]" type="radio" :name="question.id" :value="value"
                                    required class="w-6 h-6 mx-auto block scale-110">
                            </td>
                        </tr>
                    </tbody>



                </table>

                <div class="flex justify-center mt-2 space-x-2 mb-2">
                    <button @click="currentPage--" :disabled="currentPage === 1"
                        class="dark:border-white px-3 py-1 border rounded disabled:opacity-50 border-sky-800 font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800">Prev</button>

                    <button v-for="page in totalPages" :key="page" @click="currentPage = page" :class="['dark:border-white px-3 py-1 border border-sky-800 rounded font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800', currentPage === page
                        ? 'bg-sky-800 text-white'
                        : 'text-gray-700 dark:text-white']">
                        {{ page }} </button>

                    <button @click="currentPage++" :disabled="currentPage === totalPages"
                        class="px-3 py-1 border rounded disabled:opacity-50 border-sky-800 dark:border-white font-semibold transition-colors duration-200 text-gray-700 hover:text-white hover:bg-sky-800 dark:text-white dark:hover:text-white dark:hover:bg-sky-800">Next</button>
                </div>
            </div>

            <p class="mt-12">If you have any comments or suggestions related to this survey, please write them here.</p>
            <textarea v-model="additionalComment" id="additionalComment" rows="4"
                class="dark:text-black mt-4 rounded-lg px-0 w-full border border-gray-300 focus:ring-0 focus:outline-none dark:placeholder-gray-400 bg-gray-50"
                required></textarea>

            <div class="flex justify-end mt-10">
                <!-- <button @click.prevent="saveDataToFirebase" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Save
                </button> -->
                <button @click.prevent="saveDataToFirebase" :disabled="isSubmitting" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Save
                </button>

            </div>

        </div>
    </div>


</template>

<script>
import { db } from '@/firebase';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

export default {
    name: 'CollectingTerms',
    data() {
        return {
            userID: null,
            ratings: {},
            additionalComment: "",
            showOption1: true,
            currentPage: 1,
            rowsPerPage: 10, // sentences per page
            questions: [
                [
                    { id: 'q1', text: 'I find many visual elements <strong>distracting</strong>.' },
                    { id: 'q2', text: 'I find the visualization <strong>occludes information</strong>.' },
                    { id: 'q3', text: 'I find the visualization <strong>cluttered</strong>.' },
                    { id: 'q4', text: 'I find this visualization <strong>familiar</strong>.' },
                    { id: 'q5', text: 'I find this visualization <strong>easy to understand</strong>.' },
                    { id: 'q6', text: 'I find this visualization <strong>easy to interpret</strong>.' },
                    { id: 'q7', text: 'I find that the structure is <strong>unclear</strong>.' },
                    { id: 'q8', text: 'I feel the main idea is <strong>not clear</strong> within the first few seconds.' },
                    { id: 'q9', text: 'I feel <strong>confident</strong> about this visualization.' },
                    { id: 'q10', text: 'I find this visualization <strong>difficult to read</strong>.' },
                    { id: 'q11', text: 'I feel <strong>confused</strong> by the visualization.' },
                    { id: 'q12', text: 'I feel <strong>overwhelmed</strong> by the visualization.' },
                    { id: 'q13', text: 'I feel <strong>curious</strong> about this visualization.' },
                    { id: 'q14', text: 'I feel <strong>irritated</strong> by this visualization.' },
                    { id: 'q15', text: 'I find there is <strong>a lot of information</strong> in this visualization.' },
                    { id: 'q16', text: 'I find this visualization <strong>easy to use</strong>.' },
                    { id: 'q17', text: 'I find this visualization <strong>intuitive</strong>.' },
                    { id: 'q18', text: 'I find this visualization <strong>visually pleasing</strong>.' },
                    { id: 'q19', text: 'I feel that this visualization causes <strong>cognitive overload</strong>.' },
                    { id: 'q20', text: 'I feel the <strong>mental demand</strong> of this visualization is high/low.' },
                    { id: 'q21', text: 'I find the <strong>color coding</strong> overly complex.' },
                    { id: 'q22', text: 'I find the <strong>visual encoding</strong> is poor and violates good practice.' },
                    { id: 'q23', text: 'I find this visualization <strong>attractive</strong>.' },
                    { id: 'q24', text: 'I find the visualization has <strong>unnecessary complexity</strong>.' },
                    { id: 'q25', text: 'I can see six <strong>images</strong> above.' },
                    { id: 'q26', text: 'I find the visualization <strong>easy to comprehend</strong>.' },
                    { id: 'q27', text: 'I find the visualization <strong>overloaded</strong>.' },
                    { id: 'q28', text: 'I find the <strong>large number of data items</strong> makes the visualization too complex.' },
                    { id: 'q29', text: 'I find the visualization <strong>dense</strong>.' },
                    { id: 'q30', text: 'I feel <strong>informed</strong> by the visualization.' },
                    { id: 'q31', text: 'I find the visualization has <strong>overlapping information</strong>.' },
                    { id: 'q32', text: 'I feel <strong>stressed</strong> by the visualization.' },
                    { id: 'q33', text: 'I find the <strong>visualization type</strong> requires higher cognitive effort.' },
                    { id: 'q34', text: 'I feel <strong>engaged</strong> with the visualization.' },
                    { id: 'q35', text: 'I find the visualization uses <strong>too many colors</strong>.' },
                    { id: 'q36', text: 'I find the visualization provides <strong>not enough context</strong>.' },
                    { id: 'q37', text: 'I find the visualization <strong>well organized</strong>.' },
                    { id: 'q38', text: 'I find the points in the visualization <strong>easy to distinguish</strong>.' },
                    { id: 'q39', text: 'I cannot <strong>distinguish between colors</strong>.' },
                    { id: 'q40', text: 'I find the visualization displays <strong>several dimensions at once</strong>.' },
                    { id: 'q41', text: 'I can <strong>detect patterns</strong> in the visualization.' },
                    { id: 'q42', text: 'I find the visualization is <strong>missing important details</strong>.' },
                    { id: 'q43', text: 'I find the visualization requires <strong>effort</strong> to understand.' },
                    { id: 'q44', text: 'I find the visualization has <strong>poor pattern visibility</strong>.' },
                    { id: 'q45', text: 'I find <strong>all data points are visible</strong> in the visualization.' },
                    { id: 'q46', text: 'I find the variables in the visualization <strong>visible</strong>.' },
                    { id: 'q47', text: 'I find the visualization is <strong>poorly designed</strong>.' },
                    { id: 'q48', text: 'I can find this <strong>survey</strong> in Prolific.' },
                    { id: 'q49', text: 'I find the visualization has a <strong>complex visual appearance</strong>.' },
                    { id: 'q50', text: 'I find additional graphics would help in <strong>communication</strong>.' }
                ]
            ],
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.questions.length / this.rowsPerPage);
        },
        paginatedQuestions() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            return this.questions.slice(start, end);
        }
    },
    mounted() {
        this.userID = sessionStorage.getItem("userID");

        if (!this.userID) {
            alert("User ID not found. Please fill out the background information first.");
            this.$router.push('/BackgroundView');
        }
    },
    methods: {
        openImage(src) {
            window.open(src, "_blank");
        },

        async saveDataToFirebase() {
            // all questions answered
            const allAnswered = this.questions.every(q => this.ratings[q.id] !== undefined);

            if (!allAnswered) {
                alert("Please answer all statements before continuing.");
                return; // exit early without disabling the button
            }

            // attention check
            const att1 = Number(this.ratings.q24);
            const att2 = Number(this.ratings.q47);

            // if (att1 !== 4 && att1 !== 5) {
            //     console.log("Attention check failed. Redirecting to AttentionView.");
            //     this.$router.replace({ name: 'AttentionView' });
            //     return;
            // }

            if ((att1 !== 4 && att1 !== 5) || (att2 !== 4 && att2 !== 5)) {
                console.log("Attention check failed. Redirecting to AttentionView.");
                this.$router.replace({ name: 'AttentionView' });
                return;
            }

            // now safe to disable the button
            if (this.isSubmitting) return;
            this.isSubmitting = true;

            try {
                const userData = {
                    id: this.userID,
                    prolificID: sessionStorage.getItem("prolificID")
                };
                await setDoc(doc(db, "userData", this.userID), userData);
                console.log("User info saved:", userData);

                const ratingsData = {
                    userID: this.userID,
                    ratings: this.ratings,
                    additionalComment: this.additionalComment
                };
                await addDoc(collection(db, "item-validation"), ratingsData);
                console.log("Ratings successfully saved:", ratingsData);

                this.$router.replace({ name: 'LastView' });

            } catch (error) {
                console.error("Error saving data:", error);
                alert("There was an error saving your data. Please try again.");
                this.isSubmitting = false; // re-enable button on error
            }
        }

    }
}
</script>
