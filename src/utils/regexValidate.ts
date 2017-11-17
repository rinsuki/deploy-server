export default (regex: RegExp) => {
    return {
        validator: (v: string) => regex.test(v),
        message: 'This parameter regex is '+regex.toString()
    }
}