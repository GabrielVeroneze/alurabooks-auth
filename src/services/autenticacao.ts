import api from '@/services/api'
import { Usuario } from '@/interfaces/Usuario'
import { Credenciais } from '@/interfaces/Credenciais'
import { Autenticacao } from '@/interfaces/Autenticacao'

export async function registrarUsuario(usuario: Usuario): Promise<number> {
    try {
        const resposta = await api.post<Usuario>('/public/registrar', usuario)

        return resposta.status
    } catch {
        throw new Error('Erro ao registrar o usuário.')
    }
}

export async function logarUsuario(credenciais: Credenciais): Promise<Autenticacao> {
    try {
        const resposta = await api.post<Autenticacao>('/public/login', credenciais)

        return resposta.data
    } catch {
        throw new Error('Erro ao realizar o login.')
    }
}
