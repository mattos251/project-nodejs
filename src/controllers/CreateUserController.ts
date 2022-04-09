import {Request , Response} from "express";
import {v4 as uuid} from "uuid";
import { Usuario } from "../entities/Usuarios";
import {CreateUserService} from "../service/CreateUserService"


class CreateUserController{
    async hundle(request: Request, response: Response) {
        
        const createUserService = new CreateUserService(); 

        const nome  = request.body.nome;
        const email = request.body.email;
        const id = uuid();

        if(nome.length === 0)
        {
            return response.status(400).json({mensagem: "preencha os campos"})
        }

        const user = await createUserService.execute({id, nome, email})

        return response.status(201).json(Usuario)


        
    }
}

export { CreateUserController }