import { getRepository } from "typeorm";
import { Controller } from "./Controller";
import { Keszlet } from "../entity/Keszlet";


export class KeszletController extends Controller {
    repository = getRepository(Keszlet);
}