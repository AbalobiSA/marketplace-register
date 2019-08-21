import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from "@angular/forms";
import {FisherCommunityPage}  from "../fisher-community/fisher-community";
import{FisherService}         from "../../providers/FisherService";
import {PersonalInfoClass}    from "../../classes/personal_info_class";



//Function to check for matching passwords
function goodPasswords(passwordKey: string, confirmPasswordKey: string, nameKey: string, surnameKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
        let password = group.controls[passwordKey];
        let confirmPassword = group.controls[confirmPasswordKey];
        let name = group.controls[nameKey];
        let surname = group.controls[surnameKey];

        //Passwords mismatch
        if (password.value !== confirmPassword.value) {//passwords do not match
            return {
                mismatchedPasswords: true
            };
        }

        //Passwords match, perform further checks
        else{
            //passwords too short
            if (password.value.length < 6) {
                return {
                    badPasswords: true
                };
            }

            // Check that password doesn't contain copy of name, surname or "password"
            let re = /password/gi;
            console.log(password.value);
            console.log(re);
            if (password.value.search(re) !== -1 ) {
                console.log(`Password contains 'password'`);
                return {
                    containsInvalidWords: true
                };
            }

            console.log(name.value);
            let expression = "99999999999";
            if (name.value !== "") {
                expression = name.value;
            }
            re = new RegExp(expression, 'gi');
            console.log(`RegExp`);
            console.log(re);
            if (re.test(password.value)) {
                console.log(`Password contains name`);
                return {
                    containsInvalidName: true
                };
            }

            console.log(name.value);
            expression = "99999999999";
            if (surname.value !== "") {
                expression = surname.value;
            }
            re = new RegExp(expression, 'gi');
            console.log(`RegExp`);
            console.log(re);
            if (re.test(password.value)) {
                console.log(`Password contains name`);
                return {
                    containsInvalidSurname: true
                };
            }

            //passwords have sufficient length,check representation of each of CAPS,small letters,---These password requirements have been shelved for now
            /*else{

                if(!hasUpperCase(password.value)){//discovered that there are no CAPS in password
                    return {
                        noUpperCase: true
                    };
                }

                else if(!hasLowerCase(password.value)){
                    return {
                        noLowerCase: true
                    };
                }

                else if(!hasNum(password.value)){
                    return {
                        noNum: true
                    };
                }


            }*/

        }
    }
}


