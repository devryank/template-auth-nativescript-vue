<template>
    <Page>
        <ScrollView height="100%">
        <StackLayout>
            <Image  width="70%" style="margin-top: 30px; margin-bottom: 50px;" src="~/assets/images/Secure-login.png" stretch="aspectFit"/>
            <Label class="text-2xl text-center font-bold" text="Sign Up"/>
            <StackLayout>
                <Label class="text-gray-700 ml-5" text="E-Mail"/>
                <TextField hint="john@gmail.com" v-model="email" class="border border-gray-500 px-3 py-2"/>

                <Label class="text-gray-700 ml-5 mt-2" text="Password"/>
                <TextField secure="true" v-model="password" @textChange="checkPasswordIsSame" class="border border-gray-500 px-3 py-2"/>
                
                <Label class="text-gray-700 ml-5 mt-2" text="Ketik Ulang Password"/>
                <TextField secure="true" v-model="passwordConfirmation" @textChange="checkPasswordIsSame" class="border border-gray-500 px-3 py-2"/>

                <Label class="text-red-600 ml-5 mt-2" :text="!isPasswordValid && password !== '' ? 'Password tidak sama' : ''"/>
            </StackLayout>

            <GridLayout rows="auto, auto" columns="*, auto" class="p-4">
                <Button row="1" col="1" class="bg-indigo-600 text-white font-bold py-1 px-3 rounded-full my-2 w-24" text="Sign Up" @tap="onRegisterTap"/> 
            </GridLayout>

            <Label class="mt-5 mb-10 text-center text-gray-600" text="<< Kembali ke halaman utama" @tap="onBackTap"/>

        </StackLayout>
        </ScrollView>
    </Page> 
</template>

<script>
import { Dialogs } from '@nativescript/core';
    import Welcome from './Welcome'
export default {
    data() {
        return {
            email: '',
            password: '',
            passwordConfirmation: '',
            isPasswordValid: false
        }
    },
    methods: {
        isEmailValid() {
            return this.email.match(
                /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        },

        onBackTap() {
            this.$navigateTo(Welcome)
        },

        checkPasswordIsSame() {
            if(this.password !== this.passwordConfirmation && this.passwordConfirmation !== '') {
                this.isPasswordValid = false
            }
            if(this.password === this.passwordConfirmation && this.passwordConfirmation !== '') {
                this.isPasswordValid = true
            }
            console.log(this.password === this.passwordConfirmation)
            console.log(this.passwordConfirmation !== '')
        },
        
        onRegisterTap() {
            console.log(this.email)
            console.log(this.isEmailValid())
            console.log(this.password)
            console.log(this.passwordConfirmation)
            if(this.email !== '' && this.isEmailValid() && this.password === this.passwordConfirmation && this.passwordConfirmation !== '') {
                Dialogs.alert({
                    title: 'Pendaftaran berhasil',
                    message: 'Silahkan login menggunakan akun yang didaftarkan',
                    okButtonText: 'OK'
                })
            }
        }
    }
}
</script>