<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col min-h-screen pb-8">
        <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 text-center">Rating the relevance of
            statements to assess perceived visual complexity.</p>

        <div class="text-left px-24 mt-7 dark:text-white">
            <div>
                <p> We would like you to rate how relevant each statement below is for measuring how visually complex a
                    data
                    visualization looks to you. Consider the example visualizations shown above, but you can think about
                    all types of charts and graphs.
                </p>
                <p class="mt-4">
                    For each statement, ask yourself:
                    <span class="font-medium">“How relevant is this for describing the visual complexity of a static
                        data visualization?”</span>
                </p>

                <div class="flex justify-end -mt-5">
                    <button @click.prevent="showOption1 = !showOption1" type="submit"
                        class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center">
                        change images
                    </button>
                </div>
            </div>

            <!-- option 1 -->
            <div v-if="showOption1">
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.4.png'))" src="@/assets/2.4.png" alt="Image 1"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.3.png'))" src="@/assets/2.3.png" alt="Image 2"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.7.png'))" src="@/assets/2.7.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                </div> <br>
                <div class="flex justify-center space-x-4 px-16 mb-10">
                    <img @click="openImage(require('@/assets/2.11.png'))" src="@/assets/2.11.png" alt="Image 4"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/1.1.png'))" src="@/assets/1.1.png" alt="Image 5"
                        class="w-[15rem] h-[12rem]">
                    <img @click="openImage(require('@/assets/1.2.png'))" src="@/assets/1.2.png" alt="Image 6"
                        class="w-[16rem] h-[12rem]">
                </div>
            </div>

            <!-- option 2 -->
            <div v-else>
                <div class="flex justify-center space-x-4 px-16 mt-6">
                    <img @click="openImage(require('@/assets/2.1.png'))" src="@/assets/2.1.png" alt="Image 1"
                        class="w-[14rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.10.png'))" src="@/assets/2.10.png" alt="Image 3"
                        class="w-[15rem] h-[11rem]">
                    <img @click="openImage(require('@/assets/2.2.png'))" src="@/assets/2.2.png" alt="Image 2"
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
            </div>

            <p class="mt-5">Now, please rate the statements below using the scale from <span class="font-medium">Not
                    Relevant</span> to <span class="font-medium">Very Relevant</span>.</p>
            <p class="mt-3"><span class="font-medium">Remember:</span> focus only on visual appearance, think broadly
                about many types of visualizations, and rate each statement individually.</p>

            <div
                class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default mt-10">
                <table class="w-full text-sm text-left rtl:text-right text-body">
                    <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th scope="col" class="px-6 py-3 font-medium">

                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                1: not relevant
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                2
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                3
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                4
                            </th>
                            <th scope="col" class="px-6 py-3 font-medium">
                                5: very relevant
                            </th>
                        </tr>
                    </thead>
                    <tbody class>
                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the amount of visual elements distracting.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q1" type="radio" name="q1" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the visualization occludes information.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q2" type="radio" name="q2" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find the visualization cluttered.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q3" type="radio" name="q3" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization familiar.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q4" type="radio" name="q4" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization easy to understand.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q5" type="radio" name="q5" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization easy to interpret.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q6" type="radio" name="q6" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                        <tr class="bg-neutral-primary border-b border-default ">
                            <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-right">
                                I find this visualization clear.
                            </th>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="1" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="2" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="3" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4">
                                <label class="flex items-center dark:text-white -ml-1">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="4" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                            <td class="px-6 py-4 flex justify-center">
                                <label class="flex items-center dark:text-white -ml-16">
                                    <input v-model="ratings.q7" type="radio" name="q7" value="5" required
                                        style="width: 24px; height: 24px;">
                                </label>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>

            <p class="mt-12">If you have any comments or suggestions related to this survey, please write them here.</p>
            <textarea v-model="additionalComment" id="additionalComment" rows="4"
                class="dark:text-black mt-4 rounded-lg px-0 w-full border border-gray-300 focus:ring-0 focus:outline-none dark:placeholder-gray-400 bg-gray-50"
                required></textarea>

            <div class="flex justify-end mt-10">
                <button @click.prevent="saveDataToFirebase" type="submit"
                    class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
            ratings: {
                q1: null,
                q2: null,
                q3: null,
                q4: null,
                q5: null,
                q6: null,
                q7: null
            },
            additionalComment: "",
            showOption1: true
        };
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
            console.log("Save button clicked");

            for (const [, value] of Object.entries(this.ratings)) {
                if (value === null) {
                    alert("Please answer all statements before continuing.");
                    return;
                }
            }

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

                this.$router.push('/LastView');

            } catch (error) {
                console.error("Error saving data:", error);
                alert("There was an error saving your data. Please try again.");
            }
        }
    }
}
</script>