// function hasUpperCase(password: string): boolean {//check if the given string has at least one Uppercase Letter
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else{
//             for(let i = 0;i<password.length;i++){
//                 let char = password.charAt(i);
//                 if(/[A-Z]/.test(char)){
//                     return true;
//                 }
//             }
//         return false;
//     }
// }
//
// function hasLowerCase(password: string): boolean {//return true if a Lowercase has been found
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else {
//         for (let i = 0; i < password.length; i++) {
//             let char = password.charAt(i);
//             if(/[a-z]/.test(char)){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//
// function hasNum(password: string): boolean {//return true if a digit has been found
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else {
//         for (let i = 0; i < password.length; i++) {
//             let char = password.charAt(i);
//             if(/^\d+$/.test(char)){
//                 return true;
//             }
//         }
//         return false;
//     }
// }




@IonicPage()
@Component({
      selector: 'page-fisher-personal',
      templateUrl: 'fisher-personal.html',
})
export class FisherPersonalPage {
        private base64Image: string;

        personal_info : PersonalInfoClass = new PersonalInfoClass();
        passwordContainsInvalidWords: boolean = false;
        public personalForm: any;
        mobileNumLengthValidator;
        validation_messages = {
            'surname': [
                {type: 'required', message: 'Surname is required.'}
            ],

            'name': [
                {type: 'required', message: 'Name is required.'}
            ],

            'nickname': [
                {type: 'required', message: 'Nickame is required.'}
            ],

            // 'gender': [
            //     {type: 'required', message: 'Gender is required.'}
            // ],

            'ID': [
                {type: 'required',  message: 'ID is required.'},
                {type: 'minlength', message: 'ID number too short.'},
                {type: 'minLength', message: 'ID number too short.'},
                {type: 'maxlength', message: 'ID number too long.'},
                {type: 'maxLength', message: 'ID number too long.'},
                {type: 'pattern',   message: 'Unacceptable symbols in ID.'}
            ],

            'dialcode': [
                {type: 'required', message: 'Country code is required.'}
            ],

            'cell': [
                {type: 'required',  message: 'Cell Number is required.'},
                {type: 'minlength', message: 'Cell Number too short.'},
                {type: 'minLength', message: 'Cell Number too short.'},
                {type: 'maxlength', message: 'Cell Number too long.'},
                {type: 'maxLength', message: 'Cell Number too long.'},
                {type: 'pattern',   message: 'Must only contain numbers.'}
            ],


            'password1': [
                {type: 'required', message: 'Password is required.'},
            ],

            'password2': [
                {type: 'required', message: 'Password confirmation required.'},
            ]};

            constructor (public navCtrl: NavController, public navParams: NavParams, public fisherService : FisherService, public formBuilder: FormBuilder) {

                this.mobileNumLengthValidator = (cellNumControl) : {[key: string]: any} => {
                    if (this.personalForm) {
                        let dialCode = this.personalForm.get('dialcode');
                        let cellNum: string = cellNumControl.value;

                        if (cellNum && (cellNumControl.dirty || cellNumControl.touched)) {
                            if (cellNum.charAt(0) === '0') {
                                cellNum = cellNum.slice(1);
                            }

                            if (dialCode.value === '+27' && ((dialCode.value + cellNum).length < 12)) {
                                return {
                                    'minLength': true
                                };
                            } else if ((dialCode.value + cellNum).length < 11) {
                                return {
                                    'minLength': true
                                };
                            } else if ((dialCode.value + cellNum).length > 12) {
                                return {
                                    'maxLength': true
                                };
                            }
                        }
                    }
                };
                    this.personalForm = this.formBuilder.group({
                        "surname":  ['', Validators.required],
                        "name":     ['', Validators.required],
                        "nickname": ['', Validators.required],
                        "email":    ['', ],
                        "gender":   ['', ],
                        "language": ['', ],
                        "ID":       ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')])],
                        "dialcode": ['', Validators.required],
                        "cell":     ['', Validators.compose([Validators.required, Validators.pattern('[0-9]*'), this.mobileNumLengthValidator])],
                        "password1":['', Validators.required],
                        "password2":['', Validators.required]
                    } , {validator: goodPasswords('password1', 'password2', 'name', 'surname')});
            }


            ionViewDidLoad() {
                        console.log('ionViewDidLoad FisherPersonalPage');
                        const fileInput = document.getElementById('file-input');
                        fileInput.addEventListener('change', (e: any) => this.doSomethingWithFiles(e.target.files))
            }

            onFisherFinishPersonal(){
                let countryCode = this.personal_info.personal_countryCode.slice(1);
                let cellNum = this.personal_info.personal_cellNo;
                if (cellNum.charAt(0) === '0') {
                    cellNum = cellNum.slice(1);
                }
                this.personal_info.personal_cellNo = countryCode + cellNum;
                console.log(this.personal_info.personal_cellNo);
                this.fisherService.fisherUpdatePersonal(this.personal_info);
                this.navCtrl.push(FisherCommunityPage, this.personal_info);
            }

            surnameChanged(){
                    this.personal_info.personal_surname = this.personalForm.get("surname").value;
            }

            nameChanged(){
                    this.personal_info.personal_firstname = this.personalForm.get("name").value;
            }

            nickNameChanged(){
                    this.personal_info.personal_nickname = this.personalForm.get("nickname").value;
            }

            emailChanged() {
                    this.personal_info.personal_email = this.personalForm.get('email').value;
            }

            genderChanged(){
                    this.personal_info.personal_gender = this.personalForm.get("gender").value;
            }

            IDchanged(){
                    this.personal_info.personal_IDnum = this.personalForm.get("ID").value;
            }

            countryCodeChanged() {
                this.personal_info.personal_countryCode = this.personalForm.get("dialcode").value;
                this.personalForm.get('cell').updateValueAndValidity();
            }

            cellChanged(){
                    this.personal_info.personal_cellNo= this.personalForm.get("cell").value;
            }

            password1Changed(){
                    this.personal_info.personal_password1= this.personalForm.get("password1").value;
            }


            password2Changed(){
                    this.personal_info.personal_password2= this.personalForm.get("password2").value;
            }

            languageChanged() {
                    this.personal_info.personal_language = this.personalForm.get('language').value;
            }

            doSomethingWithFiles(files) {
                    console.log("doSomethingWithFiles: ", files);
                    let file = null;
                    for (let i = 0; i < files.length; i++) {
                        if (files[i].type.match(/^image\//)) {
                            file = files[i];
                            break;
                        }
                    }

                    if (file !== null) {
                        let reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onloadend = () => {
                            this.base64Image = reader.result;
                            // console.log("Got image: ", reader.result);
                            this.personal_info.personal_selfie = this.base64Image;
                        }
                    }
            }

}//end class
