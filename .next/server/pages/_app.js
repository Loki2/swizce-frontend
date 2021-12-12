"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ CREATE_SCREAM),
/* harmony export */   "J": () => (/* binding */ QUERY_SCREAMS)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_SCREAM = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CREATE_SCREAM(
      $description: String!, 
      $imageUrl: String!, 
    ){
    createScream(
      description:  $description
      imageUrl: $imageUrl
    ){
      id
      imageUrl
      description
    }
  }
`;
const QUERY_SCREAMS = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
    screams{
      id
      imageUrl
      description
      createdAt
      user{
        id
        username
        images
      }
    }
  }
`;


/***/ }),

/***/ 1896:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ CREATE_SERVICE),
/* harmony export */   "X": () => (/* binding */ QUERY_SERVICE)
/* harmony export */ });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9114);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const CREATE_SERVICE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  mutation CREATE_SERVICE(
    $name: String!,
    $description: String!,
    $address: String!,
    $contact: String!,
    $tags: String!,
    $imageUrl: String!
  ){
    createService(
      name: $name,
      description: $description,
      address: $address,
      contact: $contact,
      tags: $tags,
      imageUrl: $imageUrl
    ){
      id
      name
      description
      address
      contact
      tags
      imageUrl
    }
  }

`;
const QUERY_SERVICE = _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`
  query {
      services{
        id
        name
        description
        contact
        address
        imageUrl
        status
        tags
        user{
          id
          username
        }
      }
    }
