import { UserBusiness } from "../src/business/UserBusiness";
import { NotFoundError } from "../src/error/NotFoundError";
import { User, UserInputDTO, UserRole } from "../src/model/User";

//Para mockar, basta criar como um objeto cheio de módulos.
const userDatabase = {
  //Mesmo nome dos módulos e deve seguir se for ou não async.
  //createUser é void, logo retorna nada. (Inicialmente)
  createUser:jest.fn(async (user:User) => {}),
  getUserByEmail: jest.fn((email:string) => {
    if(email === "maradona@email.com") {
      return User.toUserModel ({
        id: "id_usuario",
        name: "nome_usuario",
        email,
        password: "123456",
        userRole: UserRole.ADMIN
      })
    } else {
      throw new NotFoundError(`Unable to find user with email: ${email}`)
    }
  })
}

const authenticator = {
  generateToken: jest.fn((payload: {id:string, role:UserRole}) => "token_abuble"),
  getData: jest.fn((token:string) => {
    switch (token) {
      case "userToken":
        return {id:"id_do_token", role:"NORMAL"}
      case "adminToken":
        return {id:"id_do_token", role:"ADMIN"}
      default:
        return undefined
    }
  })
}

const idGenerator = {
  generate:jest.fn(() => "hohenzollern")
}

const hashManager = {
  hash:jest.fn((password:string) => "HOHENZOLLERN_SECRET_PASS_HASH"),
  compare: jest.fn(async (text:string, hash:string) => {
    return text === "123123"? true:false
  })
}

const userBusiness = new UserBusiness(
  userDatabase as any,
  authenticator as any,
  idGenerator as any,
  hashManager as any
)

describe ("SignUp Text Flow", () => {
  //Deve ser async, porque o formato do método de UserBusiness é async.
  test("Should return error when the email format is wrong", async() => {
    expect.assertions(2)
    const user = {
      email:"maradona.com",
      name:"Maradona",
      password:"123456",
      role:"ADMIN"
    } as UserInputDTO
    try {
      await userBusiness.createUser(user)
    } catch (error:any) {
      expect(error.message).toBe(`Invalid email format`)
      expect(error.code).toBe(417)
    }
  })
  test("Should return error when the role format is wrong", async() => {
    expect.assertions(1)
    const user = {
      email:"maradona@email.com",
      name:"Maradona",
      password:"123456",
      role:"NORMAL"
    } as UserInputDTO
    try {
      await userBusiness.createUser(user)
    } catch (error:any) {
      expect(error.message).toBe(`Invalid user role`)
    }
  })
  test("Should return error when the password is wrong", async() => {
    expect.assertions(2)
    const user = {
      email:"maradona@email.com",
      name:"Maradona",
      password:"12345",
      role:"NORMAL"
    } as UserInputDTO
    try {
      await userBusiness.createUser(user)
    } catch (error:any) {
      expect(error.message).toBe(`Invalid Password!`)
      expect(error.code).toBe(417)
    }
  })
  test("Should return error when the password was not implemented", async() => {
    expect.assertions(2)
    const user = {
      email:"maradona@email.com",
      name:"Maradona",
      role:"NORMAL"
    } as UserInputDTO
    try {
      await userBusiness.createUser(user)
    } catch (error:any) {
      expect(error.message).toBe(`Invalid Password!`)
      expect(error.code).toBe(417)
    }
  })
})