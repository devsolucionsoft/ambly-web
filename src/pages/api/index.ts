import axios from "axios"
const url: string = "https://apiambly.solucionsoft.com"

interface userLoginType {
  email: string
  password: string
}

type userRegistryType = userLoginType & {
  username: string
  phone: string
  city: string
  country: string
  gender: string
  email: string
  password: string
}

export class ConfigApi {
  async Splash() {
    try {
      return await axios.get(`${url}/us...`)
    } catch (error: any) {
      return error.response
    }
  }
}

export class AuthApi {
  async ForgotPassword(email: string) {
    try {
      return await axios.put(`${url}/auth/forgot-password`, { email })
    } catch (error: any) {
      return error.response
    }
  }

  async UserLogin(data: userLoginType) {
    try {
      return await axios.post(`${url}/auth/login`, data)
    } catch (error: any) {
      return error.response
    }
  }

  async UserLoginGoogle(email?: string) {
    try {
      return await axios.post(`${url}/social/google`, {
        email_google: email,
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserRegistryGoogle(data: { email: string }) {
    try {
      return await axios.post(`${url}/social/google`, {
        email_google: data.email,
        password: "0000000",
        username: data.email,
        role: "user",
        dateTime: new Date(),
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserLoginFacebook(email?: string) {
    try {
      return await axios.post(`${url}/social/facebook`, {
        email_facebook: email,
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserRegistryFacebook(data: { email: string }) {
    try {
      return await axios.post(`${url}/social/facebook`, {
        email_facebook: data.email,
        password: "0000000",
        username: data.email,
        role: "user",
        dateTime: new Date(),
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserLoginApple(user?: any) {
    try {
      return await axios.post(`${url}/social/apple`, {
        token_apple: user,
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserRegistryApple(data: any) {
    try {
      return await axios.post(`${url}/social/apple`, {
        email_apple: data.email,
        token_apple: data.id,
        password: "0000000",
        username: data.email,
        role: "user",
        dateTime: new Date(),
      })
    } catch (error: any) {
      return error.response
    }
  }

  async UserRegister(data: any) {
    try {
      return await axios.post(`${url}/users`, {
        username: data.username,
        password: data.password,
        email: data.email,
        role: "user",
        dateTime: new Date(),
      })
    } catch (error: any) {
      return error.response
    }
  }
}

export class UserApi {
  async GetUser(id: any) {
    try {
      return await axios.get(`${url}/users/${id}`)
    } catch (error: any) {
      return error.response
    }
  }
  async GetCategories() {
    try {
      return await axios.get(`${url}/category/all`)
    } catch (error: any) {
      return error.response
    }
  }

  async GetCourse(id: string | number) {
    try {
      return await axios.get(`${url}/course/${id}`)
    } catch (error: any) {
      return error.response
    }
  }

  async GetAllCourses() {
    try {
      return await axios.get(`${url}/course/all`)
    } catch (error: any) {
      return error.response
    }
  }

  async GetMyCourses(id: any) {
    try {
      return await axios.get(`${url}/course/all/course/${id}`)
    } catch (error: any) {
      return error.response
    }
  }

  async EditUser(id: any, inputs: any) {
    const data = {
      username: inputs.username,
      phone: inputs.phone,
      city: "---",
      country: inputs.country,
      gender: inputs.gender,
      email: inputs.email,
    }
    try {
      return await axios.patch(`${url}/users/${id}`, data)
    } catch (error: any) {
      return error.response
    }
  }
}

export class CourseApi {
  async GetCourses() {
    try {
      return await axios.get(`${url}/course`)
    } catch (error: any) {
      return error.response
    }
  }
  async saveVideoTrailer(data: {
    time_seen: number
    modules_id: number
    video_id: number
  }) {
    try {
      return await axios.post(`${url}/modules/save/video`, {
        time_seen: data.time_seen,
        modules_id: data.modules_id,
        video_id: data.video_id,
      })
    } catch (error: any) {
      return error.response
    }
  }
}

export class InstructorApi {
  async GetInstructors() {
    try {
      return await axios.get(`${url}/instructor`)
    } catch (error: any) {
      return error.response
    }
  }
}

export class TrailersApi {
  async GetTrailers() {
    try {
      return await axios.get(`${url}/trailer`)
    } catch (error: any) {
      return error.response
    }
  }
}

export class PayuApi {
  async GeneratePayment(data: any) {
    try {
      return await axios.post(`${url}/payu/payu`, data)
    } catch (error: any) {
      return error.response
    }
  }
  async GetOrder(data: { orderId: any; userId: any }) {
    try {
      return await axios.post(`${url}/payu/getOrder/consult`, data)
    } catch (error: any) {
      return error.response
    }
  }
}
