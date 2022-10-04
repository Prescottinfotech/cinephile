export default function validateInfo(user){
    let errors = {}

    if(!user.fname){
        errors.fname="First Name required"
    }
    if(!user.lname){
        errors.lname="Last Name required"
    }
    if(!user.email){
        errors.email="Email required"
    }
    else if( /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(user.email))
    {
        errors.email="Email address is invalid"
    }

    if(!user.phone){
        errors.phone="phone required"
    }
   else if( /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/i.test(user.phone) ){
        errors.phone="invalid phone number"
   }
    if(!user.password){
        errors.password="password required"
    }
    if(!user.cpassword){
        errors.cpassword="confirm password required"
    }

    return errors;

}