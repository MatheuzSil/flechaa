import { login } from "./login";


export async function PATCH(req: Request) { return login(req) } 