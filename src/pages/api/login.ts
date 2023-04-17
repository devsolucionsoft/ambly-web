import { withIronSessionApiRoute } from "iron-session/next"
import { NextApiRequest, NextApiResponse } from "next"
import { sessionOptions } from "../../../lib/session"
import { AuthApi } from "./"

const AuthApiModel = new AuthApi()

export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const data = await req.body
  const response = await AuthApiModel.UserLogin(data)
  console.log("withIronSessionApiRoute", response.status)

  if (response.status == 200) {
    const user = response.data
    req.session.user = user
    await req.session.save()
    res.json(user)
  } else {
    res.status(500).json({ message: (response.data as Error).message })
  }
}
