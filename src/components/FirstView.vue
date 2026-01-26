<template>

    <!-- <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center justify-center min-h-screen text-center px-4">

        <p class="mb-6 text-2xl tracking-tight text-gray-900 dark:text-white">
            Visual complexity of data visualizations - terms collection
        </p>

        <div class="max-w-lg mx-auto border-2 border-blue-200 p-6 rounded-md dark:text-white">
            <p>
                The survey period has ended, but we truly appreciate your willingness to participate.
            </p>
            <br>
            <p>
                For further information please contact:
            </p>
            <p class="mt-2 dark:text-white">
                <a href="mailto:torsten.moeller@univie.ac.at" class="hover:text-blue-500">
                    • Torsten Möller (University of Vienna)
                </a> or <br>
                <a href="mailto:a12242040@unet.univie.ac.at" class="hover:text-blue-500">
                    • Sara Hoxhaj (University of Vienna)
                </a>
            </p>
        </div>

    </div> -->



    <div v-if="isLaptop">
        <div class="bg-gray-50 dark:bg-slate-600 flex flex-col justify-start min-h-screen">
            <p class="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white mt-7 font-medium items-center ">Visual
                complexity of
                data
                visualizations -
                item validation</p>

            <div class="text-left px-24 dark:text-white ml-12 mt-5 max-w-[1300px]">
                <p><b>Estimated time:</b> ~10 min</p>
                <p class="mt-3"><b>Purpose:</b> We are developing a validated scale to measure how visually complex a
                    data visualization appears to a viewer. In this survey, you will rate how relevant certain
                    statements are for describing the visual complexity of a visualization.</p>

                <p class="mt-3"><b>Task Description:</b> You will see a list of statements (e.g., “I find the amount of
                    visual elements distracting.”).
                    Your task is to rate how relevant each statement is for capturing your perception of visual
                    complexity in a static data visualization. <br>
                    Examples of visualizations are provided for reference, but please think broadly about all types of
                    data representations.
                </p>

                <p class="mt-3"><b>Eligibility:</b> This survey is intended for participants who:</p>
                <div class="mt-2 dark:text-white ml-20">
                    • are fluent in English, and <br>
                    • are at least 18 years old (or of legal age in their country)
                </div>

                <p class="mt-3"><b>What to expect:</b></p>
                <div class="mt-2 dark:text-white ml-20">
                    <ol class="list-decimal">
                        <li>Review the reference visualizations (6 images).</li>
                        <li>Rate the relevance of each statement using a scale (e.g., Not at All Relevant to Very
                            Relevant).</li>
                        <li>All responses are anonymous and voluntary—you may stop at any time.</li>
                    </ol>
                </div>

                <p class="mt-3"><b>Confidentiality & Data Use:</b> Your responses will be anonymized, stored securely,
                    and used only for academic research. Results may be published, with anonymized data made publicly
                    available.</p>

                <p class="mt-3"><b>Research Team:</b><br> Laura Koesten, Sara Hoxhaj, Torsten Möller (University of
                    Vienna) <br> Anne-Flore Cabouat, Petra Isenberg, Tobias Isenberg (University of Paris-Saclay)</p>

                <p class="mt-3"><b>Contact:</b> For questions, please message the researcher via <b>Prolific.</b></p>

                <div class="mt-3 flex items-center justify-between">
                    <span><b>Consent:</b> By clicking “Next”, you consent to participate in this study.</span>
                    <button @click.prevent="gotoProlificIDView" type="submit"
                        class="bg-sky-900 hover:bg-sky-800 text-white px-4 py-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Next
                    </button>
                </div>



            </div>

        </div>
    </div>

    <div v-else>
        <h2>Please open this survey on a laptop</h2>
    </div>

</template>

<script setup>
import { useDeviceCheck } from '../composables/useDeviceCheck.js'
import { useRouter } from 'vue-router'

// device check
const { isLaptop } = useDeviceCheck()

const router = useRouter()

function gotoProlificIDView() {
    router.push('/ProlificIDView')
    window.scrollTo(0, 0)
}
</script>
