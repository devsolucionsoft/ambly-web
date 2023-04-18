// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from "iron-session"
import type { User } from "../src/pages/api/user"

export const sessionOptions: IronSessionOptions = {
  password: "WxLVPmE5bnGP1MEQR5fvJbX0hBbvaCoM",
  cookieName: "ambly_user_cookie",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
  },
}

export async function sessionVerificationNotCreated({ req }: any) {
  const user = req.session.user

  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: user,
    },
  }
}

export async function sessionVerificationCreated({ req }: any) {
  const user = req.session.user

  if (user && user.token) {
    return {
      redirect: {
        destination: "/usuario/inicio",
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: User
  }
}
