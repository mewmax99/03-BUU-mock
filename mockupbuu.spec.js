function BuuAuthen(authService) {
    this.authService = authService

    this.signIn = (username, password) => {
        var account = this.authService(username, password)
        return {
            name: account.name,
            email: account.email,
            token: '0123456789'
        }
    }
}

test('FacebookAuthen', ()=> {
    //Arrange
    const mockFacebookAuthen = jest.fn()
        .mockReturnValue({
            name:'Tanapon Paetong',
            email:'tanapon.paetong@gmail.com',
            facebookId:'1234567890'
        })
    var app = new BuuAuthen(mockFacebookAuthen)

    //Act
    var username = 'tanapon.paetong'
    var password = '123456'
    var result = app.signIn(username, password)

    //Assert
    expect(mockFacebookAuthen).toHaveBeenCalled()
    expect(mockFacebookAuthen).toHaveBeenCalledWith(username,  password)
    expect(result).toHaveProperty('name')
    expect(result).toHaveProperty('email')
    expect(result).toHaveProperty('token')
    expect(result.name).toBe('Tanapon Paetong')
    expect(result.email).toBe('tanapon.paetong@gmail.com')
    expect(result.token).toHaveLength(10)

})