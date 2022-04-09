import  createConnection  from "../src/database";
import { CreateUserController } from '../src/controllers/CreateUserController';
import { Request } from 'express';
import { makeMockResponse } from '../src/utils/mocks/mockResponse';



describe("CreateUserController", () =>{
    it("deve retornar o id do usuario", async () => {
        const connection = await createConnection();
        await connection.runMigrations();
        const createUserController = new CreateUserController();

        const request = {
            body: {
                nome: "lucas",
                email: "lucassousamattos@gmail.com"
            }

        }as Request

        const response = makeMockResponse();

        const result = await createUserController.hundle(request, response);
        await connection.query('DELETE FROM usuarios')

        console.log(result)
    })
})