export const isEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
export const isUserNameWithAt = /[@]{1}[a-zA-zа-я0-9]+[_./#%&+-]*$/;
export const isNoSpaces = /^\S*$/;
export const isIPv4 = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.|$)){4}\b/;
export const isUserNameWithoutAt = /^[a-zA-Za-я0-9]{2,10}$/;
export const isFullName = /^[^0-9][а-яa-zA-Z_@./#&+-]{2,15}[\s]{1}[^0-9][а-яa-zA-z_@./#&+-]{2,15}[\S]*$/;

// +733 (961) 066-17-05
export const isSpaceDashedFormat = /^[+]{1}[0-9]{1,3}[ ]{1}[(]{1}[0-9]{3}[)]{1}[ ]{1}[0-9]{3}[-]{1}[0-9]{2}[-]{1}[0-9]{2}[^a-zA-Z_@./#%&+-]*$/;
// +391754613624
export const isInternationalFormat = /^[+]{1}[0-9]{1,3}[0-9]{9,10}[^a-z_@./#$%&+-]*$/;
export const getSpecialPhoneChars = /[\s-()]/gm;

export const isEmailValid = (testString: string): Boolean => {
    return isEmail.test(testString)
}

export const isUsernameValid = (testString: string): Boolean => {
    return (isUserNameWithAt.test(testString) && isNoSpaces.test(testString)) || isUserNameWithoutAt.test(testString)
}

export const isIPValid = (testString: string): Boolean => {
    return isIPv4.test(testString)
}

export const isFullnameValid = (testString: string): Boolean => {
    return isFullName.test(testString)
}

export const isPhoneNumberValid = (testString: string): Boolean => {
    return  isSpaceDashedFormat.test(testString) || isInternationalFormat.test(testString)
}