<template>
    <Page>
        <StackLayout>
            <Image  width="70%" style="margin-top: 30px; margin-bottom: 50px;" src="~/assets/images/Secure-login.png" stretch="aspectFit"/>
            <Label class="text-2xl text-center font-bold" text="Login"/>
            <StackLayout>
                <Label class="text-gray-700 ml-5" text="E-Mail"/>
                <TextField hint="john@gmail.com" class="border border-gray-500 px-3 py-2"/>

                <Label class="text-gray-700 ml-5 mt-2" text="Password"/>
                <TextField secure="true" class="border border-gray-500 px-3 py-2"/>

                <Label class="text-xs text-gray-600 ml-5 mt-2" text="Forgot Password?"/> 
            </StackLayout>

            <GridLayout rows="auto, auto" columns="*, auto" class="p-4">
                <Button row="1" col="1" class="bg-indigo-600 text-white font-bold py-1 px-3 rounded-full my-2 w-24" text="Login"/> 
            </GridLayout>

        </StackLayout>
    </Page> 
</template>

<script>
export default {
    
}
</script>