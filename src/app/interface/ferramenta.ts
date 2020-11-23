import { Usuario } from './usuario';

export interface Ferramenta {
    nomeferramenta: string,
    dia: string,
    preco: string,
    descricao: string,
    usuario: Usuario,
}