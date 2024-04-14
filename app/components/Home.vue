<template>
    <Page>
        <StackLayout>
        <Image  width="70%" style="margin-top: 30px; margin-bottom: 50px;" src="~/assets/images/login-screen.png" stretch="aspectFit"/>
            <Label class="text-2xl text-center font-bold" text="Hello"/>
            <Label class="text-gray-600 text-center mt-2 mb-5" text="Welcome to Applications. Please login or register" textWrap="true"/>
          <Button class="bg-indigo-600 text-white font-bold py-2 px-4 rounded-full mx-10 my-2" text="Login"/>
          <Button class="bg-white text-indigo-600 border border-indigo-600 font-bold py-2 px-4 rounded-full mx-10 my-2" text="Sign Up"/>

          <Label class="text-gray-600 text-center mt-10" text="Login using" textWrap="true"/>
          <GridLayout class="mt-3" rows="*" columns="auto, auto, auto" columnSpacing="25" verticalAlignment="center" horizontalAlignment="center">
            <Label class="fab mr-5" row="0" col="0" style="font-size: 30em; color: #4338ca"  text.decode="&#xf09a;"></Label>
            <Label class="fab mr-5" row="0" col="1" style="font-size: 30em; color: #4338ca"  text.decode="&#xf09b;"></Label>
            <Label class="fab" row="0" col="2" style="font-size: 30em; color: #4338ca"  text.decode="&#xf1a0;"></Label>
          </GridLayout>
        </StackLayout>
    </Page>
</template>

<script>
  export default {
    computed: {
      message() {
        return "Blank {N}-Vue app";
      }
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    // .fas {
    //     @include colorize($color: accent);
    // }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