`;


/***/ }),

/***/ 2823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j5": () => (/* binding */ isSuperAdmin),
/* harmony export */   "GJ": () => (/* binding */ isAdmin)
/* harmony export */ });
/* unused harmony export isClient */
const isSuperAdmin = (user)=>!user ? false : user.roles.includes('SUPERADMIN')
;
const isAdmin = (user)=>!user ? false : user.roles.includes('ADMIN') || user.roles.includes('SUPERADMIN')
;
const isClient = (user)=>!user ? false : !user.roles.includes('ADMIN') || !user.roles.includes('ITEMEDITOR') || !user.roles.includes('SUPERADMIN')
;


/***/ }),

/***/ 273:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__(9114);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/context/AuthContext.tsx
var AuthContext = __webpack_require__(4431);
;// CONCATENATED MODULE: ./src/components/Modal/Backdrop.tsx


const Backdrop = (props)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "backdrop"
    })
;
/* harmony default export */ const Modal_Backdrop = (Backdrop);

;// CONCATENATED MODULE: external "react-hook-form"
const external_react_hook_form_namespaceObject = require("react-hook-form");
// EXTERNAL MODULE: external "react-loader-spinner"
var external_react_loader_spinner_ = __webpack_require__(1223);
var external_react_loader_spinner_default = /*#__PURE__*/__webpack_require__.n(external_react_loader_spinner_);
// EXTERNAL MODULE: ./src/graphql/User.ts
var User = __webpack_require__(5717);
;// CONCATENATED MODULE: ./src/components/Modal/Modal.tsx



const Modal = ({ children  })=>{
    const { handleAuthAction  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "modal__container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "styled__modal",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal__action",
                    onClick: ()=>handleAuthAction('close')
                    ,
                    children: "\xd7"
                }),
                children
            ]
        })
    }));
};
/* harmony default export */ const Modal_Modal = (Modal);

;// CONCATENATED MODULE: ./src/components/Signup.tsx









'react-loader-spinner';
const Signup = ()=>{
    var ref1;
    const { handleAuthAction , setAuthUser  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const [signup, { loading , error  }] = (0,client_.useMutation)(User/* SIGN_UP */._5);
    const router = (0,router_.useRouter)();
    const submitSignup = handleSubmit(async ({ username , email , password  })=>{
        try {
            var ref;
            const response = await signup({
                variables: {
                    username,
                    email,
                    password
                }
            });
            if (response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.signUp) {
                const { signUp  } = response.data;
                if (signUp) {
                    //close form
                    handleAuthAction('close');
                    //Set Logged in user in context api
                    setAuthUser(signUp);
                    //push user to their dashboard page
                    router.push('/');
                }
            }
        } catch (error) {
            //console.log(error)
            setAuthUser(null);
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal_Modal, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "signup__container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Join Swizce"
                        }),
                        "",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "One More Thing :)"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onClick: submitSignup,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    name: "username",
                                    placeholder: "Enter Username *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: "Username is required...!",
                                        minLength: {
                                            value: 3,
                                            message: "Username must be at least 3 characters."
                                        },
                                        maxLength: {
                                            value: 25,
                                            message: "Username must not be more than 25 characters"
                                        }
                                    })
                                }),
                                errors.username && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: styles.errorMessage,
                                    role: "alert",
                                    children: errors.username.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter Email *",
                                    ref: register({
                                        required: 'Email is required...!',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email is incorrect format...!"
                                        }
                                    })
                                }),
                                errors.email && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: styles.errorMessage,
                                    role: "alert",
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Enter Password *",
                                    ref: register({
                                        required: 'Password is Required...!',
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters."
                                        },
                                        maxLength: {
                                            value: 75,
                                            message: "Password must not be more than 75 characters"
                                        }
                                    })
                                }),
                                errors.password && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: styles.errorMessage,
                                    role: "alert",
                                    children: errors.password.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p__forget",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    "Forgot password?",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>handleAuthAction('request')
                                        ,
                                        children: "Click here"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: loading,
                                    style: {
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    },
                                    type: "submit",
                                    children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                        type: "Oval",
                                        color: "white",
                                        height: 30,
                                        width: 30,
                                        timeout: 30000
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png",
                                        width: "32px",
                                        height: "32px",
                                        color: "white"
                                    })
                                }),
                                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        style: styles.errorMessage,
                                        role: "alert",
                                        children: ((ref1 = error.graphQLErrors[0]) === null || ref1 === void 0 ? void 0 : ref1.message) || 'Sorry something went wrong...!'
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form__control",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    "Don't have an account? ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>handleAuthAction('signin')
                                        ,
                                        children: "Signin Now!"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
//Styling page here
const styles = {
    errorMessage: {
        margin: 0,
        padding: 0,
        color: 'red',
        fontSize: '.7rem'
    }
};
/* harmony default export */ const components_Signup = (Signup);

// EXTERNAL MODULE: ./src/helpers/authHelper.ts
var authHelper = __webpack_require__(2823);
// EXTERNAL MODULE: ./src/graphql/Scream.ts
var Scream = __webpack_require__(6485);
;// CONCATENATED MODULE: ./src/components/Signin.tsx












const Signin = ()=>{
    var ref1;
    const { handleAuthAction , setAuthUser  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const [signin, { loading , error  }] = (0,client_.useMutation)(User/* SIGN_IN */.H4);
    const router = (0,router_.useRouter)();
    const handleSignin = handleSubmit(async ({ email , password  })=>{
        try {
            var ref;
            const response = await signin({
                variables: {
                    email,
                    password
                },
                refetchQueries: [
                    {
                        query: Scream/* QUERY_SCREAMS */.J
                    },
                    {
                        query: User/* QUERY_MYPROFILE */.ew
                    }
                ]
            });
            if (response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : ref.signIn) {
                const user = response.data.signIn;
                // console.log("user signin: ", user)
                //close form
                handleAuthAction('close');
                //Set Logged in user in context api
                setAuthUser(user);
                if ((0,authHelper/* isAdmin */.GJ)(user)) {
                    //push user to Admin page
                    router.push('http://localhost:3001');
                } else {
                    //push user to their dashboard page
                    router.push('/');
                }
            }
        } catch (error) {
            //  console.log(error)
            setAuthUser(null);
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal_Modal, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "signin__container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Access To Swizce"
                        }),
                        "",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            children: "One More Thing :)"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onClick: handleSignin,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter Email *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: 'Email is required...!',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Email is incorrect format...'
                                        }
                                    })
                                }),
                                errors.email && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: Signin_styles.errorMessage,
                                    role: "alert",
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Enter Password *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: 'Password is Required...!'
                                    })
                                }),
                                errors.password && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: Signin_styles.errorMessage,
                                    role: "alert",
                                    children: errors.password.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "p__forget",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Forgot password?",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            onClick: ()=>handleAuthAction('request')
                                            ,
                                            children: "Click here"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "OR"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                    children: [
                                        "Send OTP?",
                                        " ",
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            onClick: ()=>console.log("OTP authentication")
                                            ,
                                            children: "OTP"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form__control",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                disabled: loading,
                                style: {
                                    cursor: loading ? 'not-allowed' : 'pointer'
                                },
                                type: "submit",
                                children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                    type: "Oval",
                                    color: "white",
                                    height: 30,
                                    width: 30,
                                    timeout: 30000
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png",
                                    width: "32px",
                                    height: "32px",
                                    color: "white"
                                })
                            })
                        }),
                        error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                style: Signin_styles.errorMessage,
                                role: "alert",
                                children: ((ref1 = error.graphQLErrors[0]) === null || ref1 === void 0 ? void 0 : ref1.message) || 'Something went wrong...!'
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form__control",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    "Don't have an account? ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>handleAuthAction('signup')
                                        ,
                                        children: "Get Invite!"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
//Styling page over here
const Signin_styles = {
    errorMessage: {
        margin: 0,
        padding: 0,
        color: 'red',
        fontSize: '.7rem'
    },
    btn__submit: {
    }
};
/* harmony default export */ const components_Signin = (Signin);

;// CONCATENATED MODULE: ./src/components/RequestResetPassword.tsx









const RequestResetPassword = ()=>{
    var ref, ref1;
    const { handleAuthAction  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const router = (0,router_.useRouter)();
    const [requestResetPassword, { data , loading , error  }] = (0,client_.useMutation)(User/* REQUEST_TO_RESET_PASSWORD */.Nx);
    const handleRequestResetPassword = handleSubmit(async ({ email  })=>{
        await requestResetPassword({
            variables: {
                email
            }
        });
        router.push('/');
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal_Modal, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "request__container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "__header",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Enter email to get link"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleRequestResetPassword,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    name: "email",
                                    placeholder: "Enter Email *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: "Email is required...!",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Email is incorrect format..."
                                        }
                                    })
                                }),
                                errors.email && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: RequestResetPassword_styles.errorMessage,
                                    role: "alert",
                                    children: errors.email.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: loading,
                                    style: {
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    },
                                    type: "submit",
                                    children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                        type: "Oval",
                                        color: "white",
                                        height: 30,
                                        width: 30,
                                        timeout: 30000
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png",
                                        width: "32px",
                                        height: "32px",
                                        color: "white"
                                    })
                                }),
                                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: ((ref = error.graphQLErrors[0]) === null || ref === void 0 ? void 0 : ref.message) || /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: RequestResetPassword_styles.errorMessage,
                                        children: "Sorry something went wrong...!"
                                    })
                                })
                            ]
                        }),
                        data && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p__forget",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: (ref1 = data.requestResetPassword) === null || ref1 === void 0 ? void 0 : ref1.message
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "form__control",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                children: [
                                    "Don't have an account?",
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>handleAuthAction("signup")
                                        ,
                                        children: "Get Invite!"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
//Styling page over here
const RequestResetPassword_styles = {
    errorMessage: {
        margin: 0,
        padding: 0,
        color: "red",
        fontSize: ".7rem"
    }
};
/* harmony default export */ const components_RequestResetPassword = (RequestResetPassword);

;// CONCATENATED MODULE: ./src/components/ResetPassword.tsx








const ResetPassword = ({ token  })=>{
    var ref, ref1;
    const { handleAuthAction  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const [resetPassword, { data , loading , error  }] = (0,client_.useMutation)(User/* RESET_PASSWORD */.bk);
    const handleSubmitResetPassword = handleSubmit(async ({ password , confirmpassword  })=>{
        await resetPassword({
            variables: {
                token,
                password,
                confirmpassword
            }
        });
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal_Modal, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "reset__container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "__header",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Reset Password"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                    onSubmit: handleSubmitResetPassword,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    name: "password",
                                    placeholder: "Enter Password *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: 'Password is Required...!'
                                    })
                                }),
                                errors.password && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: ResetPassword_styles.errorMessage,
                                    role: "alert",
                                    children: errors.password.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    name: "confirmpassword",
                                    placeholder: "Confirm Password *",
                                    autoComplete: "new-password",
                                    ref: register({
                                        required: 'Password is Required...!'
                                    })
                                }),
                                errors.password && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    style: ResetPassword_styles.errorMessage,
                                    role: "alert",
                                    children: errors.confirmpassword.message
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form__control",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    disabled: loading,
                                    style: {
                                        cursor: loading ? 'not-allowed' : 'pointer'
                                    },
                                    type: "submit",
                                    children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                        type: "Oval",
                                        color: "white",
                                        height: 30,
                                        width: 30,
                                        timeout: 30000
                                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png",
                                        width: "32px",
                                        height: "32px",
                                        color: "white"
                                    })
                                }),
                                error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    children: ((ref = error.graphQLErrors[0]) === null || ref === void 0 ? void 0 : ref.message) || /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: ResetPassword_styles.errorMessage,
                                        children: "Sorry something went wrong...!"
                                    })
                                })
                            ]
                        }),
                        data && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "p__forget",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                children: [
                                    (ref1 = data.resetPassword) === null || ref1 === void 0 ? void 0 : ref1.message,
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        onClick: ()=>handleAuthAction('signin')
                                        ,
                                        children: "Signin Now!"
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
//Styling page over here
const ResetPassword_styles = {
    errorMessage: {
        margin: 0,
        padding: 0,
        color: "red",
        fontSize: ".7rem"
    }
};
/* harmony default export */ const components_ResetPassword = (ResetPassword);

;// CONCATENATED MODULE: ./src/components/Partials/Navigation.tsx






const Navigation = ({ user  })=>{
    const { handleAuthAction , setAuthUser  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const [signout] = (0,client_.useMutation)(User/* SIGN_OUT */.dp);
    const router = (0,router_.useRouter)();
    // console.log("User Logged in on Navigation!:", loggedInUser);
    //create call singout function
    const handleSignout = async ()=>{
        try {
            var ref, ref1;
            const response = await signout();
            if (response === null || response === void 0 ? void 0 : (ref = response.data) === null || ref === void 0 ? void 0 : (ref1 = ref.signout) === null || ref1 === void 0 ? void 0 : ref1.message) {
                //Set Auth user to null
                setAuthUser(null);
                //Sync Signout
                window.localStorage.setItem('signout', Date.now().toString());
                //push user to Signin Page
                router.push('/');
            }
        } catch (error) {
            alert('Sorry can not proceed...!');
        }
    };
    //  console.log("user logged in:", loggedInUser)
    return !user ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navigation__not__authorize",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1620702365/Swizce/icons/swizce_aez2ms.png",
                            height: "34px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "swizce__navigation__link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        onClick: ()=>handleAuthAction('signin')
                        ,
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/login_qgoycx.png",
                            width: "32px",
                            height: "32px"
                        })
                    })
                })
            ]
        })
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navigation__authenticated",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1620702365/Swizce/icons/swizce_aez2ms.png",
                            height: "34px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__friends__list",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                href: "",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: "https://res.cloudinary.com/swizce/image/upload/v1620702241/Swizce/images/profile3_tl2cfr.png",
                                    className: "btn"
                                })
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__search__engine",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "search",
                        name: "search",
                        id: "search",
                        placeholder: "Search on Swizce..."
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1638441532/Swizce/images/digital-wallet_yclr8n.png",
                            width: "32px",
                            height: "32px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1638441232/Swizce/images/big-data_yxpu2d.png",
                            width: "32px",
                            height: "32px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: "https://res.cloudinary.com/swizce/image/upload/v1638441365/Swizce/images/ethereum_mobgvd.png",
                            width: "32px",
                            height: "32px"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "navigation__link",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            cursor: 'pointer'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            onClick: handleSignout,
                            src: "https://res.cloudinary.com/swizce/image/upload/v1622518178/Swizce/images/log-out_aqu0w7.png",
                            width: "32px",
                            height: "32px"
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const Partials_Navigation = (Navigation);

;// CONCATENATED MODULE: external "react-dropzone"
const external_react_dropzone_namespaceObject = require("react-dropzone");
;// CONCATENATED MODULE: ./src/components/Scream/components/Ondelfile.tsx

function FileHeader({ file , onDelete  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("button", {
        onClick: ()=>onDelete(file)
        ,
        children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "ti-close"
        })
    }));
}

;// CONCATENATED MODULE: ./src/components/Scream/components/Upload.tsx




function UploadItems({ file , onDelete , onUploaded  }) {
    const { 0: progress , 1: setProgress  } = (0,external_react_.useState)(0);
    const { 0: url1 , 1: setUrl  } = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        async function upload() {
            const url = await UploadFile(file, setProgress);
            onUploaded(file, url);
            setUrl(url);
        }
        upload();
    }, []);
    console.log("url uploaded:", url1);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid__upload__item",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                type: "Oval",
                color: "teal",
                height: 32,
                width: 32,
                timeout: progress
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: url1,
                alt: "",
                width: "85px",
                height: "85px"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(FileHeader, {
                file: file,
                onDelete: onDelete
            })
        ]
    }));
}
function UploadFile(file, onProgress) {
    const url = "https://api.cloudinary.com/v1_1/swizce/image/upload";
    const key = "swizce-scream";
    return new Promise((res, rej)=>{
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.onload = ()=>{
            const resp = JSON.parse(xhr.responseText);
            res(resp.secure_url);
        };
        xhr.onerror = (evt)=>rej(evt)
        ;
        xhr.upload.onprogress = (event)=>{
            if (event.lengthComputable) {
                const percentage = event.loaded / event.total * 100;
                onProgress(Math.round(percentage));
            }
        };
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", key);
        xhr.send(formData);
    });
}

;// CONCATENATED MODULE: ./src/components/Scream/Create.tsx











//Main Create Scream function
const Create = ()=>{
    var ref1;
    const { handleAuthAction , loggedInUser  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const router = (0,router_.useRouter)();
    const { 0: files , 1: setFiles  } = (0,external_react_.useState)([]);
    //Create form request
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    //create backend function
    const [createScream1, { loading , error: error1  }] = (0,client_.useMutation)(Scream/* CREATE_SCREAM */.u);
    //Select files and uplaod to cloud storage
    const onDrop = (0,external_react_.useCallback)((accFile, rejFile)=>{
        const mappedAcc = accFile.map((file)=>({
                file,
                errors: []
            })
        );
        setFiles((curr)=>[
                ...curr,
                ...mappedAcc,
                ...rejFile
            ]
        );
    }, []);
    function onUploaded(file, url) {
        setFiles((curr)=>curr.map((fw)=>{
                if (fw.file === file) {
                    return {
                        ...fw,
                        url
                    };
                }
                return fw;
            })
        );
    }
    //Create on delete file function
    function onDelete(file) {
        setFiles((curr)=>curr.filter((fw)=>fw.file !== file
            )
        );
    }
    const { getRootProps , getInputProps , open  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        noClick: true,
        noKeyboard: true,
        multiple: false,
        onDrop
    });
    // console.log("files", files)
    const submitCreateScream = handleSubmit(async ({ description  })=>{
        try {
            if (files) {
                var ref;
                const results = await createScream1({
                    variables: {
                        description,
                        imageUrl: files[0].url
                    },
                    refetchQueries: [
                        {
                            query: Scream/* QUERY_SCREAMS */.J
                        }
                    ]
                });
                if (results === null || results === void 0 ? void 0 : (ref = results.data) === null || ref === void 0 ? void 0 : ref.createScream) {
                    const { createScream  } = results.data;
                    if (createScream) {
                        handleAuthAction("close");
                        //push user to their dashboard page
                        router.push("/Screams");
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(Modal_Modal, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onClick: submitCreateScream,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "create__header",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        children: "Create Scream"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "create__nav",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "__profile",
                            children: !loggedInUser.images ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "https://res.cloudinary.com/swizce/image/upload/v1636603317/Swizce/icons/no-image_md4u0i.png",
                                alt: ""
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: loggedInUser.images,
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            children: [
                                "@",
                                loggedInUser.username
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "scream__status",
                            children: "status:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "tags__list",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "@feeling, activity, question...? (Category Tags)"
                            })
                        })
                    ]
                }),
                errors.description && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    style: Create_styles.errorMessage,
                    role: "alert",
                    children: errors.description.message
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "create__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                            placeholder: "What is your mind scream...?",
                            name: "description",
                            cols: 70,
                            rows: 7,
                            maxLength: 515,
                            ref: register({
                                required: "Scream Description required ...!",
                                maxLength: {
                                    value: 515,
                                    message: "Scream Description must not be more than 515 characters"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "uploader__media",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    ...getRootProps({
                                        className: "dropzone"
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            ...getInputProps()
                                        }),
                                        files.map((fileWrapper, idx)=>/*#__PURE__*/ jsx_runtime_.jsx(UploadItems, {
                                                onDelete: onDelete,
                                                onUploaded: onUploaded,
                                                file: fileWrapper.file
                                            }, idx)
                                        )
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "addmore__actions",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: open,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "ti-image"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "ti-music"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: " ti-location-arrow"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                                className: "ti-rss-alt"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("br", {
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "create__footer",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            disabled: loading,
                            style: {
                                cursor: loading ? "not-allowed" : "pointer"
                            },
                            type: "submit",
                            children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                type: "Oval",
                                color: "white",
                                height: 30,
                                width: 30,
                                timeout: 30000
                            }) : "Spread"
                        }),
                        error1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: ((ref1 = error1.graphQLErrors[0]) === null || ref1 === void 0 ? void 0 : ref1.message) || /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                style: Create_styles.errorMessage,
                                children: "Sorry something went wrong...!"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
const Create_styles = {
    errorMessage: {
        margin: 0,
        padding: 5,
        color: "red",
        fontSize: ".7rem"
    }
};
/* harmony default export */ const Scream_Create = (Create);

;// CONCATENATED MODULE: ./src/components/Modal/CreateService.tsx



const CreateServiceModal = ({ children  })=>{
    const { handleAuthAction  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "service__modal__container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "service__styled__modal",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "service__modal__action",
                    onClick: ()=>handleAuthAction('close')
                    ,
                    children: "\xd7"
                }),
                children
            ]
        })
    }));
};
/* harmony default export */ const CreateService = (CreateServiceModal);

// EXTERNAL MODULE: ./src/graphql/Service.ts
var Service = __webpack_require__(1896);
;// CONCATENATED MODULE: ./src/components/Service/utils/Uploadlogo.tsx



const Uploadlogo = ()=>{
    const { 0: logo , 1: setLogo  } = (0,external_react_.useState)(null);
    const { 0: logoUrl , 1: setLogoUrl  } = (0,external_react_.useState)(null);
    //upload to cloudinary
    const onDrop = (0,external_react_.useCallback)((acceptedFiles)=>{
        const url = 'https://api.cloudinary.com/v1_1/swizce/image/upload';
        acceptedFiles.forEach(async (acceptedFile)=>{
            const formData = new FormData();
            formData.append('file', acceptedFile);
            formData.append('upload_preset', 'swizce-service-logos');
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            setLogo(data);
            setLogoUrl(data.secure_url);
        });
    }, []);
    const { getRootProps , getInputProps , open  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
        onDrop
    });
    //pass url to main create service component
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "__service__profile__upload",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            ...getRootProps({
                className: "dropzone"
            }),
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    ...getInputProps(),
                    value: logoUrl
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: open,
                    children: !logoUrl ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png",
                        alt: ""
                    }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: logoUrl,
                        alt: ""
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const utils_Uploadlogo = (Uploadlogo);

;// CONCATENATED MODULE: ./src/components/Service/Add.tsx











const AddService = ()=>{
    var ref;
    const { handleAuthAction  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    const { register , errors , handleSubmit  } = (0,external_react_hook_form_namespaceObject.useForm)();
    const { 0: image , 1: setImage  } = (0,external_react_.useState)(null);
    const onDrop = (0,external_react_.useCallback)((acceptedFiles)=>{
        const url = 'https://api.cloudinary.com/v1_1/swizce/image/upload';
        acceptedFiles.forEach(async (acceptedFile)=>{
            const formData = new FormData();
            formData.append('file', acceptedFile);
            formData.append('upload_preset', 'swizce-service');
            const response = await fetch(url, {
                method: "POST",
                body: formData
            });
            //return file as url
            const data = await response.json();
            setImage(data);
        });
    }, []);
    const { getRootProps , getInputProps , open  } = (0,external_react_dropzone_namespaceObject.useDropzone)({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        multiple: false,
        onDrop
    });
    const [createService1, { loading , error: error1  }] = (0,client_.useMutation)(Service/* CREATE_SERVICE */.M);
    const router = (0,router_.useRouter)();
    //submit function to database
    const submitCreateService = handleSubmit(async ({ name , description , contact , address , tags ,  })=>{
        try {
            const result = await createService1({
                variables: {
                    name,
                    description,
                    contact,
                    address,
                    tags,
                    imageUrl: image.secure_url
                },
                refetchQueries: [
                    {
                        query: Service/* QUERY_SERVICE */.X
                    }
                ]
            });
            // console.log("result: ", result)
            if (result.data.createService) {
                const { createService  } = result.data;
                if (createService) {
                    handleAuthAction('close');
                    router.push('/Services');
                }
            }
        } catch (error) {
            console.log(error);
        }
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx(CreateService, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
            onClick: submitCreateService,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "create__service",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "create__service__header",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            children: "Create Service"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "create__service__body",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "__service__cover__upload",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    ...getRootProps({
                                        className: 'dropzone'
                                    }),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                            ...getInputProps()
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            type: "button",
                                            onClick: open,
                                            children: !image ? /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image.png",
                                                alt: ""
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: image.secure_url,
                                                alt: ""
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "create__service__contents",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(utils_Uploadlogo, {
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "__service__content__fileds",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service__form__control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Name:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Enter Service name...",
                                                        name: "name",
                                                        ref: register({
                                                            required: "Name filed is required...!"
                                                        })
                                                    })
                                                ]
                                            }),
                                            errors.name && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: Add_styles.errorMessage,
                                                role: "alert",
                                                children: errors.name.message
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service__form__control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Description:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                        placeholder: "Provide your brand service...?",
                                                        name: "description",
                                                        ref: register({
                                                            required: 'Description field also require...!',
                                                            maxLength: {
                                                                value: 5000,
                                                                message: "Scream Description must not be more than 5000 characters"
                                                            }
                                                        }),
                                                        cols: 30,
                                                        rows: 5
                                                    })
                                                ]
                                            }),
                                            errors.description && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: Add_styles.errorMessage,
                                                role: "alert",
                                                children: errors.description.message
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service__form__control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Contact:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Enter Service Contact...",
                                                        name: "contact",
                                                        ref: register({
                                                            required: "Contact is require field...!"
                                                        })
                                                    })
                                                ]
                                            }),
                                            errors.contact && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: Add_styles.errorMessage,
                                                role: "alert",
                                                children: errors.contact.message
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service__form__control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Tags:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Service Tags...",
                                                        name: "tags",
                                                        ref: register({
                                                            required: "Tags is require field...!"
                                                        })
                                                    })
                                                ]
                                            }),
                                            errors.tags && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: Add_styles.errorMessage,
                                                role: "alert",
                                                children: errors.tags.message
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "service__form__control",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                                        children: "Address:"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                        type: "text",
                                                        placeholder: "Select address brand service...",
                                                        name: "address",
                                                        ref: register({
                                                            required: "Address is require field...!"
                                                        })
                                                    })
                                                ]
                                            }),
                                            errors.address && /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                style: Add_styles.errorMessage,
                                                role: "alert",
                                                children: errors.address.message
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "create__bottom__acctions",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        disabled: loading,
                                        style: {
                                            cursor: loading ? 'not-allowed' : 'pointer'
                                        },
                                        type: "submit",
                                        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx((external_react_loader_spinner_default()), {
                                            type: "Oval",
                                            color: "white",
                                            height: 30,
                                            width: 30,
                                            timeout: 30000
                                        }) : 'Submit'
                                    }),
                                    error1 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: ((ref = error1.graphQLErrors[0]) === null || ref === void 0 ? void 0 : ref.message) || /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: Add_styles.errorMessage,
                                            children: "Sorry something went wrong...!"
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const Add_styles = {
    errorMessage: {
        margin: 0,
        padding: 5,
        color: 'red',
        fontSize: '.7rem'
    }
};
/* harmony default export */ const Add = (AddService);

;// CONCATENATED MODULE: ./src/components/Layout.tsx





// import { useQuery } from '@apollo/client';
// import { QUERY_SONGS } from '../graphql/Song'
// import { Song } from '../types'








const Layout = ({ children  })=>{
    const { authAction , handleAuthAction , loggedInUser  } = (0,external_react_.useContext)(AuthContext/* AuthContext */.V);
    // console.log("User Logged in from layout!:", loggedInUser);
    const { asPath , replace , pathname , query  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        if (asPath === '/dashboard#_=_' || asPath === 'dashboard#') {
            replace('/dashboard');
        }
        if (asPath === '#_=_' || asPath === '/#') {
            replace('/');
        }
    }, [
        asPath,
        replace
    ]);
    (0,external_react_.useEffect)(()=>{
        if (query === null || query === void 0 ? void 0 : query.resetToken) handleAuthAction('reset');
    }, [
        query
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: pathname === '/' ? 'HOME' : pathname.split('/')[1].toUpperCase()
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "https://fonts.googleapis.com/css2?family=Noto+Sans&family=Roboto&display=swap",
                        rel: "stylesheet"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Partials_Navigation, {
                user: loggedInUser
            }),
            children,
            authAction !== 'close' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    authAction === 'signup' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Signup, {
                            })
                        ]
                    }),
                    authAction === 'signin' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_Signin, {
                            })
                        ]
                    }),
                    authAction === 'request' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_RequestResetPassword, {
                            })
                        ]
                    }),
                    authAction === 'reset' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(components_ResetPassword, {
                                token: query === null || query === void 0 ? void 0 : query.resetToken
                            })
                        ]
                    }),
                    authAction === 'create' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Scream_Create, {
                                userId: loggedInUser.id
                            })
                        ]
                    }),
                    authAction === 'create-service' && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Modal_Backdrop, {
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Add, {
                                userId: loggedInUser.id
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./src/apollo/Client.ts

const client = new client_.ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new client_.InMemoryCache({
        typePolicies: {
            User: {
                fields: {
                    roles: {
                        merge (_ignored, incoming) {
                            return incoming;
                        }
                    }
                }
            },
            Query: {
                fields: {
                    users: {
                        merge (_ignored, incoming) {
                            return incoming;
                        }
                    }
                }
            }
        }
    }),
    credentials: 'include'
});

;// CONCATENATED MODULE: ./src/pages/_app.tsx







function App({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(client_.ApolloProvider, {
        client: client,
        children: /*#__PURE__*/ jsx_runtime_.jsx(AuthContext/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        })
    }));
}
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 9114:
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1223:
/***/ ((module) => {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [431], () => (__webpack_exec__(273)));
module.exports = __webpack_exports__;

})();