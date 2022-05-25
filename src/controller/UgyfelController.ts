import { getRepository } from "typeorm";
import { Controller } from "./Controller";
import { Ugyfel } from "../entity/Ugyfel";



export class UgyfelController extends Controller {
    repository = getRepository(Ugyfel);
}