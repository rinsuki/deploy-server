module.exports = r => {
    return {
        validator: v => r.test(v),
        message: 'This parameter regex is '+r.toString()
    }
}