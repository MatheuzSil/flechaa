import { register } from "./register";


export async function POST(req: Request) { return register(req)}