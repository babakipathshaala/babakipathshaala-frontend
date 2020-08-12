import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { generate } from 'shortid';
import { CustomValidators } from '../validators/custom.validator';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public userEmail: any;
  public recoveryEmail: any;
  public userPassword: any;
  public userSignUpArray: any = [];
  public showSignup = false;

  public statusValue: any = ['Student 6-10 class', 'Student 11-12', 'Graduation',
    'Post graduation', 'Job seeker', 'Employed', 'Others']

  // for hiding and showing password text.
  public password1: any;
  public password2: any;
  show = false;
  show1 = false;

  signUpForm: FormGroup;

  error_messages = {
    'fullName': [
      { type: 'required', message: 'FullName is required.' },
      { type: 'pattern', message: 'Name is not valid' },
      { type: 'minlength', message: 'Must be atleast 3 character.' }
    ],
    'phoneNumber': [
      { type: 'required', message: 'phoneNumber is required.' },
      { type: 'pattern', message: 'phone number is not valid.' },
      { type: 'minlength', message: 'Must be atleast 10 digit number.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter valid email' },
      { type: 'minlength', message: 'Must be atleast 6 character.' },
      { type: 'maxlength', message: 'Must be almost 30 character.' }
    ],
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'hasNumber', message: 'Must contain atleast one number.' },
      { type: 'hasCapitalCase', message: 'Must contain atleast one capital case.' },
      { type: 'hasSmallCase', message: 'Must contain atleast one small case.' },
      { type: 'hasSpecialCharacters', message: 'Must contain atleast one special character.' },
      { type: 'minLength', message: 'Must be atleast 8 character.' },
      { type: 'maxlength', message: 'Must be almost 30 character.' }
    ],
    'status': [
      { type: 'required', message: 'Status is required.' }
    ],
    'age': [
      { type: 'required', message: 'Age is required.' },
      { type: 'pattern', message: 'Age is not valid.' },
      { type: 'minlength', message: 'Must be atleast 1 digit.' },
      { type: 'maxlength', message: 'Must be almost 2 digit.' }
    ]
  }
  loginToken: boolean;

  constructor(public router: Router, public userService: UserService, public fb: FormBuilder, public toastr: ToastrManager, private modalService: NgbModal) {
    this.userSignUpArray = this.userService.getUserDetailsFromLocalstorage();


    this.signUpForm = this.fb.group({
      fullName: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),  
        Validators.pattern('^[a-zA-Z][a-zA-Z ]+[a-zA-Z]+$')
      ])),
      phoneNumber: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(10),  
        Validators.pattern('^[0-9]*$')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"),
      ])),
      password: new FormControl('', Validators.compose([
        // password field is required.
        Validators.required,
        // check whether the entered password has a number.
        CustomValidators.patternValidator(/\d/, { hasNumber: true }),
        // check whether the entered password has upper case letter.
        CustomValidators.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        // check whether the entered password has lower case letter.
        CustomValidators.patternValidator(/[a-z]/, { hasSmallCase: true }),
        // check whether the entered password has a special character.
        CustomValidators.patternValidator(/[$&+,:;=?@#|'<>.^*()%!~`_{}-]/, { hasSpecialCharacters: true }),
        // password must have a minimum length of 8 characters
        Validators.minLength(8),
        Validators.maxLength(30)
      ])),
      age: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(2),
        Validators.minLength(1),
        Validators.pattern("^[0-9]*$")
      ])),
      status: new FormControl('', Validators.compose([
        Validators.required
      ]))

    }
    );
  }

  ngOnInit() {
    this.password1 = 'password';
    this.password2 = 'password';
    console.log(this.userSignUpArray)
  }

  get fullName() {
    return this.signUpForm.get('fullName').value;
  }

  get phoneNumber(){
    return this.signUpForm.get('phoneNumber').value;
  }

  get emailFun() {
    return this.signUpForm.get('email').value;
  }

  get password() {
    return this.signUpForm.get('password').value;
  }

  get age() {
    return this.signUpForm.get('age').value;
  }

  get status() {
    return this.signUpForm.get('status').value;
  }

  public validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  public showOrHidePassword() {
    if (this.password1 === 'password') {
      this.password1 = 'text';
      this.show = true;
    } else {
      this.password1 = 'password';
      this.show = false;
    }
  }

  public showOrHideSignUpPassword() {
    if (this.password2 === 'password') {
      this.password2 = 'text';
      this.show1 = true;
    } else {
      this.password2 = 'password';
      this.show1 = false;
    }
  }

  public clearSignUpFields = () => {
    this.signUpForm.get('fullName').reset();
    this.signUpForm.get('email').reset();
    this.signUpForm.get('phoneNumber').reset();
    this.signUpForm.get('password').reset();
    this.signUpForm.get('age').reset();
    this.signUpForm.get('status').reset();
  }

  public clearSignInFields = () => {
    this.userEmail= '';
    this.userPassword = '';
  }

  public signInFunction: any = () => {
    if (!this.userEmail) {
      this.toastr.warningToastr('enter email')
    } else if (!this.userPassword) {
      this.toastr.warningToastr('enter password')
    } else {
      if (!this.userSignUpArray) {
        this.toastr.errorToastr("You are not signed in. please signup first");
        // this.router.navigate(['/signup']);
      }
      else {
        if (this.userSignUpArray.find(x => x.userData.email == this.userEmail)) {
          this.userSignUpArray.map(userDetail => {
            if (userDetail.userData.email === this.userEmail) {
              if (userDetail.userData.password === this.userPassword) {
                userDetail.userData.loginToken = true
                Cookie.set('authToken', userDetail.userData.loginToken);
                this.userService.setUserInfoInLocalStorage(userDetail.userData)
                this.router.navigate(['/home']);
              } else {
                this.toastr.errorToastr("email or password is incorrect");
              }
            }
          })
        } else {
          this.toastr.errorToastr("This email is not registered. Please sign up!");
          // this.router.navigate(['/signup'])
        }

      }
    }
  }



  public signUpFunction: any = () => {
    if (!this.fullName) {
      this.toastr.warningToastr('enter the fullName');
    } else if (!this.emailFun) {
      this.toastr.warningToastr('enter email');
    } 
    else if (!this.phoneNumber) {
      this.toastr.warningToastr('enter phone number');
    } 
    else if (!this.password) {
      this.toastr.warningToastr('enter password');
    } 
    else if (!this.age) {
      this.toastr.warningToastr('enter age');
    }
    else if(!this.status){
      this.toastr.warningToastr('enter status');
    }
    else {
      let data = {
        userId: generate(),
        fullName: this.fullName,
        phoneNumber: this.phoneNumber,
        email: this.emailFun,
        password: this.password,
        age: this.age,
        status: this.status ,
        loginToken: this.loginToken = false
      }

      console.log("The data for signup is:", data);
      if(this.userSignUpArray){
        console.log("user signed up value:",this.userSignUpArray)
        console.log("data email is",data.email)
        if (this.userSignUpArray.find(x => x.userData.email == data.email)) {
          this.toastr.errorToastr('User already present with this email.')
        }
        else {
          this.userService.storeOnLocalStorage(data);
          this.toastr.successToastr('SignedUp successfully. Please signIn!');
          this.userSignUpArray = this.userService.getUserDetailsFromLocalstorage();
          console.log("userSignedup array inside if", this.userSignUpArray)
        }
      }

      else {
        this.userService.storeOnLocalStorage(data);
        this.toastr.successToastr('SignedUp successfully. Please signIn!');
        this.userSignUpArray = this.userService.getUserDetailsFromLocalstorage();
        console.log("userSignedup array inside else", this.userSignUpArray)
      }
    }
  }

  changeStatus(e){
    this.status.setValue(e.target.value, {
      onlyself: true
    })
  }

  open(content) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      centered: true
    })
  }

  public closeModal = () => {
    this.recoveryEmail = "";
  }

  public forgotPasswordFunction = () =>{
    if(this.validateEmail(this.recoveryEmail)){
      this.toastr.successToastr("This functionality will be active soon")
      // this.userService.getResetLink(this.recoveryEmail).subscribe((apiResponse) =>{
      //   if(apiResponse.status === 200){
      //     this.toastr.successToastr('check your email for the link')
      //   } else{
      //     this.toastr.errorToastr('some error occured or userdetails not found')
      //   }
      // },(err) =>{
      //   this.toastr.errorToastr('some error occured')
      // });
    } else{
      this.toastr.errorToastr('Enter a valid email')
      // console.log("forgot password function :- Enter a valid email")
    }
    setTimeout(() => {
      this.closeModal();
    },0)

  }

}

