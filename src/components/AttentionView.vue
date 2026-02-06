<template>

    <div class="bg-gray-50 dark:bg-slate-600 flex flex-col items-center min-h-screen pb-8 dark:text-white">
        <p class="mt-28 text-xl dark:text-white">Thank you for participating in our survey!</p>
        <p class="text-xl dark:text-white underline">Unfortunately, you did not pass the attention check.</p>

        <p class="mt-8 text-xl font-medium dark:text-white">This is your confirmation code.</p>

        <p class="mt-2 text-xl font-medium dark:text-white">
            Please copy and paste it into Prolific to
            complete the survey.
        </p>
        <div class="mt-8 p-4 mb-4 text-l rounded-lg bg-yellow-200" role="alert">
            <span class="font-semibold dark:text-black">C14XNMWM</span>
        </div>

    </div>

</template>

<script>
export default {
    name: 'AttentionView'
}
</script>